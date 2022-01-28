import * as React from 'react';

// Assets
import logo from '../logo.svg';

// Styles
import styles from "../styles/components/navbar.module.scss";

export interface IAppProps {
}

export default function Navbar (props: IAppProps) {
  return (
    <nav className={`container ${styles.navbar}`}>
      <div className={styles.brand}>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <ul className={styles.menu}>
        <li>About</li>
        <li>Sign In</li>
      </ul>
    </nav>
  );
}
