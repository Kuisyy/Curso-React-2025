const CardPrices = ({ guitarraImg,guitar}) => {
    return (
      <div 
      key={guitar.name} 
      className="bg-gray-100 border p-4 mt-4 rounded-lg shadow-md flex items-center ">
          <img 
          src={guitarraImg} 
          alt={guitar.name} 
          width={80} 
          className="w-20 h-20 object-cover rounded-md ml-4 mr-10"
          />
          <div>
              <h2></h2>
              <p className="text-xl text-gray-700 font-bold">{guitar.name}</p>
              <p className="text-xl text-gray-700 font-bold">{guitar.type}</p>
              <p className="text-xl text-gray-700 font-bold">{guitar.price}</p>
          </div>
      </div>
    );
  };
  
  export default CardPrices;