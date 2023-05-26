import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
mapboxgl.accessToken = 'pk.eyJ1IjoidWJpY2F0ZWMiLCJhIjoiY2xnZ3I3cnoyMGUyOTNybGhsczdla2V2ZiJ9.2zYQYUcJP2JRfGURgsiVTw';
if (!navigator.geolocation) {
  alert("No podemos acceder a tu geolocalizador");
  throw new Error("Unnable Geolocalitation")
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
