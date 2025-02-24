import { RouterProvider } from "react-router-dom"
import router from "./routes"
import { AuthProvider } from "./context/AuthContext"

const App = () => {
 return(
  <AuthProvider>
    <RouterProvider router={router}>
    </RouterProvider>
  </AuthProvider>
  
 )
}

export default App