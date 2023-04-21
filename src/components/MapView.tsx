import { useContext, useLayoutEffect, useRef } from "react";
import mapboxgl from 'mapbox-gl'

import { LugaresContext } from "../context";
import Loader from "./Loader";

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
            <div ref={mapRef}
                style={{
                    height: '100vh',
                    width: '100vw',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                }}
                className=""
            >
               
            </div>
        ); 
    }
}
 
export default MapView;