console.log(document.cookie);

fetch('http://localhost:3000/userdata')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });