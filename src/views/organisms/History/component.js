import React from 'react';
import styles from './component.css';
import { convertToRecordGridSystem } from '../../../logics/boardLogics';
import Button from '../../atoms/Button';

export default ({ history, onHistoryBack, onHistoryForward, onMouseEnter, onMouseLeave }) => (
  <div className={styles.container}>
    {/* <div>
      <Button onClick={onHistoryBack}>Back</Button>
      <Button onClick={onHistoryForward}>Forward</Button>
    </div> */}
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
          ({x},{y})
        </section>
      );
    })}
  </div>
);
