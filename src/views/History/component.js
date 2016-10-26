import React from 'react';
import styles from './component.css';

export default props => (
  <div className={styles.container}>
    {props.history.map((g, i) => {
      return (
        <section className={styles.item} key={i} onMouseOver={() => props.onMouseOver(g)}>
          <span style={{display:'block',width:30,height:30,backgroundColor: g.occupiedPlayer.color}} />({g.gridX},{g.gridY})
        </section>
      );
    })}
  </div>
);
