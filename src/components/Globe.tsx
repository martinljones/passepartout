import * as React from 'react';

// Assets
import logo from '../images/logo.svg';

// Styles
import styles from "../styles/components/globe.module.scss"

export interface IAppProps {
}

export default function Globe (props: IAppProps) {
  return (
    <div className={styles.globe}>
        <h1>Cool Website Here</h1>
        <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}
