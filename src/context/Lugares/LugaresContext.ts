import { createContext } from "react";

export interface LugaresCtx {
    isLoading: boolean;
    location?: [number, number];
}

export const LugaresContext = createContext<LugaresCtx>({} as LugaresCtx);