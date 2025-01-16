import { Timer } from "./components/useEffectsCicloVida/Timer";
import Contador from "./components/UseState/Contador";
import ContadorDoble from "./components/UseState/ContadorDoble";
import ContinuacionNumeros from "./components/UseState/ContinuacionNumeros";
import GuitarHeroe from "./components/UseState/GuitarHeroe";
import Padre from "./components/UseState/props/Padre";
import Hijo2 from "./components/UseState/props2/Hijo2";
import Nieto2 from "./components/UseState/props2/Nieto2";
import Padre2 from "./components/UseState/props2/Padre2";
import RegistrarFormulario from "./components/UseState/RegistrarFormulario";
import CardsPlaceHolder from "./components/useEffectsCicloVida/CardsPlaceHolder";
const App = () => {
  return (    
    <div className=" mx-auto bg-purple-700">
      <div className="text-3xl font-bold underline">Hola mundo!!!</div>
      {/* <Contador />
      <hr className="mt-10" />
      <ContadorDoble />
      <hr className="mt-10" />
      <ContinuacionNumeros />
      <hr className="mt-10"/>
      <RegistrarFormulario /> */}
      {/* <GuitarHeroe /> */}
      {/* <Padre /> */}
      {/* <hr className="mt-8 font-bold"></hr>
      <Padre2>
        <Hijo2>
          <Nieto2>

          </Nieto2>
        </Hijo2>
      </Padre2> */}
      <hr className="mt-8 font-bold"></hr>
      {/* <Timer /> */}
      <CardsPlaceHolder />

    </div>
  );
};

export default App;
