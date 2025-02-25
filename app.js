const express = require('express');

const hbs = require('hbs');
const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const app = express();
const punkAPI = new PunkAPIWrapper();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

// Register the location for handlebars partials here:

// ...

// Add the route handlers here:

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(3005, () => console.log('🏃‍ on http://localhost:3005'));

app.get("/beers", (req, res) => {
  punkAPI.getBeers()
  .then(beersFromAPI => res.render('beers', {beersFromApi}))
  .catch(error => console.log(error))
});
