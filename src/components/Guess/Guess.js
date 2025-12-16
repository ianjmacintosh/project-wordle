import React from 'react';

function Guess({ value, id }) {
  // Handle empty guesses by making an array of 5 "empty" letters
  const letters = value.length === 0 ? Array(5).fill('')
    // Otherwise, make an array of the letters
    : value.split('')

  return (<p className="guess">
    {letters.map((letter, index) => <span key={`${id}-letter_${index}`} className="cell">{letter}</span>)}
  </p>);
}

export default Guess;
