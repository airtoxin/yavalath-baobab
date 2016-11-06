import React, { PropTypes } from 'react';
import styles from './index.css';

export default function Button({ children, className, onClick, disabled }) {
  return (
    <button className={`${className} ${styles.btn}`} onClick={onClick} disabled={disabled}>{children}</button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
};
