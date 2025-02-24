import { createBrowserRouter, Navigate } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import ProductList from "../components/ProductList";
import ProtectedRoute from "../components/ProtectedRoute";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import RootLayout from "../layout/RootLayout";

const router = createBrowserRouter([
    {
        path:"/",
        element:<RootLayout/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                index:true,
                element:<Navigate to={"login"} replace/>
            },
            {
                path:"login",
                element:<LoginPage/>
            },
            {
                path:"register",
                element:<RegisterPage/>
            },
            {
                path:"products",
                element:(
                    <ProtectedRoute>
                        <ProductList/>
                    </ProtectedRoute>
                )
            }
        ]
    }
])


export default router;