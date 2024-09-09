import React, { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";


export const CallbackHook = React.memo (({increment}) => {

    const [counter, setCounter ] = useState(10);

    const incrementF = useCallback(
        (value) => {
            setCounter((c)=>c +value)
        }, 
        []
    )

    // const incrementF = () => {
    //     setCounter(counter +1)
    // }

  return (
    <>
        <h1>useCallback Hook: {counter} </h1>
        <hr />
        <ShowIncrement increment={incrementF} />
    </>
  )
})
