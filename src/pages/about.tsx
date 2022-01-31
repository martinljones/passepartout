import React from 'react';

// Components
import Summary from "../components/Summary";

// Styles
import styles from '../styles/pages/default.module.scss';

function About() {
  return (
    <div className={styles.about}>
      <div className={styles.content}>
        <Summary />
      </div>
    </div>
  );
}

export default About;
