import { BarLoader } from "react-spinners";
import { useProducts } from "../context/ProductContext";

const ProductList = () => {
  const { products, isLoading, error } = useProducts();

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <BarLoader />
      </div>
    );
    if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Lista de Productos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products?.map((product) => (
          <div key={product._id} className="border rounded-lg shadow-md p-4">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600 text-sm">{product.description}</p>
            <p className="text-green-600 font-bold">${product.price.toFixed(2)}</p>
            <p className="text-gray-500">Stock: {product.stock}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
