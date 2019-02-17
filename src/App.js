import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoList} from './TodoList.js';
const todos = [{text:"Learn React", priority:5, dueDate: new Date() },
{text:"Learn about APIs", priority:4, dueDate: new Date(2018,8,30) },
{text:"write TODO App", priority:3, dueDate: new Date(2018,9,30) }];
class App extends Component {

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            App de juan
          </p>
          <TodoList todolist={todos}/>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
             TODO React App
          </a>
        </header>

      </div>
    );
  }
}

export default App;
