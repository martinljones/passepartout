import React from 'react';

// Components
import Footer from "../components/Footer";
import Map from "../components/Map";
import Navbar from "../components/Navbar";

// Styles
import '../base.css';
import styles from '../styles/pages/homepage.module.scss';

function Homepage() {
    return (
        <main className={styles.app}>
            <header>
                <Navbar />
            </header>
            <article>
                <Map />
            </article>
            <footer>
                <Footer />
            </footer>
        </main>
    );
}

export default Homepage;
