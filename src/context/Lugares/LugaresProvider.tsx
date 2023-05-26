import { useEffect, useReducer } from "react";
import { LugaresContext } from "./LugaresContext";
import { LugaresReducer } from "./LugaresReducer";
import { getUserLocation } from "../../helpers/userLocation";
import Searcher from "../../apis/Searcher";
import { Places } from "../../interfaces/Places";

const dataPlaces:string = '[{"nombre":"EDIFICIO J","cardinate":[-100.405,20.5946],"id_cardinate":1},{"nombre":"EDIFICIO F","cardinate":[-100.405,20.5938],"id_cardinate":2},{"nombre":"ALBERCA","cardinate":[-100.405,20.5951],"id_cardinate":3},{"nombre":"CENTRO DE IDIOMAS","cardinate":[-100.404,20.5931],"id_cardinate":4},{"nombre":"DELEGACION SINDICAL","cardinate":[-100.404,20.5931],"id_cardinate":5},{"nombre":"EDIFICIO H","cardinate":[-100.405,20.5944],"id_cardinate":6},{"nombre":"LABORATORIO QUIMICA","cardinate":[-100.405,20.5929],"id_cardinate":7},{"nombre":"LABORATORIO MECANICA","cardinate":[-100.404,20.5934],"id_cardinate":8},{"nombre":"LABORATORIO ELECTRICA","cardinate":[-100.404,20.5936],"id_cardinate":9}]';
export interface LugaresState {
    isLoading: boolean;
    location?: [number, number];
    isLoadingLugares: boolean;
    lugares: Places[];
}

const INITIAL_STATE:LugaresState = {
    isLoading: true,
    location: undefined,
    isLoadingLugares: false,
    lugares: []
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
        if (query.length === 0) {
            dispach({type:'setLugares', payload:[]})
            return [];
        }

        const supradata = JSON.parse(dataPlaces);
        let result:Array<Places> = await new Array();
        dispach({type: 'setLoadingLugares'})
        for (const it of supradata) {

            let quar = it.nombre.slice(0, query.length);
            if (query === quar) {
                result.push(it);
            }
        }
        dispach({type: 'setLugares', payload: result});
        return result;
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