import React from 'react';

export default function Finished({ finished, winnerColor }) {
  return (
    <h3 style={{ backgroundColor: winnerColor }}>{ finished ? 'finished' : 'not finished' }</h3>
  );
}
