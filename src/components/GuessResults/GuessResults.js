import React from 'react';

import Guess from '../Guess'

function GuessResults({ guesses, answer }) {
  return (<div className="guess-results">
    {guesses.map(({ value, id }) => <Guess key={id} value={value} answer={answer} />)}
  </div>);
}

export default GuessResults;
