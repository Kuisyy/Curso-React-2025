//proteccion de rutas de un componente usando la funcion 
// isAuthentication()

import { createBrowserRouter, Navigate } from "react-router-dom";
import Profile from "../pages/Profile";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import RootLayout from "../layout/RootLayout";
import isAuthenticated from "../helpers/isAuthenticated";






const ProtectedRoute = ({ children }) =>{
    //condiciones de auth
    if(!isAuthenticated()){
        return <Navigate to="/" replace={true} />
    }
}

const router = createBrowserRouter([
    {
    path:"/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children:[
        {
            index:true,
            element: <Home />
        },
        {
            path:"profile",
            element:(
                <ProtectedRoute>
                    <Profile />
                </ProtectedRoute>
            )
        },
        {
            path:"dashboard",
            element:(
            <ProtectedRoute>
                <Dashboard />
            </ProtectedRoute>
        )    
        },
    ]
    }
]);

export default router;
