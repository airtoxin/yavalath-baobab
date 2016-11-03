import React, { PropTypes } from 'react';
import styles from './index.css';

export default function Button({ children, onClick }) {
  return (
    <button className={styles.btn} onClick={onClick}>{children}</button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
};
