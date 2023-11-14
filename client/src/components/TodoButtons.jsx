import React from 'react';
import {ACTIONS} from "./ToDoForm";

function ToDoButtons({todo, dispatch}) {
  return (
    <div>
        <span style={{color: todo.complete ? 'pink' : '#000'}}>
            {todo.name}
        </span>
        <button onClick={() => dispatch ({type: ACTIONS.TOGGLE_TODO, payload: {id: todo.id}})}>Toggle</button>
        <button onClick={() => dispatch ({type: ACTIONS.DELETE_TODO, payload: {id: todo.id}})}>Delete</button>
    </div>
  )
}

export default ToDoButtons

//rfc shift = creates a function comnponent
//ES7 React/Redux/GraphQL/React-Native snippets


