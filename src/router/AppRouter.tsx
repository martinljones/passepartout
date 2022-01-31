import React from 'react';
import { Routes, Route } from "react-router-dom";
import HomePage from '../pages/home';
import Layout from '../components/Layout';
import LocationInfo from '../pages/locationInfo';
import GlobeView from '../pages/globeView';
import About from '../pages/about';
import NotFound from "../pages/notFound";

const AppRouter = () => {
   return (
      <Layout>
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/locate" element={<LocationInfo />} />
            <Route path="/globe-view" element={<GlobeView />} />
            <Route path="/about" element={<About />} />
            <Route element={NotFound} />
         </Routes>
      </Layout>
   )
}

export default AppRouter;
