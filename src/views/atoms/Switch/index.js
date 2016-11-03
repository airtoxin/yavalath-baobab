import React from 'react';
import styles from './styles.css';

export default function Switch({ onChange, id, left, right }) {
  return (
    <div className={styles.switch}>
      <label htmlFor={id}>{left}</label>
      <input
        onChange={onChange}
        id={id}
        type="checkbox"
        value="1" />
      <label htmlFor={id} />
      <label htmlFor={id}>{right}</label>
    </div>
  );
}
