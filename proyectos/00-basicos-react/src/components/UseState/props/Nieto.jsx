const Nieto = (props) => {
    const {counter, handleClick} = props;
  
  return (
    <>
    <div>Hola yo soy tu nieto</div>
    <p>Contador: {counter}</p>
    <button onClick={handleClick} className="bg-green-500 rounded-lg text-white px-2 py-5 mb-5 mt-6 hover:bg-slate-900">
        Aumento del contador desde nieto 
    </button>
    </>
  )
}

export default Nieto