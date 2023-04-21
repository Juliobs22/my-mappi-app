import { useEffect, useReducer } from "react";
import { LugaresContext } from "./LugaresContext";
import { LugaresReducer } from "./LugaresReducer";
import { getUserLocation } from "../../helpers/userLocation";

export interface LugaresState {
    isLoading: boolean;
    location?: [number, number];
}

const INITIAL_STATE:LugaresState = {
    isLoading: true,
    location: undefined
}; 

interface props {
    children: JSX.Element | JSX.Element[]
}

const LugaresProvider = ({children}:props) => {

    const [state, dispach] = useReducer(LugaresReducer, INITIAL_STATE);
    useEffect( () => {
        getUserLocation()
        .then(lngLat => dispach({type: 'setUserLocation', payload: lngLat}));
    }, []);
    return (
        <LugaresContext.Provider
        value={{
            ...state,
        }}>
            {children}
        </LugaresContext.Provider>
    );
}
 
export { LugaresProvider };