const postTitle = document.querySelector('#post-title').textContent;
const titleField = document.querySelector('#edit-title-input')
titleField.value = postTitle;

const postContent = document.querySelector('#post-content').textContent;
const contentField = document.querySelector('#edit-content-input');
contentField.value = postContent;

const param = document.querySelector('#comment').dataset.post;

const handleUpdatePost = async () => {
    const newPostTitle = titleField.value;
    const newPostContent = contentField.value;

    if (newPostContent && newPostTitle) {
        const response = await fetch(`/api/posts/${param}`, {
            method: 'PUT',
            body: JSON.stringify({ newPostTitle, newPostContent }),
            headers: { 'Content-Type': 'application/json' }
        })

        if (response.ok) {
            location.reload();
        } else {
            alert('Failed to edit post')
        }
    }
}

document.querySelector('#submit-edit-post').addEventListener('click', handleUpdatePost);