import { MapState } from './MapProvider';
import { Map } from 'mapbox-gl';

type MapActions = { type: 'setMap', playload: Map };

const MapReducer = (state: MapState, action: MapActions):MapState => {

    switch (action.type) {
        case 'setMap':
            return {
                ...state,
                isMapLoad: true,
                mapa: action.playload
            }
        default:
            return state;
    }
}

export default MapReducer;
