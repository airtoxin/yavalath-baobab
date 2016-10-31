import React from 'react';

export default props => (
  <div>
    <h3>
      Turn: <span
        style={{
          display: 'block',
          width: 30,
          height: 30,
          backgroundColor: props.playerColor,
        }}
      />
    </h3>
  </div>
);
