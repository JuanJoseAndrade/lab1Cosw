import React from 'react';
import {Todo} from './Todo'

export class TodoList extends React.Component {

    constructor(props) {
      super(props);
	  
    }   

    render() {
        return (  
          //Add your code here to represent a TODO
		  <TodoListFunc todos={this.props.todos}/>
        );
		
    }

}
function TodoListFunc(props) {
  const todosa = {props.todos}
  const listItems = todos.map((todo,i) =>
    <li key={todo.toString()+i}>
      {todo}
    </li>
  )
  return (
    <ul>{listItems}</ul>
  );
}