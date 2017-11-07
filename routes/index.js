const express = require('express');
//Use express's router constructor function
const router = express.Router();
const morgan = require('morgan');
const tweetBank = require('../tweetBank')
//const css = require('./stylesheets');
//Console Logs method and the URL
router.use(morgan(':method :url '));

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  console.log(tweets);
  res.render( 'index', { tweets: tweets } );
})

router.get('/stylesheets/style.css', (req, res) => {
  res.sendFile('/Users/jd/Documents/Junior Phase/Week2/twitter-js/public/stylesheets/style.css');
})



module.exports = router;
