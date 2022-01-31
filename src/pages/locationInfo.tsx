import React, { useState } from 'react';
import { getDatabase, ref, set } from 'firebase/database';
import { useNavigate } from 'react-router-dom';

// Styles
import styles from '../styles/pages/default.module.scss';

const LocationInfo = () => {
   const [userName, setUserName] = useState<any>("");
   const [userCords, setUserCords] = useState<any>({})
   const navigate = useNavigate();
   const database = getDatabase();

   function getLocationHandler() {
      navigator.geolocation.getCurrentPosition((success) => {
         const { latitude, longitude } = success.coords;
         setUserCords({ latitude, longitude });
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
      const { latitude, longitude } = userCords;
      if (latitude && longitude) {
         return (
            <button onClick={writeCordsToUsername}>
               Send
            </button>
         )
      }
      return null;
   }

   return (
      <div className={styles.locate}>
         <div className={styles.content}>
            <p><strong>Coordinates:</strong></p>
            <p>Lat: {userCords?.latitude ? userCords.latitude : <span className="empty">32.959394244770536</span>}<br />Long: {userCords.longitude ? userCords.longitude : <span className="empty">-96.820903070407</span>}</p>
            <input
               value={userName}
               onChange={setUserNameChange}
               placeholder="Your name"
               type="text" />
            {renderSubmitButton() ? renderSubmitButton() : <button onClick={getLocationHandler}> Get Location</button>}
         </div>
      </div>
   )
}

export default LocationInfo;