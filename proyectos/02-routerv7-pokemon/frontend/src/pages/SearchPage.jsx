import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "sonner";

const SearchPage = () => {
    const navigate = useNavigate();
    const [search, setSearch] = useState("");

    const handleSubmit = async (e)=>{
        e.preventDefault();

        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${search.toLowerCase}`);
            if(!response.ok){
                throw new Error("Error buscando el pokemon ");
            }
            const data = response.json();
            navigate('/search/name:')
        } catch (error) {
            toast.error("Pokemon no encontrado", {
                style: {
                    background: "black",
                    border: "1px solid black",
                    color: "white", 
                },
            });
                       
        }
    }
  return (
    <div className="bg-gradient-to-r from bg-purple-500 to-yellow-300 text-white p-4 mx-auto container mt-5">
        <h1 className="text-3xl font-bold mb-6">Buscar Pokermon</h1>
        <form onSubmit={handleSubmit} className="max-w mx-auto">
            <div className="flex gap-2">
            <input type="text" placeholder="Buscar Pokemon" value={search} onChange={(e)=> setSearch(e.target.value)} className="flex-1 p-2 rounded-lg" />
            <button className="bg-black rounded-lg p-4"
            type="submit"
            >Buscar</button>
            </div>
        </form>
        
    </div>
  )
}

export default SearchPage