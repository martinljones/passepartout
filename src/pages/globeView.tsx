import React, { useEffect, useState } from 'react';
import { getDatabase, ref, onValue } from "firebase/database";


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


   return (locationList.map((item: any) => {
      return <div>
         <h3>{item.userName}</h3>
         <h4>{item.latitude}</h4>
         <h4>{item.longitude}</h4>
      </div>
   }))
}

export default GlobeView;