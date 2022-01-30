import React from 'react';
import '../base.css';
import styles from  '../styles/pages/homepage.module.scss'; 
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = (props: { children: any; }) => {
   const {children} = props; 
   return (
      <main className={styles.app}>
         <header>
            <Navbar/>
         </header>
         <article>
            {children}
         </article>
         <footer>
            <Footer/>
         </footer>
      </main>
   )
}

export default Layout;