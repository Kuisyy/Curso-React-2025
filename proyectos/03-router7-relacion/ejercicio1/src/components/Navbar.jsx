import { Link } from "react-router-dom"

const Navbar = () => {
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
                    </div>
                </div>
            </nav>
        </div>
      )
}

export default Navbar