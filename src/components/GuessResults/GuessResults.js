import React from 'react';

import Guess from '../Guess'

function GuessResults({ guesses }) {
  return (<div className="guess-results">
    {guesses.map(({ value, id }) => <Guess key={id} value={value} />)}
  </div>);
}

export default GuessResults;
