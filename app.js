//Import Express
const express = require('express');
const app = express();
const PORT = 3000;
const routes = require('./routes/index')





//Allows the app access to index.js in /routes
app.use(express.static('./routes'))
app.use(routes);

app.listen(PORT, () => {
  console.log("ENGLISH MOTHA LOVA")
})

