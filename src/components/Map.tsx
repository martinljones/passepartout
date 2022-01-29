import * as React from 'react';
import Globe from 'react-globe.gl';

// Styles
import styles from "../styles/components/map.module.scss"

export default function Map(props: any) {

  // Gen random data
  const N = 300;
  const gData = [...Array(N).keys()].map(() => ({
    lat: (Math.random() - 0.5) * 180,
    lng: (Math.random() - 0.5) * 360,
    size: .2,
    color: '#e55f4c'
  }));

  const myData = [
    // Denver
    {
      lat: 39.749546025852034,
      lng: -104.99129370003367,
      size: .2, // maybe for this we can do a "years at Credera" field?
      color: '#e55f4c' // color could indicate something?
    },
    // Chicago
    {
      lat: 41.88692362395159,
      lng: -87.62315228649105,
      size: .2, // maybe for this we can do a "years at Credera" field?
      color: '#e55f4c' // color could indicate something?
    },
    // New York
    {
      lat: 40.75008373503121,
      lng: -73.97303534419133,
      size: .2, // maybe for this we can do a "years at Credera" field?
      color: '#e55f4c' // color could indicate something?
    },
    // Leeds
    {
      lat: 53.86545093707673,
      lng: -1.5310090997933774,
      size: .2, // maybe for this we can do a "years at Credera" field?
      color: '#e55f4c' // color could indicate something?
    },
    // Manchester
    {
      lat: 53.51259961806427,
      lng: -2.2272493142847605,
      size: .2, // maybe for this we can do a "years at Credera" field?
      color: '#e55f4c' // color could indicate something?
    },
    // London
    {
      lat: 51.59687147006246,
      lng: -0.08772993483252887,
      size: .2, // maybe for this we can do a "years at Credera" field?
      color: '#e55f4c' // color could indicate something?
    },
    // Singapore
    {
      lat: 1.3133454267288793,
      lng: 103.8643670262665,
      size: .2, // maybe for this we can do a "years at Credera" field?
      color: '#e55f4c' // color could indicate something?
    },
    // Seattle
    {
      lat: 47.607297282186664,
      lng: -122.33610570168591,
      size: .2, // maybe for this we can do a "years at Credera" field?
      color: '#e55f4c' // color could indicate something?
    },
    // Los Angeles
    {
      lat: 33.9788242045974,
      lng: -118.41824375968552,
      size: .2, // maybe for this we can do a "years at Credera" field?
      color: '#e55f4c' // color could indicate something?
    },
    // Houston
    {
      lat: 29.782061985743397,
      lng: -95.55959156743621,
      size: .2, // maybe for this we can do a "years at Credera" field?
      color: '#e55f4c' // color could indicate something?
    },
    // Dallas
    {
      lat: 32.95898012812971,
      lng: -96.82211543086929,
      size: .2, // maybe for this we can do a "years at Credera" field?
      color: '#e55f4c' // color could indicate something?
    },
    // Atlanta
    {
      lat: 33.85228992192492,
      lng: -84.36624591550667,
      size: .2, // maybe for this we can do a "years at Credera" field?
      color: '#e55f4c' // color could indicate something?
    },
  ]

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
