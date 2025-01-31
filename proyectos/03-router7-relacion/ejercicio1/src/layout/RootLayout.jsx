import { Link, Outlet, useNavigate } from "react-router-dom"
import isAuthenticated from "../helpers/isAutheticated";

const RootLayout = () => {
    const navigate = useNavigate();

    const handleLogout = ()=>{
        localStorage.removeItem("token");
        navigate("/");
    }
    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-white shado-lg">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex justify-between items-center h-16">
                        <Link 
                        to="/" 
                        className="font-bold text-xl hover:text-amber-300">
                            Home
                        </Link>
                        <Link 
                        to="/profile" 
                        className="font-bold text-xl hover:text-amber-300">
                            Profile
                        </Link>
                        <Link 
                        to="/dashboard" 
                        className="font-bold text-xl hover:text-amber-300">
                            Dashboard
                        </Link>

                        {
                            isAuthenticated() && (
                                <button className="bg-red-400 hover:bg-red-600  text-white font-bold py-2 px-4" 
                                        onClick={handleLogout}
                                > Cerrar sesion</button>
                            )
                        }
                    </div>
                </div>
            </nav>
            <main className="max-w-6xl mx-auto mt-8 px-4"></main>
            <Outlet />
        </div>
      )
}

export default RootLayout