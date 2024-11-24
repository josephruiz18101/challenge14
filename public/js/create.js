const createPostHandler = async (event) => {
    event.preventDefault();

    postTitle = document.querySelector('#post-title-input').value.trim();
    postContent = document.querySelector('#post-content-input').value.trim();

    if (postTitle && postContent) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({ postTitle, postContent }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            location.reload();
        } else {
            alert('Failed to create post');
        }
    }

}

document.querySelector('#submit-post').addEventListener('click', createPostHandler);