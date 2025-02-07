import { RouterProvider } from "react-router-dom"
import router from "./router"
import { Toaster } from "sonner"

const App = () => {
  return (
    <>
      <Toaster position="top-right" duration={2000}></Toaster>
      <RouterProvider router={router}/>
    </>
  )
}

export default App