import { createContext, useContext } from "react";
import { appConfig } from "../config";

const context = createContext()

const apiUrl = ( process.env.NODE_ENV=="development" ) ? appConfig.dev_config.apiUrl : appConfig.prod_config.apiUrl 
    
export default function Context({ children }) {
    return (
        <context.Provider value={{ apiUrl }}>
            { children }
        </context.Provider>
    )
}

export const GlobalStates = () => useContext(context)
