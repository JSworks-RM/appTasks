import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Data
import { todos } from './todos.json'

// Subcomponents
import TodoFrom from './Components/TodoForm'

class App extends Component {
  constructor () {
    super ();
    this.state = {
      todos
    }

    this.handlerAddTodo = this.handlerAddTodo.bind(this)
  }

  handlerAddTodo (todo) {
    this.setState({
      todos: [ ...this.state.todos, todo ]
    })
  }

  removeTodo (index) {
    if ( window.confirm('Are you sure you want to delete it?') ) {
      this.setState({
        todos: this.state.todos.filter((e, i) => {
          return i !== index
        }) 
      })
    }
  }

  render () {
    const todos = this.state.todos.map(( todo, i ) => {
      return (
        <div className="col-md-4 text-center" key={i}>
          <div className="card mt-4">
            <div className="card-title">
              <h3>{todo.title}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                {todo.priority}
              </span>
            </div>
            <div className="card-body text-center">
              <p>{todo.description}</p>
              <mark>{todo.responsible}</mark>
            </div>
            <div className="card-footer">
              <button
                 className="btn btn-danger"
                 onClick={this.removeTodo.bind(this, i)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )
    }) 

    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <a href="/" className="text-white">
            Tasks
            <span className="badge badge-pill badge-light ml-2">
              {this.state.todos.length}
            </span>
          </a>
        </nav>

        <div className="container">
          <div className="row mt-4">
            <div className="col-md-3 text-center">
              <img src={logo} className="App-logo" alt="logo" />
              <TodoFrom onAddTodo={ this.handlerAddTodo } />              
            </div>
            <div className="col-md-9">
              <div className="row">
                {todos}
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default App;
