import logo from "./logo.svg";
import "./App.css";
import logoContador from "./images/reloj.png";
import Boton from "./componentes/Boton";
import { Contador } from "./componentes/Contador";
import { useState } from "react";
function App() {
  const [numClicks, setNumclicks] = useState(0);

  const manejarClick = () => {
    setNumclicks(numClicks + 1);
  };

  const reinicirContador = () => {
    setNumclicks(0);
  };

  return (
    <div className="App">
      <div className="logo-contenedor">
        <h1 className="title-contador">Contador con React </h1>
        <img className="logo" src={logoContador} alt="logo"></img>
      </div>

      <div className="contenedor-principal">
        <Contador numClicks={numClicks} />
        <Boton
          texto={"Click"}
          EsBotondeClick={true}
          manejarClick={manejarClick}
        />

        <Boton
          texto={"Reiniciar"}
          EsBotondeClick={false}
          manejarClick={reinicirContador}
        />
      </div>
    </div>
  );
}

export default App;
