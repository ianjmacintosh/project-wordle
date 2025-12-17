import React from 'react';

import { range, sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Banner from '../Banner'
import GuessInput from '../GuessInput'
import GuessResults from '../GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const getGameStatus = (guesses, maxGuesses) => {
    if (guesses[guesses.length - 1]?.value === answer) return "won"
    else if (guesses.length >= maxGuesses) return "lost"
    return "active"
  }

  const [guesses, setGuesses] = React.useState([]);
  const gameStatus = getGameStatus(guesses, NUM_OF_GUESSES_ALLOWED)


  const updateGuess = (guess, guessNumber) => {
    const nextGuesses = [...guesses, {
      id: crypto.randomUUID(),
      value: guess
    }]

    setGuesses(nextGuesses)
  }


  return <>
    {gameStatus !== "active" && <Banner gameStatus={gameStatus} guessCount={guesses.length} answer={answer} />}
    <GuessResults guesses={guesses} answer={answer} />
    <GuessInput disabled={gameStatus !== "active"} addGuess={(value) => {
      updateGuess(value)
    }} />
  </>;
}

export default Game;
