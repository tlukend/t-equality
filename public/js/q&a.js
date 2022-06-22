fetch('http://localhost:3000/questions')
    .then(response => response.json())
    .then(data => {
        for (let question of data) {
            let span = document.createElement("span");
            let tr = document.createElement("tr");
            let td = document.createElement("td");
            let tbody = document.querySelector('#qs');
            let button = document.createElement("button");
            let editButton = document.createElement("button");
            button.id = 'x';
            editButton.id = 'edit';

            span.innerHTML = '<b>' + question.userid + ':</b> ' + question.question;
            button.textContent = "X";
            editButton.textContent = "Edit";


            button.onclick = function() {
                deleteQuestion(question.id);
            };

            editButton.onclick = function () {

            };

            td.append(span);
            td.append(button);
            td.append(editButton);
            tr.append(td);
            tbody.append(tr);



        }
    });

function addQuestion() {
    let inputBox = document.getElementById('question');
    fetch('http://localhost:3000/questions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            question: inputBox.value
        })
    }).then(r => {
        window.location.reload();
    });
}

function deleteQuestion(id) {
    fetch('http://localhost:3000/question/' + id, {
            method: 'DELETE'
        })
        .then(r => {
            window.location.reload();
        });
}

function putQuestion(id) {
    fetch('http://localhost:3000/question/' + id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            question: question
        })
    }).then(r => {
        window.location.reload();
    });
}