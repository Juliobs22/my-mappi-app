import { LugaresState } from "./LugaresProvider";

type LugaresAct = {type: 'setUserLocation', payload: [number, number]};

const LugaresReducer = (state: LugaresState, action: LugaresAct ) : LugaresState => {
    switch (action.type) {
        case 'setUserLocation':
            return({
                ...state,
                isLoading: false,
                location: action.payload
            });     
        default:
            return state;
    }
}

export { LugaresReducer };