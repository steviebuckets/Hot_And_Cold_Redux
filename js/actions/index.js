
export const COMPARE = 'COMPARE';
export const compare = (randomNumber, guess) => ({
  type: COMPARE,
  randomNumber,
  guess
});

export const INCREASE_GUESS_COUNT = 'INCREASE_GUESS_COUNT';
export const increase_guess_count = (guess) => ({
  type: INCREASE_GUESS_COUNT,
  guess
});

export const fetchFewestGuesses = guesses => dispatch => {
    const url = ('/fewest-guesses');
    return fetch(url).then(response => {
        if (!response.ok) {
            const error = new Error(response.statusText)
            error.response = response
            throw error;
        }
        return response;
    })
    .then(response => response.json())
    .then(data =>
        dispatch(fetchFewestGuessesSuccess(fewestGuessed, newGuesses))
    )
    .catch(error =>
        dispatch(fetchDescriptionError(fewestGuessed, newGuesses))
    );
};
