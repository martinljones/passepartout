import React from 'react';
import { Link } from "react-router-dom";

// Components
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

// Styles
import '../base.css';
import styles from '../styles/pages/notFound.module.scss';

function About() {
  return (
    <main className={styles.app}>
      <header>
        <Navbar />
      </header>
      <article>
        <h1>404: Page Not Found</h1>
        <Link to="/">Back to home</Link>
      </article>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}

export default About;
