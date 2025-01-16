import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import LiProductList from "./LiProductList";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [totalCart, seTotalCart] = useState(0)

    //Lo del array del final es apra que solo se ejcute una vez al inicio, recuerdalo
    useEffect(()=>{
        fetchProducts();
    },[]);

    useEffect(() => {
      //realizamos la suma del carrito y lo guardamos en un estado llamado totalCart
      seTotalCart(cart.reduce((acc,product)=> acc+=product.price,0))
    }, [cart])
    


    const fetchProducts = async () => {
        try {
            const response = await fetch("http://localhost:5173/src/data/db2.json");
            if (!response.ok){
                throw new Error("Error con la data");
            };
            setProducts(await response.json());
        } catch (error) {
            throw new Error("Error: ",error);
            
        };
    };

    const addCart = (product)=>{
        setCart((prevCart)=>[...prevCart, product])
    };

    const deleteCart =(product)=>{
        setCart((prevCart)=> prevCart.filter((productCart)=> productCart.id !== product.id))
    };



    

  return (
    <div className="w-full max-w-5xl mx-auto p-4 bg-blue-400">
      <h1 className="text-xl font-bold">Lista de Productos</h1>
      <div className="grid grid-cols-3">
        {products.map((product)=>(
            <ProductCard key={product.id} product={product} addCart={addCart} />
        ))}
        </div>

        <div className="mt-10">
            <h2 className="text-2xl font-bold text-center">Carrito de Compra</h2>
            <p className="text-xl font-bold text-center">Total de compra: {totalCart}</p>

            {cart.length=== 0 ? 
            (
                <p>No hay productos en el carro</p>
            ) : 
            (
                <ul>
                {cart.map((product)=>{
                    return(
                        <LiProductList key={product.id} product={product} deleteCart={deleteCart} />
                    )
                })}
            </ul>
            )}
            
            
        </div>
       
    </div>
  )
}

export default ProductList;
