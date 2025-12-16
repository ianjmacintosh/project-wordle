import React from 'react';

import { checkGuess } from '../../game-helpers'

function Guess({ value, id, answer }) {
  // Handle empty guesses by making an array of 5 "empty" letters
  const lettersInfo = value.length === 0 ? Array(5).fill({
    letter: undefined,
    status: undefined
  })
    // Otherwise, make an array of the letters
    : checkGuess(value, answer)

  return (<p className="guess">
    {lettersInfo.map(({ letter, status }, index) => {
      return <span key={`${id}-letter_${index}`} className={`cell ${status ? status : ""}`.trim()}>{letter}</span>
    }
    )}
  </p>);
}

export default Guess;
