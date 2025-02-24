import { RouterProvider } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import { ProductProvider } from "./context/ProductContext"
import router from "./routes"

const App = () => {
  return (
    <AuthProvider>
      <ProductProvider>
        <RouterProvider router={router}/>
      </ProductProvider>
    </AuthProvider>
    
  )
}

export default App