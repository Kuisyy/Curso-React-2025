import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = ()=>{
    login();
    navigate("/admin")
  }
  
  return (
    <div className="min-h-screen flex items-center justify-content-center bg-gray-100 ">
      <div className="bg-white p-8 rounded-lg shadow-lg w-100">
        <h1 className=" text-2xl font-bold mb-6 text-center"> Bienvenido al Login</h1>
        <button onClick={handleLogin} className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</button>
      </div>
    </div>
  )
}

export default Login