import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../layout/AdminLayout";
import Login from "../pages/Login";
import ErrorPage from "../pages/Errorpage";
import Rootlayout from "../layout/Rootlayout";
import ProtectedRoute from "../components/ProtectedRoute";




export const router = createBrowserRouter([
  {
    path:"/",
    element: <Rootlayout/>,
    errorElement: <ErrorPage/>,
    children:[
      {
        index:true,
        element:<Login/>,
      },
      {
        path:"admin",
        element:(
          <ProtectedRoute>
            <AdminLayout/>
          </ProtectedRoute>
        ),
        children:[
          {
            
          }
        ]
      }
    ]

  }

]);