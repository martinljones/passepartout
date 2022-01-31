import React from 'react';
import {Link} from 'react-router-dom';

const HomePage = () => {
   console.log('home page');
   return (
         <div>
         <h1>Cool App Homepage</h1>
         <Link to={'/locate'}>
            <button>Where are you?</button>
         </Link>
         </div>
      )
}

export default HomePage;
