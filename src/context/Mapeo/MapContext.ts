import { Map } from 'mapbox-gl';
import { createContext } from 'react';

interface MapContexProps {
    isMapLoad: boolean;
    mapa?: Map,
    setMapa: (mapa:Map) => void
}

const MapContext = createContext({} as MapContexProps);

export { MapContext };