import React, { useState } from 'react';
import {getDatabase, ref, set} from 'firebase/database';
import {useNavigate} from 'react-router-dom';

const LocationInfo = () => {
   const [userName, setUserName] = useState<any>("");
   const [userCords, setUserCords] = useState<any>({})
   const navigate = useNavigate();
   const database = getDatabase();
   
   function getLocationHandler() {
      navigator.geolocation.getCurrentPosition((success) => {
         const {latitude, longitude} = success.coords;
         setUserCords({latitude, longitude});
      }, (error) => {
         console.log(error);
      })
   }
   function setUserNameChange(event: { target: any; }) {
      setUserName(event.target.value);
   }

   async function writeCordsToUsername() {
      await set(ref(database, 'users/' + userName), {
         userName: userName,
         latitude: userCords.latitude,
         longitude: userCords.longitude
      })
      navigate('/globe-view');
   }

   function renderSubmitButton() {
      const {latitude, longitude} = userCords;
      if(latitude && longitude) {
         return (
            <button onClick={writeCordsToUsername}>
               Send
            </button>
         )
      }
      return null;
   }
   return (
      <div>
         <input 
         value={userName} 
         onChange={setUserNameChange}
          placeholder="name" 
          type="text"/>
         <button onClick={getLocationHandler}> Get Location</button>
         <h1>Lat: {userCords?.latitude}</h1>
         <h1>Long: {userCords.longitude}</h1>
         {renderSubmitButton()}
      </div>
   )
}

export default LocationInfo;