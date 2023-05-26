import { Map, Marker, Popup } from "mapbox-gl";
import { MapContext } from "./MapContext";
import { useReducer, useContext } from "react";
import MapReducer from "./MapReducer";
import { LugaresContext } from "../Lugares/LugaresContext";

export interface MapState {
    isMapLoad: boolean;
    mapa?: Map,
    markers: Marker[]
}

const INITIAL_STATE:MapState = {
    isMapLoad: false,
    mapa: undefined,
    markers: []
}

interface Props {
    children: JSX.Element | JSX.Element[];
}

const MapProvider = ({ children }:Props) => {
    const [state , dispach] = useReducer(MapReducer, INITIAL_STATE);
    const { lugares } = useContext(LugaresContext)

    function setMapa(mapa:Map) {
        const marcador = new Marker({ color: '#F86624' });
        const msgPopUp = new Popup({ closeOnClick: false });
        msgPopUp.setHTML('<h4>Este eres tu</h4><p>aqui se muestra tu bicacion en tiempo real</p>');
        marcador.setLngLat(mapa.getCenter());
        marcador.addTo(mapa);
        marcador.setPopup(msgPopUp);
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