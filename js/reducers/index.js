import * as actions from '../actions/index';

const initialGameState = [];

export const gameReducer = (state = initialGameState, action) => {
    //   if (action.type === actions.NEW_GAME) {
    //     return [...state, {
    //       name: action.,
    //       rating: null
    //     }];
    // }
    //
    //   if (action.type === actions.NEW_GUESS) {
    //       return [...state, {
    //         name: action.guess,
    //         rating: null
    //       }];
    //   }
    //   if (action.type === actions.GETTING_HOT) {
    //       return [...state, {
    //         name: action.hot,
    //         rating: null
    //       }];
    //   }
    //   if (action.type === actions.GETTING_COLD) {
    //       return [...state, {
    //         name: action.cold,
    //         rating: null
    //       }];
    //   }
    console.log(state, 'state log')
    console.log(action, 'action log')
    if (action.type === actions.COMPARE) {
      if(action.randomNumber > action.guess) {
        console.log('guess is greater than randomNumber')
        return [...state, {
          status: 'Hot'
        }];

      }
      else if (action.randomNumber == action.guess) {
          console.log('guess is equal to randomNumber')
        return [...state, {
          status: 'You Win'
        }];

      }
      else if (action.randomNumber < action.guess){
          console.log('guess is less than randomNumber')
        return [...state, {
          status: 'Cold'
        }];
      }
        return state
    }
    // const before = state.slice(0, index);
    // const after = state.slice(index + 1);
    // const newGameState = Object.assign({}, state[index], {rating: action.rating});
    // return [...before, newGameState, ...after];
    return state;
}
