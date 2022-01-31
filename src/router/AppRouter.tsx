import React from 'react';
import {Routes, Route} from "react-router-dom";
import HomePage from '../pages/home';
import Layout from '../components/Layout'; 
import LocationInfo from '../pages/loactionInfo';
import GlobeView from '../pages/globeView';

const AppRouter = () => {
   return (
   <Layout>
      <Routes>
         <Route path="/" element={<HomePage/>}/>
         <Route path="/locate" element={<LocationInfo/>}/>
         <Route path="/globe-view" element={<GlobeView/>}/>
      </Routes>
   </Layout>
   )
}

export default AppRouter;
