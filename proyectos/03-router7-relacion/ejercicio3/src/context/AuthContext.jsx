import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children })=>{
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login=()=>{
        setIsAuthenticated(true);
        localStorage.setItem("isAuthenticated", "true")
    };

    const logout = ()=>{
        setIsAuthenticated(false);
        localStorage.removeItem("isAuthenticated");
    };

    return(
        <AuthContext.Provider value={{isAuthenticated,login,logout}}>
            { children }
        </AuthContext.Provider>
    )
}

export const useAuth = ()=>{
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth debe ser usado dentro de un AuthProvider");
      }
      return context; 
}