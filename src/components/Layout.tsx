import React from 'react';
import '../base.css';
<<<<<<< HEAD
import styles from '../styles/pages/homepage.module.scss';
=======
import styles from  '../styles/pages/homepage.module.scss'; 
>>>>>>> 4fb66e0e9617e40df64f7bfbe6788bd97ad0c7de
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = (props: { children: any; }) => {
<<<<<<< HEAD
   const { children } = props;
   return (
      <main className={styles.app}>
         <header>
            <Navbar />
=======
   const {children} = props; 
   return (
      <main className={styles.app}>
         <header>
            <Navbar/>
>>>>>>> 4fb66e0e9617e40df64f7bfbe6788bd97ad0c7de
         </header>
         <article>
            {children}
         </article>
         <footer>
<<<<<<< HEAD
            <Footer />
=======
            <Footer/>
>>>>>>> 4fb66e0e9617e40df64f7bfbe6788bd97ad0c7de
         </footer>
      </main>
   )
}

export default Layout;