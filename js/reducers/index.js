import * as actions from '../actions/index';
import axios from 'axios';

const initialGameState = [{status: '', count: 0}];


export const gameReducer = (state = initialGameState, action) => {
    if (action.type === actions.COMPARE) {
      let guess = parseInt(action.guess);
      if(action.randomNumber > guess) {
        axios.post('/fewest-guesses')
          .then(function (response) {
            console.log(response);
          })

        return [...state, {
          status: 'Hot'
        }];

      }
      else if (action.randomNumber == guess) {
          console.log(count, "hi steve")
        axios.get('/fewest-guesses')
        .then(function (response) {
          console.log(state.length);
        })
        return [...state, {
          status: 'You win in ' + state.length + ' guesses!'

        }];

      }
      else if (action.randomNumber < guess){
        axios.post('/fewest-guesses')
          .then(function (response) {
            console.log(response);
          })

        console.log('guess is less than randomNumber')
        return [...state, {
          status: 'Cold'
        }];
      }

        return state
    }



    // const before = state.slice(0, index);
    // const after = state.slice(index + 1);
    // const newGameState = Object.assign({}, state[index], {rating: action.rating}); // Object.assign
    // return [...before, newGameState, ...after];
    return state;
}
