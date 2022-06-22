fetch('http://localhost:3000/api/news/topheadlines/')
    .then(response => response.json())
    .then(newsArray => {

        if (newsArray.length === 0) {
            const list = document.querySelector("#newslist");
            let p = document.createElement("p");
            p.textContent = 'There are currently no Articles';
            list.append(p);
        } else {
            for (const news of Array.from(newsArray)) {
                const list = document.querySelector("#newslist");
                let p = document.createElement("p");
                let h4 = document.createElement("h4");
                h4.textContent = news.title;
                p.append(h4.textContent + news.description);
                list.append(p);
            }
        }
    });