const express = require('express');
const controller = require('./controller');

const app = express();
app.use(express.json());
app.use(express.json());
app.use(express.static(__dirname + '/../public/assets'));

app.get('/api/recipes', controller.getRecipes);

app.listen(7654, () => console.log('What\'s Cooking?'));