import { Places } from "../../interfaces/Places";
import { LugaresState } from "./LugaresProvider";

type LugaresAct =
| {type: 'setUserLocation', payload: [number, number]}
| {type: 'setLoadingLugares'}
| {type: 'setLugares', payload: Places[]}

const LugaresReducer = (state: LugaresState, action: LugaresAct ) : LugaresState => {
    switch (action.type) {
        case 'setUserLocation':
            return({
                ...state,
                isLoading: false,
                location: action.payload
            }); 
        case 'setLoadingLugares':
            return({
                ...state,
                isLoadingLugares: true,
                lugares: []
            });    
        case 'setLugares':
            return({
                ...state,
                isLoadingLugares: false,
                lugares: action.payload
            });
        default:
            return state;
    }
}

export { LugaresReducer };