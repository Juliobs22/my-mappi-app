import { createContext } from "react";

export interface LugaresCtx {
    isLoading: boolean;
    location?: [number, number];
    
    //Metodos
    searchPlaces: (code:string) => Promise<any>;
}

export const LugaresContext = createContext<LugaresCtx>({} as LugaresCtx);