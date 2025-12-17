import React from 'react';

import { checkGuess } from '../../game-helpers'

function Guess({ value, id, answer }) {
  const lettersInfo = value ? checkGuess(value, answer) : Array(5).fill({
    letter: undefined,
    status: undefined
  })

  return (<p className="guess">
    {lettersInfo.map(({ letter, status }, index) => {
      const className = status !== undefined ? `cell ${status}`
        : `cell`
      return <span key={`${id}-letter_${index}`} className={className}>{letter}</span>
    }
    )}
  </p>);
}

export default Guess;
