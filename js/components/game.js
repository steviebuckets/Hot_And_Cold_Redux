import React from 'react';
import {connect} from 'react-redux';
import App from './app';
import store from '../store';
import * as actions from '../actions/index';
import {Link} from 'react-router';
import axios from 'axios';


export class Game extends React.Component {
  constructor(props) {
    super(props);
    this.makeGuess = this.makeGuess.bind(this);
    this.onInputChange = this.onInputChange.bind(this); // bind "the component" -> Game - >this
    // this.temp = this.temp.bind(this); bind the state of status here?
    // then use the state of status elsewehre in code
    /// TODO-> what happens when I click submit?
    // event listeer -> onchange, onclick, etc.
    //function to generate random number
      this.state = {
        randomNumber: this.generateRandomNumber(),
        number: " ",
        count: 0
      }
  }

  makeGuess(event) {
    console.log(this, 'guess');
    //increases count by 1
    this.setState({count: this.state.count + 1  })
    //clears out form
    this.refs.form.value = '';
    store.dispatch(actions.compare(this.state.randomNumber, this.state.number));

    //store.disptach(actions.increase_guess_count(this))
    // number++ increase from the SERVER!!! -- > send a POST request!!
    // dummy test (GET)
    // SoC -> separations of concerns
    // axios.post('/fewest-guesses')
    //   .then(function (response) {
    //     console.log(response);
    //   })



  }

  componentWillMount(){
    console.log(this, 'this');
  }
  //TODO function to generate random number
  generateRandomNumber (){
    let number = Math.floor((Math.random() * 10) + 1);
    return number;
  }

  onInputChange (event){
    console.log(this, 'newValue'); // you won't have access to "this" if not bound
    // console.log(event.target.value);
    // this.state.nuber = event.target.value; /// ?? React to have immutable state --> doesn't change.
    this.setState({number: event.target.value}); // setState method

  }
  render() {
    return (
     <div>
        <h1>Take your best guess!</h1>
        <div className="form">
        <input type="text" onChange={this.onInputChange} ref="form" name="userGuess" id="userGuess" className="text" maxLength="2" placeholder="Enter your guess" required/>
        <input type="submit" id="guessButton" className="button" name="submit" value="Guess" onClick={this.makeGuess}/>
        <div className="userGuess">
          <p>You guessed #<span id="count">
          {this.state.number}</span></p>

          <ul id="response">
          <h1>{  this.props.guesses[this.props.guesses.length-1].status   }</h1>
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
