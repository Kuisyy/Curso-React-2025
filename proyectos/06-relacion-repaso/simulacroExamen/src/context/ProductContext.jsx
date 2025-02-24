import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const VITE_BACKEND_URL= import.meta.env.VITE_BACKEND_URL;

export const ProductContext = createContext();

export const ProductProvider=({ children })=>{
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchProductsAPI();
    }, [])
    

    const fetchProductsAPI = async () => {
      try {
        const response = await fetch(`${VITE_BACKEND_URL}/api/products`);
        if(!response.ok){
            throw new Error("Error al hacer fetch a la api");
        };
        const data= await response.json();
        setProducts(data);

      } catch (error) {
        setError("Error en al peticion: ",error.message);
      }finally{
        setIsLoading(false)
      }
    }


    const value ={
        products,
        isLoading,
        error,
    }


    return(
        <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
    )
};

export const useProducts = ()=>{
    const context = useContext(ProductContext);
    if(!context){
        throw new Error("El context de debe ir en useProducts");
    }
    return context;

}

