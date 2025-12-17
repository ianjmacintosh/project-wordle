import React from 'react';

import Banner from '../Banner'

function WonBanner({ guessCount }) {
  return <Banner className="happy">
    <p>
      <strong>Congratulations!</strong> Got it in
      {' '}
      <strong>{guessCount === 1 ? "1 guess" : `${guessCount} guesses`}</strong>.
    </p>
  </Banner>;
}

export default WonBanner;
