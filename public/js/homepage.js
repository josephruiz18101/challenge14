document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Fetch posts from the server (optional: if you need to update dynamically)
        const response = await fetch('/api/posts');
        if (!response.ok) {
            throw new Error('Failed to fetch posts');
        }

        const posts = await response.json();

        // Render posts dynamically (if not rendered server-side)
        const postsContainer = document.querySelector('#posts-container');
        if (postsContainer) {
            postsContainer.innerHTML = posts.map(post => `
                <div class="card my-3">
                    <div class="card-body">
                        <h5 class="card-title">${post.title}</h5>
                        <p class="card-text">${post.content}</p>
                        <p class="card-text"><small class="text-muted">By ${post.user.username}</small></p>
                    </div>
                </div>
            `).join('');
        }
    } catch (error) {
        console.error('Error loading posts:', error);
    }
});
