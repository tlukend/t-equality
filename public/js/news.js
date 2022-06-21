fetch('http://localhost:3000/api/news/topheadlines/')
.then(response => response.json())
.then(newsArray => {
    for (const news of Array.from(newsArray)) {
        const list = document.querySelector("#newslist");
        let li = document.createElement("li");
        let h4 = document.createElement("h4");
        h4.textContent = news.title;
        li.append(h4.textContent+news.description);
        list.append(li);
    } 
});