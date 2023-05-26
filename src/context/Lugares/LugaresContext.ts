import { createContext } from "react";
import { Places } from "../../interfaces/Places";

export interface LugaresCtx {
    isLoading: boolean;
    location?: [number, number];
    isLoadingLugares: boolean;
    lugares: Places[];
    //Metodos
    searchPlaces: (code:string) => Promise<Array<Places>>;
}

export const LugaresContext = createContext<LugaresCtx>({} as LugaresCtx);