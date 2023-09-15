//USEREDUCER PRACTICE

import React, { useState, useReducer } from 'react';

//reducer function, the only things we can do to our state is increment or decrement it
function reducer(state, action){
    switch(action.type) {
        case 'increment':
            return { count: state.count + 1};
        case 'decrement': 
            return { count: state.count - 1};
        default:
            return state
    }
        
    // return { count: state.count + 1};  simple example
}
function Button () {
    //manage state with useState and useReducer=handle complex state
    //will normally use an object, bc the state is more complex
    const [state, dispatch] = useReducer(reducer, { count: 0})
    // const [count, setCount] = useState(0);

    function increment () {
        dispatch( {type: 'increment'})
        // setCount(prevCount => prevCount + 1);
    }

    function decrement () {
        dispatch( {type: 'decrement'})
        // setCount(prevCount => prevCount - 1);
    }
    return(
        <>
        <button onClick={decrement}>-</button>
        <span>{state.count}</span>
        <button onClick={increment}>+</button>
        </>
    )

}

export default Button;