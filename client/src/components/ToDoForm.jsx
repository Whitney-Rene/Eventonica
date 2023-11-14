//USEREDUCER PRACTICE

import React, { useState, useReducer } from 'react';
import ToDoButtons from './ToDoButtons';

export const ACTIONS = {
    ADD_TODO: 'add-todo',
    TOGGLE_TODO: 'toggle-todo',
    DELETE_TODO: 'delete-todo'
}

//reducer function, the only things we can do to our state is increment or decrement it
function reducer(todos, action){
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...todos, newTodo(action.payload.name)]
        case ACTIONS.TOGGLE_TODO:
            return todos.map(todo => {
               if(todo.id === action.payload.id) {
                return {...todo, complete: !todo.complete }
               } 
               return todo
            })
        case ACTIONS.DELETE_TODO:
        return todos.filter(todo => todo.id !== action.payload.id)
        default:
            return todos
    }
}

    function newTodo(name) {
        return {id: Date.now(), name: name, complete: false}
    }
        
    // return { count: state.count + 1};  simple example
function ToDoForm () {

    const [todos, dispatch] = useReducer(reducer, []);
    const [name, setName ] = useState('');

    function handleSubmit (e) {
        e.preventDefault();
        dispatch({ type: ACTIONS.ADD_TODO, payload: {name: name}});
        setName('');
    }

    console.log(todos);

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label style={{color: 'white', fontSize: '20px'}}>To Do List:</label>
                <input type='text' value={name} onChange={e => setName(e.target.value)}></input>
            </form>
           {todos.map(todo => {
            return <ToDoButtons key={todo.id} todo={todo} dispatch={dispatch}/> 
           })} 
        </>
    )

}

export default ToDoForm;