import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const VITE_BACKEND_URL= import.meta.env.VITE_BACKEND_URL;

export const AuthContext = createContext();

export const AuthProvider =({ children })=>{

    const [user, setUser] = useState(() => localStorage.getItem("user") || null);

    const [token, setToken] = useState(localStorage.getItem("token")||null);

    const [authError, setAuthError] = useState(null);

    const login = async (user) => {
        const { email, password } = user;
        try {
            const response = await fetch(`${VITE_BACKEND_URL}/api/auth/login`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ email, password })
            });
            if (!response.ok) {
                setAuthError("No se puede conectar a la API en login");
                throw new Error("Error en login");
            }
            const data = await response.json();
            setUser(data.user);
            setToken(data.token);
            localStorage.setItem("user", JSON.stringify(data.user));
            localStorage.setItem("token", data.token);
        } catch (error) {
            setAuthError(`Error en el login: ${error.message}`);
        }
    };
    


    const register =async  (user)=>{
        const { name, email, password }= user;
        try {
            const response = await fetch(`${VITE_BACKEND_URL}/api/auth/register`,{
                method: "POST",
                headers:{
                    "Content-type":"application/json"
                },
                body: JSON.stringify({name, email, password})
            })
            if(!response.ok){
                throw new Error("No ataca a la api en register", authError.message);
            }
            const data = await response.json();
            setUser(data.user);
            setToken(data.token);
            localStorage.setItem("user",JSON.stringify(data.user));
            localStorage.setItem("token",data.token);



        } catch (error) {
            throw new Error("Error en el register",error);
            
        }

    };

    const logout = ()=>{
        setUser(null);
        setToken(null);
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        setAuthError(false);
    };

    const value ={
        register,
        user,
        token,
        authError,
        setAuthError,
        login,
        logout
    };

    return(
        <AuthContext.Provider value={ value }>{children}</AuthContext.Provider>
    )
};

export const useAuth = ()=>{
    const context = useContext(AuthContext);
    if(!context){
        throw new Error("El context de debe ir en useProducts");
    }
    return context;

}
