function getArticleGenerator(articles) {
    
    return function () {
        let output = document.getElementById('content');
        let article = document.createElement('article');
        if (articles.length>0) {
            article.textContent=articles;
            output.appendChild(article);
        }
       
    }
   
}
