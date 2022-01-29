import * as React from 'react';
import { Link } from "react-router-dom";

// Assets
import logo from '../images/logo.svg';

// Styles
import styles from "../styles/components/navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={`container ${styles.navbar}`}>
      <div className={styles.brand}>
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
      </div>
      <ul className={styles.menu}>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <a>Sign In</a>
        </li>
      </ul>
    </nav>
  );
}
