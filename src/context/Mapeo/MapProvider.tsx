import { Map } from "mapbox-gl";
import { MapContext } from "./MapContext";
import { useReducer } from "react";
import MapReducer from "./MapReducer";

export interface MapState {
    isMapLoad: boolean;
    mapa?: Map,
}

const INITIAL_STATE:MapState = {
    isMapLoad: false,
    mapa: undefined
}

interface Props {
    children: JSX.Element | JSX.Element[];
}

const MapProvider = ({ children }:Props) => {
    const [state , dispach] = useReducer(MapReducer, INITIAL_STATE);

    function setMapa(mapa:Map) {
        dispach({type: 'setMap', playload: mapa})
    }

    return (
        <MapContext.Provider
        value={{...state, setMapa}}>
            { children }
        </MapContext.Provider>
    );
}

export { MapProvider };