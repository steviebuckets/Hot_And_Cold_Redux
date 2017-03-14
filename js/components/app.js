import React from 'react';
import {Link} from 'react-router';


export default function App(props) {
  return(
    <div className="gameTitle">
    <h1>{props.gameTitle}</h1>
      <div className="Instructions">
      <p>This is a Hot or Cold Number Guessing Game. The game goes like this:</p>
      <ul>
      <p>1. I pick a <strong>random secret number</strong> between 1 to 10 and keep it hidden.</p>
      <p>2. You need to <strong>guess</strong> until you can find the hidden secret number.</p>
      <p>3. You will <strong>get feedback</strong> on how close ("hot") or far ("cold") your guess is.</p>
      </ul>
      <div className="startButton">
    <h1>
      <Link to ='/game'>
      Star New Game!
      </Link>
    </h1>
      </div>
      <div>
    
      </div>
    </div>
    </div>
  )
}
