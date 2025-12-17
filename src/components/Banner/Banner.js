import React from 'react';

function Banner({ gameStatus, guessCount }) {
  switch (gameStatus) {
    case "won":
      return (<div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in <strong>{guessCount} guess{guessCount > 1 ? "es" : ""}</strong>.
        </p>
      </div>);
    case "lost":
      return (<div className="sad banner">
        <p>Sorry, the correct answer is <strong>LEARN</strong>.</p>
      </div>);
    default:
      return <div>We've found a weird status! You're in <code>{gameStatus}</code> status!!</div>
  }
}

export default Banner;
