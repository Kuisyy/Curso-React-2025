import { useEffect, useState } from "react";

const CardsPlaceHolder = () => {
    const [users, setUsers] = useState([]);

    // LA funcion esta deberia estar en una carpeta aparte rollo helpers o asi
    const fetchDataPlaceHolder = async () => {
        try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        if(!response.ok){
            throw new Error("Error no carga la API JSON");
        }
        setUsers(await response.json());

        } catch (error) {
            throw new Error("Error: ",error);
        }
    };

    useEffect(() => {
      fetchDataPlaceHolder();
    }, []);
  return (

    <div className="bg-gray-200 shadow-lg p-6 flex-col justify-center items-center">
        {users.map((user)=>{
        return(
            <div key={user.id} className="flex justify-center items-center">
                <h2 className="text-xl font-bold mb-4 mr-5">UserName: {user.username}</h2>
                <p className="text-gray-600 mb-4">City: {user.address.city}</p>
            </div>
            );
        })}
    </div>
  );
};


export default CardsPlaceHolder;