import React from 'react';
import Switch from '../atoms/Switch';
import styles from './styles.css';

export default function Player({ className, player, activeIndex, onChange }) {
  return (
    <section className={`${className} ${styles.box}`}>
      <label className={styles.label} style={{backgroundColor: player.color}}>{player.name}</label>
      <Switch
        className={styles.switch}
        labels={["Human", "Robot"]}
        active={activeIndex}
        onChange={onChange}/>
    </section>
  );
}
