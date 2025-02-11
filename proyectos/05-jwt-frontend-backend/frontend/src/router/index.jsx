import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Dashboard from "../page/Dashboard";
import Home from "../page/Home";
import Login from "../page/Login";
import Register from "../page/Register";
 

export const router = createBrowserRouter([
    {
        path:"/",
        element:<RootLayout />,
        children:[
            {
                index:true,
                element:<Home/>,
            },
            {
                path:"login",
                element:<Login/>
            },
            {
                path:"register",
                element:<Register/>
            },
            {
                path:"dashboard",
                element:<Dashboard />
            }
        ]
    }
])