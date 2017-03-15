require('babel-polyfill');
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/app';
import Game from './components/game';

import store from './store';



// const routes =(
//   <Router history={hashHistory}>
//     <Route path="/" component={App}>
//       <IndexRoute component={Game} />
//     </Route>
//   </Router>
// );

document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(
        <Provider store={store}>
            <Game />
        </Provider>,
        document.getElementById('app')
    )
);
