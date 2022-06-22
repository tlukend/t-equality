const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('8c7e2911735d42d4b4629bd87f41a115');


class NewsController{
topHeadlines(req,res){
    newsapi.v2.topHeadlines({
        
        q: 'Women',
        category: 'technology',
        language: 'de'
       
      }).then(response => {
       console.log(response);
       if(response){
       res.send(response.articles);
       }else{
           res.status(204).send('There are currently no articles to display!');
       }
        /*
          {
            status: "ok",
            articles: [...]
          }
        */
      });

}

// To query /v2/top-headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them

}
module.exports = new NewsController();

