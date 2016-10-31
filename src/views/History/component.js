import React from 'react';
import styles from './component.css';
import { convertToRecordGridSystem } from '../../logics/boardLogics';
import HistoryBack from '../HistoryBack';
import HistoryForward from '../HistoryForward';

export default props => (
  <div className={styles.container}>
    <div>
      <HistoryBack />
      <HistoryForward />
    </div>
    {props.history.map((g, i) => {
      const { x, y } = convertToRecordGridSystem(g);
      return (
        <section
          key={i}
          className={styles.item}
          onMouseEnter={() => props.onMouseEnter(g)}
          onMouseLeave={() => props.onMouseLeave(g)}
          style={{ backgroundColor: g.occupiedPlayer.color }}
        >
          ({x},{y})
        </section>
      );
    })}
  </div>
);
