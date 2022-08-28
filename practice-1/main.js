const loadComments = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayComments(data))
}

const displayComments = (comments) => {
    const commentBox = document.getElementById('comment-box');

    for(let i=0; i<20; i++) {
        const comment = comments[i];
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('bg-sky-200', 'lg:w-7/12', 'w-11/12', 'mx-auto', 'rounded-lg', 'py-7', 'px-10', 'mb-2')

        commentDiv.innerHTML = `
            <h3 class="text-center text-3xl font-semibold"> ${comment.id}. ${comment.name} </h3>
            <a class="block text-center text-sm mb-3 mt-2">${comment.email}</a>
            <p class="text-justify"> ${comment.body} </p>
            <button class="bg-sky-400 active:bg-sky-600 px-5 py-3 text-white rounded font-semibold mt-5 block mx-auto" onclick="postDetails(${comment.id})">Post Details</button>
        `
        commentBox.appendChild(commentDiv);
    }
}

const postDetails = commentId => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${commentId}`)
    .then(res => res.json())
    .then(data => showThePost(data))
}

const showThePost = (thePost) => {
    const postDetails = document.getElementById('post-details');
    postDetails.innerHTML = `
    <h3 class="text-center text-3xl font-semibold mb-3"> ${thePost.title} </h3>
    <p class="text-justify"> ${thePost.body} </p>
    `
    postDetails.classList.remove('hidden');
    console.log(thePost)
}

loadComments()