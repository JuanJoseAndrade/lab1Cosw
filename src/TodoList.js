import React from 'react';
import {Todo} from './Todo';


 export function TodoList(props) {
  var todos = props.todolist;
  console.log("aiuuda");
  console.log( JSON.stringify(todos));
  const listItems = todos.map((todo,i) =>
    <li key={todo.text+i}>
      <Todo text={todo.text} priority={todo.priority} dueDate={todo.dueDate}/>
    </li>
  );
  console.log( (listItems[0]));
  return (
    <ul>{listItems}</ul>
  );
}
