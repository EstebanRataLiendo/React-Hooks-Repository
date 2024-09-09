import { useMemo, useState } from "react"
import { useCounter } from "../hooks"

const heavyStuff = (iterationNumber = 100) => {
    for (let i = 0; i < iterationNumber; i++) {
        console.log('ahí vamos...');
    }
    return `${iterationNumber} iteraciones realizadas`
}

export const MemoHook = () => {

    const  {counter, increment} = useCounter(4000)

    const [show,setShow] = useState(true)

    // graba el valor memorizado de todo el proceso de la función heavtStaff con counter de variable y si el [counter] se modifica, se vuelve a grabar
    //sirve para evitar que se ejecute todo si cambio el state
    const memomrizedValue = useMemo (()=> heavyStuff(counter), [counter])

  return (
    <>
        <h1>Counter: <small> {counter} </small></h1>
        <hr />

        <h4> {memomrizedValue} </h4>

        <button
            className="btn btn-primary"
            onClick={()=> increment()  }
        >
            +1
        </button>
        <button
            className="btn btn-primary"
            onClick={()=> setShow(!show)  }
        >
            Show/Hide {JSON.stringify(show)}
        </button>
    </>

  )
}


