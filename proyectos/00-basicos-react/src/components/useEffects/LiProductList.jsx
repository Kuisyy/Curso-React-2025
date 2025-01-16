const LiProductList = (props) => {
    const {product, key, deleteCart}= props;

    const handleDelete = ()=>{
        deleteCart(product);
    }
  return (
    <li key={key} className="bg-gray-100 shadow-lg rounded-lg p-6 flex flex-col justify-between mb-10">
        <span>{product.name}</span>
        <span>{product.price}</span>
        <button onClick={handleDelete} className="bg-red-600">Eliminar</button>
        </li>
  )
}

export default LiProductList;
