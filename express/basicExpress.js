// catName=hello&lives=54
const express = require('express');
const app = express();
require('hbs');

// set our templating system to handlebars
app.set('view engine', 'hbs');
app.set('view options', { layout: 'layout' });

// register static file serving middleware
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

// populate req.body with http req body
app.use(express.urlencoded({ extended: false })); // <----

const cats = [
  {name: 'katy purry', lives: 8},
  {name: 'bill furry', lives: 7},
  {name: 'paw newman', lives: 2}
];

app.get('/', (req, res) => {
  let data = cats;
  if(Object.prototype.hasOwnProperty.call(req.query, 'lives')) {
    const minLives = parseInt(req.query.lives);
    if(!isNaN(minLives)) {
      data = cats.filter(cat => cat.lives >= minLives);
    }
  }
  res.render('index', {cats: data});
});

app.post('/', (req, res) => {
  console.log(req.body);
  const lives = parseInt(req.body.lives);
  if(lives > 0) {
    cats.push({name: req.body.catName, lives });
    res.redirect('/');
    // store message in session
    // pass it along in qs
  } else {
    // ??? how do we convery error?
    res.render('index', {cats, error: 'need a number'})
  }
  // res.render('index', {cats});
});

app.listen(3000);