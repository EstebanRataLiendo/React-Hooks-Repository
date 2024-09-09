import { useCounter } from '../hooks/useCounter.js'

export const CounterWithCustomHook = () => {

    const {counter, increment, decrement, reset} = useCounter()
    console.log(counter)

    return (
        <>
            <h1>Counter with Custom Hook: {counter} </h1>
            <hr />
            <button className="btn btn-primary" onClick={()=> increment(2)}>+1</button>
            <button className="btn btn-primary" onClick={()=> reset()}>Reset</button>
            <button className="btn btn-primary" onClick={()=> decrement(5)}>-1</button>
        </>
    )
}

