// récupération d'express
const express = require('express');
// récupération de l'objet possédant nos middlewares en méthodes
const controller = require('./controller');

// création du router
const router = express.Router();

// création des routes
router.get('/', controller.home);

router.get('/article/:id', controller.article);

router.get('/categorie/:name', controller.category);

// on exporte
module.exports = router;