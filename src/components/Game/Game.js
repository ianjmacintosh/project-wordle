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
  const defaultGuesses = range(NUM_OF_GUESSES_ALLOWED).map((num) => {
    return { id: `guess_${num}`, value: '' }
  })
  const [currentGuess, setCurrentGuess] = React.useState(0);
  const [guesses, setGuesses] = React.useState(defaultGuesses);
  const [gameStatus, setGameStatus] = React.useState("active")

  const updateGuess = (guess, guessNumber) => {
    if (currentGuess >= NUM_OF_GUESSES_ALLOWED) {
      window.alert(`Sorry, you've reached the limit of ${NUM_OF_GUESSES_ALLOWED} guesses`)
      return
    }

    const nextGuesses = [...guesses]
    nextGuesses[currentGuess].value = guess
    setGuesses(nextGuesses)

    setCurrentGuess(currentGuess + 1)

    if (guesses[currentGuess].value === answer) {
      setGameStatus("won")
    } else if (currentGuess + 1 >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost")
    }
  }


  return <>
    {gameStatus !== "active" && <Banner gameStatus={gameStatus} guessCount={currentGuess} />}
    <GuessResults guesses={guesses} answer={answer} />
    <GuessInput disabled={gameStatus !== "active"} addGuess={(value) => {
      updateGuess(value, currentGuess)
    }
    } />
  </>;
}

export default Game;
