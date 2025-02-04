import React from "react";
import logoContador from "./images/reloj.png";
import "./App.css";
import Boton from "./componentes/Boton";
import Contador from './componentes/Contador'; // Correcto

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      numClicks: 0
    };
    this.manejarClick = this.manejarClick.bind(this);
    this.reiniciarContador = this.reiniciarContador.bind(this); // Corregido
  }

  manejarClick() {
    this.setState(({ numClicks }) => ({ numClicks: numClicks + 1 }));
  }

  reiniciarContador() {
    this.setState({ numClicks: 0 }); // Corregido
  }

  render() {
    return (
      <div className="App">
        <div className="logo-contenedor">
          <h1 className="title-contador">Contador con React </h1>
          <img className="logo" src={logoContador} alt="logo"></img>
        </div>

        <div className="contenedor-principal">
          <Contador numClicks={this.state.numClicks} />
          <Boton
            texto={"Click"}
            EsBotondeClick={true}
            manejarClick={this.manejarClick}
          />

          <Boton
            texto={"Reiniciar"}
            EsBotondeClick={false}
            manejarClick={this.reiniciarContador} // Corregido
          />
        </div>
      </div>
    );
  }
}

export default App;
