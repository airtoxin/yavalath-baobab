import React from 'react';
import styles from './component.css';

export default props => (
  <div className={styles.container}>
    {props.history.map((g, i) => {
      return (
        <section
          key={i} 
          className={styles.item}
          onMouseEnter={() => props.onMouseEnter(g)}
          onMouseLeave={() => props.onMouseLeave(g)}
        >
          <span style={{display:'block',width:30,height:30,backgroundColor: g.occupiedPlayer.color}} />({g.gridX},{g.gridY})
        </section>
      );
    })}
  </div>
);
