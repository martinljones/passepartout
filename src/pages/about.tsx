import React from 'react';

// Components
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Summary from "../components/Summary";

// Styles
import '../base.css';
import styles from  '../styles/pages/about.module.scss';

function About() {
  return (
    <main className={styles.app}>
        <header>
            <Navbar />
        </header>
        <article>
            <Summary />
        </article>
        <footer>
            <Footer />
        </footer>
    </main>
  );
}

export default About;