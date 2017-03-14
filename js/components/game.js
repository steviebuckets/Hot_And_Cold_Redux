import React from 'react';
import {connect} from 'react-redux';
import App from './app';
import store from '../store';
import * as actions from '../actions/index';
import {Link} from 'react-router';


export class Game extends React.Component {
  constructor(props) {
    super(props);
    this.guess = this.guess.bind(this);
    this.newValue = this.newValue.bind(this);
    /// TODO-> what happens when I click submit?
    // event listeer -> onchange, onclick, etc.
    //function to generate random number
      this.state = {
        randomNumber: this.generateRandomNumber(),
        number: null,
        count: 0,
        status: null
      }
  }

  guess(event) {
    //increases count by 1
    this.setState({count: this.state.count + 1  })
    //clears out form
    this.refs.form.value = '';
    store.dispatch(actions.compare(this.state.randomNumber, this.state.number));

  }
  //TODO function to generate random number
  generateRandomNumber (){
    let number = Math.floor((Math.random() * 10) + 1);
    return number;
  }
  newValue (event){
    // console.log(event.target.value);
    this.setState({number: event.target.value});

  }
  render() {
    return (
     <div>
        <h1>Take your best guess!</h1>
        <div className="form">
        <input type="text" onChange={this.newValue} ref="form" name="userGuess" id="userGuess" className="text" maxLength="2" placeholder="Enter your guess" required/>
        <input type="submit" id="guessButton" className="button" name="submit" value="Guess" onClick={this.guess}/>
        <div className="userGuess">
          <p>You guessed #<span id="count">
          {this.state.count}</span></p>
          <ul id="response">
         <h1>Hot</h1>
          </ul>
          </div>
          </div>
      </div>
    )
  }


}
const mapStateToProps = (state, props) => ({
  guesses: state
});

export default connect(mapStateToProps)(Game);
