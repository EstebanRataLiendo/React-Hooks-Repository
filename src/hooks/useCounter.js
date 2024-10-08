import { useState } from "react";

export const useCounter = (initialValue = 1 ) => { 

    const [counter, setCounter] = useState(initialValue);

    const increment = (value = 1) => {
        setCounter(counter + value)
    }

    const decrement = (value= 1) => {
        if (counter <=0) return;
        setCounter(counter - value)
    }

    const reset = (value = initialValue) => {
        setCounter(value)
    }

    const final = (value = 1025) => {
        setCounter(value)
    }

    const inicio = (value = 1) => {
        setCounter(value)
    }

    return {
        counter,
        increment,
        decrement,
        reset,
        final,
        inicio
    }
}