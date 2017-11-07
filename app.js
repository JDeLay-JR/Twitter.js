//Import Express
const express = require('express');
const app = express();
const PORT = 3000;
const routes = require('./routes/index')
const nunjucks = require('nunjucks');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {noCache: true});

//Allows the app access to index.js in /routes

app.use(express.static('./public'))


app.use(routes);

app.listen(PORT, () => {
  console.log("ENGLISH MOTHA LOVA")
})

