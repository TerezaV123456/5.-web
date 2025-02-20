const postsUrl = 'posts.json'; 

fetch(postsUrl)
    .then(response => response.json())
    .then(data => {
        const postsContainer = document.getElementById('posts-container');
        const latestPosts = data.slice(0, 3);

        latestPosts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.innerHTML = 
                <img src="${post.image}" alt="${post.title}" class="post-image">
                <h3>${post.title}</h3>
                <p>${post.excerpt}</p>
                <a href="${post.url}">Read more</a>
            ;
            postsContainer.appendChild(postElement);
        });
    })
    .catch(error => console.error('Chyba při načítání příspěvků:', error));