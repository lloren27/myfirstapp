import React, {Component} from 'react';

class TodoForm extends Component {
  constructor(){
  super ();
  this.state = {
    titulo: '',
    responsable: '',
    descripcion: '',
    prioridad:'baja'
  };
  this.handleInput = this.handleInput.bind(this)
  this.handleSubmit = this.handleSubmit.bind(this)
}

handleInput(e){
  const { value , name } = e.target;
  this.setState({
    [name]:value
  })
}
handleSubmit(e){
  e.preventDefault();
  this.props.añadirTodo(this.state);
}
  render(){
    return (
      <div className="card">
        <form className="card-body" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input type="text" name="titulo" className="form-control" placeholder="titulo" onChange={this.handleInput}/>
          </div>
          <div className="form-group">
            <input type="text" name="responsable" className="form-control" placeholder="responsable" onChange={this.handleInput}/>
          </div>
          <div className="form-group">
            <input type="text" name="descripcion" className="form-control" placeholder="descripcion" onChange={this.handleInput}/>
          </div>
          <div className="form-group">
            <select name="prioridad" className="form-control" onChange={this.handleInput}>
              <option>Alta</option>
              <option>Media</option>
              <option>Baja</option>
            </select>
          </div>
          <div className="form-group">
            <button type="button" className="btn btn-primary"> Guardar </button>
            </div>
        </form>
      </div>
    )
  }
}

export default TodoForm
