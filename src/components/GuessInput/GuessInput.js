import React from 'react';

function GuessInput({ addGuess }) {
  const [guess, setGuess] = React.useState('')

  function handleSubmit(event) {
    event.preventDefault();

    console.log(`Guess: ${guess}`)
    addGuess(guess)
    setGuess('')
  }

  function handleGuessChange(event) {
    const nextGuess = event.target.value.toUpperCase();

    setGuess(nextGuess);
  }

  return (<form className="guess-input-wrapper" onSubmit={handleSubmit}>
    <label htmlFor="guess-input">Enter guess:</label>
    <input id="guess-input" type="text" value={guess} onChange={handleGuessChange}
      pattern="[a-zA-Z]{5,5}"
      required
      title="Your guess must be exactly five letters" />
  </form>);
}

export default GuessInput;
