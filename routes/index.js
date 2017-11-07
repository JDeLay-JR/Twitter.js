const express = require('express');
//Use express's router constructor function
const router = express.Router();
const morgan = require('morgan');
const tweetBank = require('../tweetBank')
const bodyParser = require('body-parser');
//const css = require('./stylesheets');
//Console Logs method and the URL
router.use(morgan(':method :url '));

const jsonParser = bodyParser.json({type: 'application/*+json'});

// router.use()

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  console.log(tweets);
  res.render( 'index', { tweets: tweets} );
})

router.get('/users/:name', (req, res) =>{
  const ourName = req.params.name.split('.').join(' ');

  const tweets = tweetBank.find(['name', ourName]);
  console.log(tweets);
  res.render('index', { tweets: tweets});
});

router.get('/tweets/:id', (req, res) =>{
  const id = Number(req.params.id);
  console.log(id);
  const tweets = tweetBank.find(['id', id]);
  res.render('index', {tweets:tweets});
});

router.get('/add', (req, res) =>{
  res.render('index', {showForm : true});
})
router.post('/add', jsonParser, (req, res) =>{
  var newTweet = jsonParser(req.body);
  console.log(newTweet);
  // const name = req.body.name;
  // const text = req.body.text;
  tweetBank.add(name, text, 20);
  res.redirect('/');
});





module.exports = router;
