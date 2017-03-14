import * as actions from './actions/index';
import store from './store';

store.dispatch(actions.addGame('player 1'));
console.log(store.getState());
