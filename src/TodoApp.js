import React from 'react';
import {TodoList} from './TodoList.js';
import logo from './logo.svg';
class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '',priority:''};
    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          App de juan
        </p>
        <TodoList todolist={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            Que tarea toca realizar?
          </label>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <br></br>
          <label htmlFor="new-todo2">
            Cual es la prioridad?
          </label>
          <input
            id="new-todo"
            onChange={this.handleChange2}
            value={this.state.priority}
          />
          <br></br>
          <button>
            Add #{this.state.items.length + 1}
          </button>
        </form>
        </header>
      </div>

    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });

  }
  handleChange2(e) {
    this.setState({ priority: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!

    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    var today = dd + '/' + mm + '/' + yyyy;
    const newItem = {
      text: this.state.text,
      dueDate: today,
      priority:this.state.priority
    };
    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      text: ''
    }));
  }
}
export default TodoApp;
