import { useEffect, useState } from "react";


export const Message = () => {

    const [coords, setCoords] = useState({x: 0, y:0});
        
    useEffect(() => {
        const onMouseMove = ({ x, y }) => {
s
            setCoords({x, y })
        }
        window.addEventListener('mousemove', onMouseMove)
        //esto se ejecuta cuando se active el componente
        //el event listener existirá hasta que lo eliminemos por mas que se desactive el componente
        return()=>{
        window.removeEventListener('mousemove', onMouseMove)
        //esto se ejecuta cuando se desactive el componente
        //acá desactivamos el event listener para no ocasionar errores
        }
    }, []);
    return (
        <>
            <h3>
                {JSON.stringify(coords)}
            </h3>
        </>
    );
}
