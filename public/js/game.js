
fetch('http://localhost:3000/api/games/getgames')
.then(response => response.json())
.then(games => {
    for (const game of Array.from(games)) {
        const list = document.querySelector("#gamelist");
        let li = document.createElement("li");
        li.append("game: "+game.name+" Alter:"+game.fsk);
        list.append(li);
    } 
});