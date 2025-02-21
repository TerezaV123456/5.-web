const postsUrl = 'posts.json'; // URL k vašemu JSON souboru s příspěvky
const infoUrl = 'info.json'; // URL k vašemu JSON souboru s informacemi pro hráče
const tableUrl = 'table.json'; // JSON soubor s tabulkou

// Načtení příspěvků
fetch(postsUrl)
    .then(response => response.json())
    .then(data => {
        const latestPosts = data.slice(0, 3); // Poslední 3 příspěvky

        function displayPosts(containerId, posts) {
            const postsContainer = document.getElementById(containerId);
            postsContainer.innerHTML = '';
            posts.forEach(post => {
                const postElement = document.createElement('div');
                postElement.classList.add('post');
                postElement.innerHTML = `
                    <img src="${post.image}" alt="${post.title}" class="post-image">
                    <h3>${post.title}</h3>
                    <p>${post.excerpt}</p>
                    <a href="${post.url}">Read more</a>
                `;
                postsContainer.appendChild(postElement);
            });
        }

        displayPosts('posts-container', latestPosts);
    })
    .catch(error => console.error('Chyba při načítání příspěvků:', error));

// Načtení informací pro hráče
fetch(infoUrl)
    .then(response => response.json())
    .then(data => {
        document.getElementById('last-match').innerHTML = `<h3>Lorem ipsum</h3><p>${data.lastMatch}</p>`;
        document.getElementById('next-match').innerHTML = `<h3>Lorem ipsum</h3><p>${data.nextMatch}</p>`;
        document.getElementById('event-invitations').innerHTML = `<h3>Lorem ipsum</h3><p>${data.eventInvitations}</p>`;

        const trainingContainer = document.getElementById('training-times');
        trainingContainer.innerHTML = '';
        const trainingHeader = document.createElement('h3');
        trainingHeader.innerText = 'Lorem ipsum';
        trainingContainer.appendChild(trainingHeader);

        data.trainingTimes.forEach(training => {
            const trainingElement = document.createElement('div');
            trainingElement.innerHTML = `<p>${training.team}: ${training.time}</p>`;
            trainingContainer.appendChild(trainingElement);
        });
    })
    .catch(error => console.error('Chyba při načítání informací pro hráče:', error));

// Načtení tabulky z JSON souboru
fetch(tableUrl)
    .then(response => response.json())
    .then(data => {
        const tableBody = document.querySelector('#leagueTable tbody');
        tableBody.innerHTML = '';

        data.forEach(row => {
            const tr = document.createElement('tr');
            row.forEach(cell => {
                const td = document.createElement('td');
                td.textContent = cell;
                tr.appendChild(td);
            });
            tableBody.appendChild(tr);
        });
    })
    .catch(error => console.error('Chyba při načítání tabulky:', error));
