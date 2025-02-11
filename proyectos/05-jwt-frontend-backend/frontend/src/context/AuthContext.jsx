import { createContext } from "react";

const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const AuthContext = createContext();

export const AuthProvider=({children})=>{
    //funciones en mi context
    // checkAuth-> verificar si el usuario esta auth siempre que monte o reciba el componente
    //login, register, logout

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
    }
}