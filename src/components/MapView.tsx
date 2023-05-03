import { useContext, useLayoutEffect, useRef } from "react";
import mapboxgl from 'mapbox-gl';
import { LugaresContext } from "../context";
import Loader from "./Loader";
import styles from './module/mapview.module.css'


const MapView = () => {
    const {isLoading, location} = useContext(LugaresContext);
    const mapRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (!isLoading) {
            const map = new mapboxgl.Map({
                container: mapRef.current!, // container ID
                style: 'mapbox://styles/mapbox/streets-v12', // style URL
                center: [-74.5, 40], // starting position [lng, lat]
                zoom: 14, // starting zoom
            });
        }
    }, [isLoading]);

    if (isLoading) {
        return (<Loader/>);
    }

    else {
        return (
            <div 
                ref={mapRef}
                className={styles.mapa}>  
            </div>
        ); 
    }
}
 
export default MapView;