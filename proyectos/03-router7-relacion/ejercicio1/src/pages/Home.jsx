import { useNavigate } from "react-router-dom";
import isAuthenticated from "../helpers/isAuthenticated"; 

const Home = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("token", "123");
    navigate("/dashboard");
  };

  return (
    <div className="text-center">
      {isAuthenticated() ? (
      <h1 className="text-xl font-bold">Ya estás logueado</h1>
      ) : (

        <div className="text-center">
        <h1 className="text-3xl font-bold mb-8">
          Bienvenido a Ejercicio 1 de React Router DOM v7
        </h1>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
      )}
    </div>
  );
};

export default Home;
