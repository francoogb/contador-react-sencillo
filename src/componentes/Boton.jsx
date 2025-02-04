import React from 'react'
import '../css/boton.css'


class Boton  extends React.Component {
  render () {
    return (
      <button 
      className={ this.props.EsBotondeClick ? "boton-click" : "boton-reiniciar" } onClick={this.props.manejarClick}>
          {this.props.texto}
      </button>
  )
  }
}


export default Boton;