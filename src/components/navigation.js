import React, {Component} from 'react';

class Navigation extends Component {
  render(){ // todos los componentes tienen que tener un metodo render que devuelva algo
    return ( // retorna un HTML // le vas a pasar una propiedad por llaves para que los nav sean dinamicos.
      //this.props nos deja entrar en las propiedades del Navigation y tener un titulo distinto para cada una
      <nav className="navbar navbar-dark bg-dark">
      <a href="" className="text-white">
      { this.props.titulo }
      </a>
      </nav>
    )

  }
}

export default Navigation; // es imprescindible exportarlo para poner utilizarlo en otro sito.
