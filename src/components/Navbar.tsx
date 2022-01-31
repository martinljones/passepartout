import * as React from 'react';
import { Link } from "react-router-dom";

// Assets
import logo from '../images/logo.svg';
import map from '../images/map.svg';

// Styles
import styles from "../styles/components/navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={`container ${styles.navbar}`}>
      <div className={styles.brand}>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <ul className={styles.menu}>
        <li>
          <Link to="/globe-view">
            <button className="secondary"><img src={map} alt="Map icon" />View Map</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
