import React from 'react';
import { Link } from 'react-router-dom';

// Assets
import pin from '../images/pin.svg';

// Styles
import styles from '../styles/pages/default.module.scss';

const HomePage = () => {
   console.log('home page');
   return (
      <div className={styles.home}>
         <div className={styles.content}>
            <h1>Where in the world<br />are our Crederians?</h1>
            <Link to={'/locate'}>
               <button className="primary">
                  <img src={pin} className="App-logo" alt="Map pin" /> Locate Me
               </button>
            </Link>
         </div>
      </div>
   )
}

export default HomePage;
