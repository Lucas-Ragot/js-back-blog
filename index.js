// création et configuration du serveur HTTP avec express
const express = require('express');
const articles = require('./data/articles.json');

const PORT = 5050;

const app = express();

// configuration du moteur de template
app.set('view engine', 'ejs');
app.set('views', __dirname + '/app/views');

// on sert les assets statiques
app.use(express.static(__dirname + '/static'));

// on sert des routes
app.get('/', (req, res) => {  
  res.render('list', {
    listOfArticles: articles,
  });
});

app.get('/article/:id', (req, res) => {
  const id = Number(req.params.id);
  const foundArticle = articles.find((testedArticle) => {
    return testedArticle.id === id;
  });
  res.render('article', {
    article: foundArticle,
  });
});

// on met le serveur en mode écoute pour entre les requêtes HTTP arriver
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});