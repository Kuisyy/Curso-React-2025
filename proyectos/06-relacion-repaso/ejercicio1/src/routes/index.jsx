import { createBrowserRouter, Navigate } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";
import RootLayout from "../layout/RootLayout";
import CreateProductPage from "../pages/CreateProductPage";
import DeleteProductPage from "../pages/DeleteProductPage";
import EditProductPage from "../pages/EditProductPage";
import ErrorPage from "../pages/ErrorPage";
import LoginPage from "../pages/LoginPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import ProductPage from "../pages/ProductPage";
import RegisterPage from "../pages/RegisterPage";
import { ROUTES } from "./paths";


const router = createBrowserRouter([
    {
        path: "/",
        element:<RootLayout />,
        errorElement: <ErrorPage />,
        children:[
            //Declarar por defecto la routa de por defecto
            {
                index:true,
                element:<Navigate to={ROUTES.LOGIN} replace/> // Para redireccionar directamente, asi que hacemos que por defecto sea /login
            },

            //Rutas publicas
            {
                path:ROUTES.LOGIN,
                element: <LoginPage />
            },
            {
                path:ROUTES.REGISTER,
                element: <RegisterPage />
            },
            {
                path:ROUTES.PRODUCTS,
                children:[
                    {
                        index:true,
                        element:<ProductPage />
                    },
                    {
                        path:ROUTES.NEWPRODUCT,
                        element:(
                           <ProtectedRoute>
                                <CreateProductPage/>
                           </ProtectedRoute>
                        ),
                    },
                    {
                        path:ROUTES.PRODUCTDETAIL,
                        element:<ProductDetailPage />
                    },
                    {
                        path:ROUTES.EDITPRODUCT,
                        element:(
                           <ProtectedRoute>
                                <EditProductPage/>
                           </ProtectedRoute>
                        ),
                    },
                    {
                        path:ROUTES.DELETEPRODUCT,
                        element:(
                           <ProtectedRoute>
                                <DeleteProductPage/>
                           </ProtectedRoute>
                        ),
                    },

                ]
            }
        ]
    }
]);

export default router;