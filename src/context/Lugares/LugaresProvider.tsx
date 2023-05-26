import { useEffect, useReducer } from "react";
import { LugaresContext } from "./LugaresContext";
import { LugaresReducer } from "./LugaresReducer";
import { getUserLocation } from "../../helpers/userLocation";
import Searcher from "../../apis/Searcher";

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

    const searchPlaces = async (query : string) => {
        if (query.length === 0)
            return [];
        const resp = await Searcher.get('/api/', {
            params: {
                cardinate: true,
                code: query
            },
            headers: {
                "Access-Control-Allow-Origin": "http://192.168.1.70/",
                'Content-Type': 'application/json',
                'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS'
            },
            
        });
        return resp.data;
    }

    return (
        <LugaresContext.Provider
        value={{
            ...state,
            searchPlaces
        }}>
            {children}
        </LugaresContext.Provider>
    );
}
 
export { LugaresProvider };