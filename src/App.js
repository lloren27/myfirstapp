import React, { Component } from 'react';
import logo from './logo.svg'; // importas el logo que gira
import './App.css'; // importas los estilos

//import Navigation from './components/navigation';
// tengo que incluir los tag para que interprete el componente
// tengo que importar el compnente de su carpeta o lugar
// esto me permite poner el componente todas las veces que necesite
import { todos } from  './todos.json';
import TodoForm from './components/TodoForm';

class App extends Component {
// para almacenar los datos en memoria necesitamos de un constructor , esto es un metodo que se ejecuta cndo se crea el componentes
// se ejecuta antes que el render
constructor(){
  super();
  // con super heredas tdas las funcionalidades de React
  //state debe ser lo mas sencillo posible porque es lo que almacena en memoria.
  this.state = {
    todos
  }
  this.añadirTareas = this.añadirTareas.bind(this)
 // asi paso info del back al front
}
añadirTareas(todo){
    this.setState({
       todos:[...this.state.todos, todo]
    })
}
/////como vas a eliminar tareas seleccionadas debes recibir un index ,
/// este metodo tienes que incluirlo en un boton  
/// Como siempre si lo dejamos normal perderemos el scope y no reconoceria el state
/// puedes incluirlo arriba o incluir el bind this en el Onclick y además el indice esta incluido el el map como indice i
/// los arreglos estan incluidos en this setState por forman parte de los todos
/// utilizamos el metodo filter para recomponer array , se añaden los nuevos elementos segun el nuevo criterio
/// el criterio es que debe incluir en el nuevo array todos los datos que tengan un indice distinto al que hemos pulsado para eliminar.
eliminarTareas (index) {
  if (window.confirm(" ¿Estas seguro de que quieres eliminar la tarea? ")){
    this.setState ({
      todos: this.state.todos.filter((e, i)=>{
        return i !== index
      })
  })
  }
}

  render() {
    // crear un componente o interfaz antes de mostrar los datos , creando multiples tareas para cada tarjeta
    // guardar en una constante para poder mostrarlos despues del return del render.
    // he añadido la key ={i} ya que en react siempre que hagamos un map para mostrar los elementos de un array 
    // hay q ponerle una key que debe ser individual para cada elemento del array.
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className= "col-md-4" key={i}>
          <div className="card mt-4">
            <div className="card-header">
              <h3>{todo.titulo}</h3>
              <span className="badge badge-pill badge-danger ml 2">
              {todo.prioridad}
              </span>
            </div>
            <div className="card-body">
              <h5>{todo.descripcion}</h5>
              <p>{todo.responsable}</p>
            </div >
            <div className="card-footer">
            <button className="btn btn-danger" onClick={this.eliminarTareas.bind(this,i)}>Borrar tarea</button>
            </div>
          </div>
        </div>
      )
  })

    return (
    <div className="App">
        <nav className="navbar navbar-sark bg-dark">
          <a href="" className="text-white">
            Tareas
            <span className="badge badge-pill badge-primary ml-2">
              {todos.length}</span>
          </a>
        </nav>

      <div className= "container">
        <div className= "row mt-4">
              <div className= "col-md-3">
                <img src={logo} className="App-logo" alt="logo" />
                <TodoForm añadirTodo={this.añadirTareas}/>
              </div>
              <div className="col-md-9">
                <div className="row">
                { todos }
              </div>
            </div>
        </div>
      </div>

  </div>
    );
  }
}

export default App;
