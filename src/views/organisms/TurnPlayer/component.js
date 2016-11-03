import React from 'react';
import styles from './styles.css';

export default props => (
  <div className={styles.flex}>
    <h3>Turn:</h3>
    <div
      style={{
        display: 'block',
        width: 30,
        height: 30,
        backgroundColor: props.playerColor,
      }}
    />
  </div>
);
