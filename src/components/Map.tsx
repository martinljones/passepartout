import * as React from 'react';
import Globe from 'react-globe.gl';

// Styles
import styles from "../styles/components/map.module.scss"

export default function Map(props: any) {

  const myData: any = [];

  props.list.map((item: { latitude: any; longitude: any; userName: any }) => {
    myData.push({
      lat: item.latitude,
      lng: item.longitude,
      size: .2, // maybe for this we can do a "years at Credera" field?
      color: '#e55f4c', // color could indicate something?
      name: item.userName
    })
    console.log(myData);
  })

  return (
    <div className={styles.map}>
      <Globe
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
        pointsData={myData}
        pointAltitude="size"
        pointColor="color"
        backgroundColor="#fff"
      />
    </div>
  );
}
