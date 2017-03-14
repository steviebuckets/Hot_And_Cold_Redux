//Hot And Cold Game, Redux Actions

//start a new Game
//guess a number
//if number is within 10 of the secret number - Hot
//if number is outside 10 of the secret number - Cold

export const NEW_GAME = 'NEW_GAME';
export const newGame = game => ({
  type: NEW_GAME,
  game
});

export const NEW_GUESS = 'NEW_GUESS';
export const newGuess = (game, guess) => ({
  type: NEW_GUESS,
  game,
  guess
});

export const COMPARE = 'COMPARE';
export const compare = (randomNumber, guess ) => ({
  type: COMPARE,
  randomNumber,
  guess
});

export const GETTING_HOT = 'GETTING_HOT';
export const gettingHot = (game, guess, hot) => ({
  type: GETTING_HOT,
  game,
  guess,
  hot
});

export const GETTING_COLD = 'GETTING_COLD';
export const gettingCold = (game, guess, cold) => ({
  type: GETTING_COLD,
  game,
  guess,
  cold
});
