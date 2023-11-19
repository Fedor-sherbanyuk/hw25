function searchPost() {
    const number = document.getElementById('input').value;
    if (number >= 1 && number <= 100) {
        fetch(`https://jsonplaceholder.typicode.com/posts/${number}`)
            .then(response => response.json())
            .then(json => {
                const postContainer = document.getElementById("postContainer");
                postContainer.innerHTML = `<h2>Post #${json.id}</h2>
                                                   <p>${json.title}</p>
                                                   <p>${json.body}</p>`;
            })
            .catch(error => console.error('Ошибка:', error));
    } else {
        alert("Ввести правильный ID поста (1-100).");
    }
}

function getComments() {
    const number = document.getElementById('input').value;
    fetch(`https://jsonplaceholder.typicode.com/posts/${number}/comments`)
        .then(response => response.json())
        .then(json => {
            const commentsContainer = document.getElementById("commentsContainer");
            commentsContainer.innerHTML = `<h3>Комментарии:</h3>`;
            json.forEach(json => {
                commentsContainer.innerHTML += `<p>${json.name}: ${json.body}</p>`;
            });
        }).catch(error => console.error('Ошибка:', error));
}