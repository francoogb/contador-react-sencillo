import React from 'react'
import '../css/boton.css'
function  Boton ({texto,EsBotondeClick, manejarClick}) {
  return (
    <button 
    className={ EsBotondeClick ? "boton-click" : "boton-reiniciar" } onClick={manejarClick}>
        {texto}
    </button>
)
}

export default Boton;