import Nieto from "./Nieto"

const Hijo = (props) => {
    const {counter,handleClick} = props;

   
  return (
    <>
    <div>Hola yo soy tu hijo</div>
    <p>El contador vale: {counter}</p>
    <Nieto counter={counter} handleClick={handleClick} />
    <button onClick={handleClick} className="bg-blue-500 rounded-lg text-white px-2 py-5 mb-5 mt-6 hover:bg-slate-900">
        Aumento del contador desde hijo 
    </button>
    </>
  )
}

export default Hijo