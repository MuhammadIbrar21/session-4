import React, { useContext } from "react";
import counterContext from "./CounterContext";

const Child = () =>{
    let counterValue = useContext(counterContext)
    console.log(counterValue)
    return(
        <div>
            <h1>This is 1st child using ContextAPI</h1>
            <h1>counter value is {counterValue[0]}</h1>
            <button onClick={
            ()=> {counterValue[1](++counterValue[0])}}>
            Increament
            </button>
        </div>
    );
}
export default Child;