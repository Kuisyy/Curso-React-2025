import { createContext, useContext, useState } from "react";

const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const AuthContext = createContext();

export const AuthProvider=({children})=>{
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    //funciones en mi context
    // checkAuth-> verificar si el usuario esta auth siempre que monte o reciba el componente
    //login, register, logout

    const checkAuth = async ()=>{
        try {
            const response = await fetch(`${VITE_BACKEND_URL}/auth/check-auth`,{
                credentials: "include", // para indicar que se envien las cookies al server
            });
            if(response.ok){
                setIsAuthenticated(true)
            }else{
                throw new Error("No autenticado");
                
            }

        } catch (error) {
            console.error("Error: ",error);
            setIsAuthenticated(false);
            return false;
        }
    };

    const login = async (username,password)=>{
       try {
        const response = await fetch (`${VITE_BACKEND_URL}/auth/login`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({username,password}),
            credentials:"include"
        })
        if(!response.ok){
            return {sucess:false, message: "Usuario o contraseña incorrectos"}
        }
        return {sucess:true, message: "Usuario o contraseña correctos"}

       } catch (error) {
            console.error("Error: ",error);
       }
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, checkAuth }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = ()=>{
    const context = useContext(AuthContext);
    if(!context){
        throw new Error("useAuth debe estar dentro del proveedor AuthProvider");
    }
    return context;
}