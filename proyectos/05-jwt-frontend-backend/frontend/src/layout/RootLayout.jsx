import Navbar from "../components/Navbar"
import  Outlet  from "react-router-dom";  // Add this import

const RootLayout = () => {
  return (
    <>
        <div className="min-h-screen bg-gray-100">
            <Navbar>
                <main className="p-4">
                    <Outlet />
                </main>
            </Navbar>

        </div>
    </>
  )
}

export default RootLayout