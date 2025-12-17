import React from 'react';

import Banner from '../Banner'

function WonBanner({ guessCount }) {
  return <Banner className="happy">
    <p>
      <strong>Congratulations!</strong> Got it in <strong>{guessCount} guess{guessCount > 1 ? "es" : ""}</strong>.
    </p>
  </Banner>;
}

export default WonBanner;
