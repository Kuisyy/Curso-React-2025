import { useEffect, useState } from "react";

export const Timer = () => {
    const [counter, setCounter] = useState(0);
    const [counter2, setCounter2] = useState(0);
    // useEffect(() => {
    //     //NUNCA USAR ASYNCAWAIT DENTRO DE USEEFFECT
    //     console.log("componente montado");
    // });

    // useEffect(() => {
    //     //NUNCA USAR ASYNCAWAIT DENTRO DE USEEFFECT
    //     console.log("componente montado solo una vez");
    // },[]);

    useEffect(() => {
        //NUNCA USAR ASYNCAWAIT DENTRO DE USEEFFECT
        console.log("componente montado cada vez que se modifica algo del array de dependencias");
    },[counter]);


  return (
    <>
    <div>Timer</div>
    <p>Counter: {counter}</p>
    <p>Counter: {counter2}</p>
    <button onClick={()=> setCounter(counter+1)}>Iniciar</button>
    <br /><br />
    <button onClick={()=> setCounter2(counter2+1)}>Iniciar 2</button>

    </>
  )
}
