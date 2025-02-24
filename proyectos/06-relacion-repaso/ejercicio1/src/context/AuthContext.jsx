import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider =({ children })=>{
    const [user, setUser] = useState(()=>{
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user): null
    });

    const [token, setToken] = useState(()=>{
        const token = localStorage.getItem('token');
        return token ? JSON.parse(token): null
    });

    const [isAuthenticated, setIsAuthenticated] = useState(()=>{
        // return localStorage.getItem('token') ? true : false;  // !!token las !! te hace true false directo
        return !!token;
    });

    const [authError, setAuthError] = useState(null);

    const login = (userData, token)=>{
        setUser(userData);
        setToken(token);
        setIsAuthenticated(true);
        localStorage.setItem("user",JSON.stringify(userData));
        localStorage.setItem("token",JSON.stringify(token));
        setAuthError(false);

    };

    const logout = ()=>{
        setUser(null);
        setToken(null);
        setIsAuthenticated(false);
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        setAuthError(false);
    };

    const value ={
        user,
        token,
        isAuthenticated,
        authError,
        setAuthError,
        login,
        logout
    };

    return(
        <AuthContext.Provider value={ value }>{children}</AuthContext.Provider>
    )
};
