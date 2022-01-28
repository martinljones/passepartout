import React from 'react';

// Components
import Footer from "../components/Footer";
import Globe from "../components/Globe";
import Navbar from "../components/Navbar";

// Styles
import '../base.css';
import styles from  '../styles/pages/homepage.module.scss';

function Homepage() {
  return (
    <main className={styles.app}>
        <header>
            <Navbar />
        </header>
        <article>
            <Globe />
        </article>
        <footer>
            <Footer />
        </footer>
    </main>
  );
}

export default Homepage;
