import React from 'react';

export function Todo(props){
  return (
    <li>
      {'tarea: '+props.text+', prioridad: '+props.priority+', hora: '+props.dueDate}

     </li>
    );
}
