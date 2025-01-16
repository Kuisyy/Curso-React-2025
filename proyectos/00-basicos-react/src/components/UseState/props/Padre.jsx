import { useState } from "react"
import Hijo from "./Hijo";

const Padre = () => {
    const [counter, setCounter] = useState(0);
    
    function handleClick() {
        setCounter(counter+1)
    }
  return (
    <>
    <div>Hola soy tu padre</div>
    <p>Counter: {counter}</p>
    <Hijo counter={counter} handleClick={handleClick} />
    
    </>
  )
}

export default Padre