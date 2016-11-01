import React from 'react';
import styles from './component.css';

export default (props) => {
  return (
    <div className={`${styles.noSpace} ${styles.black} ${styles.flex}`}>
      <h1 className={styles.flexLeft}>
        Yavalath
      </h1>
      <h1 className={styles.flexRight}>
        <a href="http://www.cameronius.com/games/yavalath/" target="_blank" className={styles.link}>
          Rule <i className="fa fa-link" aria-hidden="true"></i>
        </a>
      </h1>
      <h1 className={styles.flexRight}>
        <a href="https://github.com/airtoxin/yavalath-baobab" target="_blank" className={styles.link}>
          <i className="fa fa-github" aria-hidden="true"></i>
        </a>
      </h1>
    </div>
  );
};
