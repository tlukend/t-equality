console.log(document.cookie);

fetch('http://localhost:3000/userdata')
    .then(response => response.json())
    .then(data => {
        if (data.userid) {
            let li = document.createElement("li");
            let ul = document.querySelector('#menulist');
            let a = document.createElement("a");
            a.href = './logout';
            a.textContent = 'logout';
            li.append(a);
            ul.append(li);
        } else {
            let li = document.createElement("li");
            let ul = document.querySelector('#menulist');
            let a = document.createElement("a");
            a.href = './low-login.html';
            a.textContent = 'login';
            li.append(a);
            ul.append(li);

            li = document.createElement("li");
            a = document.createElement("a");
            a.href = './low-signup.html';
            a.textContent = 'sign up';
            li.append(a);
            ul.append(li);
        }

    });