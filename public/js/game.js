fetch('http://localhost:3000/api/games/getgames')
    .then(response => response.json())
    .then(games => {
        const list = document.querySelector("#gameslist");
        if (games.length === 0) {            
            let p = document.createElement("p");
            p.textContent = 'There are currently no games';
            list.append(p);
        } else {
            for (const game of Array.from(games)) {                
                let div = document.createElement("div");
                let p = document.createElement("p");
                let h4 = document.createElement("h4");                
                let link = document.createElement('a');                
                h4.textContent = game.name;
                link.textContent = game.link;
                p.textContent = game.beschreibung;
                link.href = game.link;
                link.target="_blank";
                div.append(h4, p, link);
                list.append(div);
            }
        }        
});