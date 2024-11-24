const createCommentHandler = async (event) => {
    event.preventDefault();

    commentContent = document.querySelector('#comment-content-input').value.trim();
    postId = parseInt(document.querySelector('#comment').dataset.post)

    console.log(postId)

    if (commentContent && postId) {
        const response = await fetch('/api/comment', {
            method: 'POST',
            body: JSON.stringify({ commentContent, postId }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            location.reload();
        } else {
            alert('Failed to create comment');
        }
    }

}

document.querySelector('#submit-comment').addEventListener('click', createCommentHandler);