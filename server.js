const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// const CurrentLow = require('./models').CurrentLow;
const NewScore = require('./models').NewScore;
const app = express();

app.use(express.static('build'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// const lowScore = CurrentLow.create({
//bring in guesses from game.js, use this.props.guesses.length -1 to get the current lowest score
// })
let numberOfGuesses = 0;
//"Hello Steve, (get) give me some data from memory or db that has the current lowest guess.
//this should return the fewest guesses taken to get the correct answer."
app.get('/fewest-guesses', (req, res) => {
  res.json({numberOfGuesses});
});

app.post('/fewest-guesses', (req, res) => {
  // req.params?? req.body, req.query??
  numberOfGuesses++;
  // res.send("Hello Steve, (post) update memory or db with new value for current lowest guess. this should update the guess count if the number of guesses provided is lower than the current best")
  res.json({numberOfGuesses});
});


app.listen(process.env.PORT || 8080, () => console.log (
  `Your app is listening on port ${process.env.PORT || 8080}`)
);
