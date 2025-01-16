import { useState } from "react"
import guitarra from "../../assets/guitar-solid.svg";
import CardPrices from "./CardGuitar";

const GuitarHeroe = () => {
  
  const InitialGuitars =  [
    {
      name: "Fender Stratocaster",
      price: 1200,
      type: "Electric",
      image: "https://example.com/images/fender-stratocaster.jpg"
    },
    {
      name: "Gibson Les Paul",
      price: 2500,
      type: "Electric",
      image: "https://example.com/images/gibson-les-paul.jpg"
    },
    {
      name: "Ibanez RG",
      price: 900,
      type: "Electric",
      image: "https://example.com/images/ibanez-rg.jpg"
    },
    {
      name: "Yamaha FG800",
      price: 200,
      type: "Acoustic",
      image: "https://example.com/images/yamaha-fg800.jpg"
    },
    {
      name: "Taylor 214ce",
      price: 1200,
      type: "Acoustic",
      image: "https://example.com/images/taylor-214ce.jpg"
    },
    {
      name: "Martin D-28",
      price: 3000,
      type: "Acoustic",
      image: "https://example.com/images/martin-d28.jpg"
    },
    {
      name: "PRS Custom 24",
      price: 3500,
      type: "Electric",
      image: "https://example.com/images/prs-custom-24.jpg"
    },
    {
      name: "Epiphone SG Standard",
      price: 400,
      type: "Electric",
      image: "https://example.com/images/epiphone-sg-standard.jpg"
    },
    {
      name: "Jackson Soloist",
      price: 1000,
      type: "Electric",
      image: "https://example.com/images/jackson-soloist.jpg"
    },
    {
      name: "Seagull S6",
      price: 500,
      type: "Acoustic",
      image: "https://example.com/images/seagull-s6.jpg"
    }
  ];
    const [filterGuitars, setFilterGuitars] = useState(InitialGuitars);
    const [searchTerm, setsearchTerm] = useState("");
    const [filterType, setFilterType] = useState("");

    const handleSearch = (e)=>{
        const value =e.target.value.toLowerCase();
        setsearchTerm(value);
        // funcion que realiza la busquedad
        findGuitars(searchTerm,filterType);
    };

    const findGuitars = (search,typeGuitar)=>{
        //Como filtrar de manera mas sencilla : filter y luego de entro pregunto con el include, si incluye el termino a buscar y lo añade al array.
        const dataFiltered = InitialGuitars.filter((guitar)=> guitar.name.toLowerCase().includes(search) && guitar.type.includes(typeGuitar));
        setFilterGuitars(dataFiltered);
    };

    const handleFilterType = (e)=>{
        const value =e.target.value;
        setFilterType(value);
        findGuitars(searchTerm,value);
    }

    return (
    <div className="max-w-2xl mx-auto bg-gray-200 mt-8 p-6 shadow-lg rounded-md">
        {/*Titulo*/}
        <h1 className="text-2xl font-bold text-center mb-6">Filtro de Guitarras</h1>

        {/*Buscador de guitaras/Formulario */}
        <div>
            <label className="block text-gray-700 font-medium mb-2">Buscar: </label>
            <input 
                type="text" 
                name="nombre" 
                value={searchTerm} 
                onChange={handleSearch} 
                className="w-full px-3 py-3 border rounded-lg" 
                placeholder="Buscar"/>
        </div>

        {/*Select para filtrar por tipo de guitarra */}
        <div>
            <label className="block text-gray-700 font-medium mb-2">Filtrar por tipo de guitarra</label>
            <select
            value={filterType}
            onChange={handleFilterType} 
            className="w-full p-2 border border-gray-300 rounded-md"
            >
                <option value="">Todos</option>
                <option value="Electric">Electric</option>
                <option value="Acoustic">Acoustic</option>
            </select>

        </div>

        {/*Lista de Guitarras */}
        <div>
            {filterGuitars.map(guitar=>(
                //renderizar cardGuitar
                <CardPrices
                    key={guitar.name}
                    guitarraImg={guitarra}
                    guitar={guitar}
                />
                
            ))}    
        </div>
    </div>
  );
};

export default GuitarHeroe;
