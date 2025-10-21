import React from 'react';
import styles from './component.css';
import { convertToRecordGridSystem } from '../../../logics/boardLogics';

export default function ({ history, onMouseEnter, onMouseLeave }) {
  return (
    <div className={styles.container}>
      {history.map((g, i) => {
        const { x, y } = convertToRecordGridSystem(g);
        return (
          <section
            key={i}
            className={styles.item}
            onMouseEnter={() => onMouseEnter(g)}
            onMouseLeave={() => onMouseLeave(g)}
            style={{ backgroundColor: g.occupiedPlayer.color }}
          >
            (
            {x}
            ,
            {y}
            )
          </section>
        );
      })}
    </div>
  );
}
