const express = require('express');
// récupération du router
const router = require('./app/bonus/router');

// on a pris un port différent pour les bonus
const PORT = 8080;

const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/app/views');

app.use(express.static(__dirname + '/static'));

// on utlise le router
app.use(router);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});