import React from 'react';
import styles from './styles.css';

export default props => (
  <div className={styles.flex}>
    <h3>
      Turn: <br />
      <section style={{backgroundColor: props.player.color}}>{props.player.name}</section>
    </h3>
  </div>
);
