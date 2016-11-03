import React from 'react';
import styles from './component.css';

export default () => (
  <div className={`${styles.noSpace} ${styles.black} ${styles.flex}`}>
    <h1 className={`${styles.h1} ${styles.flexLeft}`}>
      Yavalath
    </h1>
    <h1 className={`${styles.h1} ${styles.flexRight}`}>
      <a
        href="http://www.cameronius.com/games/yavalath/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        Rule <i className="fa fa-link" aria-hidden="true" />
      </a>
    </h1>
    <h1 className={`${styles.h1} ${styles.flexRight}`}>
      <a
        href="https://github.com/airtoxin/yavalath-baobab"
        target="_blank"
        className={styles.link}
        rel="noopener noreferrer"
      >
        <i className="fa fa-github" aria-hidden="true" />
      </a>
    </h1>
  </div>
);
