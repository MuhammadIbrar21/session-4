import React, { useReducer } from "react";
import counterReducer from "./CounterReducer";

const Child2 = () =>{

    let [state, dispatch] = useReducer(counterReducer, 1);
    console.log(state);

    return(
        <div>
            <h1>This is 2nd child using Reducer</h1>
            <h1>Value of Reducer state is: {state}</h1>
            <button onClick={()=> dispatch('INCREMENT')}>
                Increment Reducer 
            </button>
        </div>
    )
}

export default Child2;