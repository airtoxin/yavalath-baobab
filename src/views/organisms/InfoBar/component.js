import React from 'react';
import TurnPlayer from '../TurnPlayer';
import Finished from '../Finished';
import styles from './styles.css';

export default function InfoBar() {
  return (
    <div className={styles.overlay}>
      <TurnPlayer />
      <Finished />
    </div>
  );
}
