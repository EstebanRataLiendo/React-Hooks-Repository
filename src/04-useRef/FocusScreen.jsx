import { useRef } from "react"

export  const FocusScreen = () => {

    const inputRef = useRef();

    const onClickBtn = () => {
        console.log(inputRef)
        inputRef.current.select();
        // document.querySelector('input').select() //en vez de select podes poner focus 
    }

  return (
    <>
        <h1>Focus Screen</h1>
        <hr />
        <input 
            ref = {inputRef}
            type="text" 
            placeholder="Ingrese nombre"
            className="form-control"
        />
        <button 
            className="btn btn-success mt-4" 
            onClick={onClickBtn}
        >
            Set Focus
        </button>
    </>
  )
}


