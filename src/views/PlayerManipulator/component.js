import React from 'react';
import Switch from '../atoms/Switch';
import styles from './styles.css';

export default function PlayerManipulator({ className, id, activeIndex, onChange }) {
  return (
    <section className={`${className} ${styles.box}`}>
      <label className={styles.label}>Player {id}</label>
      <Switch
        className={styles.switch}
        labels={["Human", "Robot"]}
        active={activeIndex}
        onChange={onChange}/>
    </section>
  );
}
