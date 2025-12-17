import React from 'react';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Guess from '../Guess'
import { range } from '../../utils';

function GuessResults({ guesses, answer }) {
  return (<div className="guess-results">
    {/* Render the guesses that already been done made */}
    {guesses.map(({ value, id }, index) => <Guess key={id} value={value} answer={answer} />)}

    {/* Add some empty guesses to illustrate remaining guesses */}
    {range(NUM_OF_GUESSES_ALLOWED - guesses.length).map((index) => <Guess key={index} />)}
  </div>);
}

export default GuessResults;
