const express = require('express');
//Use express's router constructor function
const router = express.Router();
const morgan = require('morgan');


router.use(morgan(':method :url '));

router.get('/', (request, response) => {
  response.send('It works!');
})

router.get('/news', (request, response) => {
  response.send('NEWS');
})

//This allows us to export the router object into any other folder

//Keep this 'default catch (*)' at the bottom
router.get('*', (request, response) => {
  response.send('Page does not exists');
})

module.exports = router;
