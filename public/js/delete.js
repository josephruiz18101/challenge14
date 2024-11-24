const handleDeletePost = async (event) => {
    event.preventDefault();

    const response = await fetch(`/api/posts/${param}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    })

    if (response.ok) {
        location.replace('/')
    } else {
        alert('Failed to delete post')
    }
};

document.querySelector('#submit-delete-post').addEventListener('click', handleDeletePost);