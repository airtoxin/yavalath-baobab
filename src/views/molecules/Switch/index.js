import React, { PropTypes } from 'react';
import styles from './styles.css';

export default function Switch({ labels, active, className, onChange = () => {} }) {
  const Labels = labels.map((l, i) => {
    const isActive = active === i ? styles.active : styles.inactive;

    return (
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      <div className={styles.labelBox} key={i} onClick={() => onChange(i)}>
        <label
          className={`${styles.label} ${isActive}`}
          htmlFor={`${l} label`}
        >{l}</label>
      </div>
    );
  });

  return (
    <div className={`${className} ${styles.switch}`}>
      {Labels}
    </div>
  );
}

Switch.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
  active: PropTypes.number.isRequired,
  onChange: PropTypes.func,
};
