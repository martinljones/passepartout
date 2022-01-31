import React, { useEffect, useState } from 'react';
import { getDatabase, ref, onValue } from "firebase/database";


// Components
import Map from "../components/Map"

const GlobeView = () => {
   const [locationList, setLocationList] = useState<any>([]);
   const dataBase = getDatabase()
   function getLocations() {
      const locationRef = ref(dataBase, 'users/');
      onValue(locationRef, (snapshot) => {
         const data = snapshot.val();
         setLocationList(Object.values(data));
      }, { onlyOnce: true });
   }
   useEffect(() => {
      getLocations();
   }, [])

   return <Map list={locationList} />
}

export default GlobeView;