import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'rakata',
        email: 'rakatax@gmail.com',
    });

    const {username, email} = formState

    const onInputChange = ({target}) => {
        const {name, value} = target
        setFormState({
            ...formState,
            [name]: value
        })
    }
    useEffect(()=> {
        console.log('useEffect Called')
    }, [] );
    //cuando se dispara un array vacio solo se dispara una sola vez cuando nuestro componente se renderiza

    useEffect(()=> {
        // console.log('formState Changed')
    }, [formState] );
    //se dispara cuando cambia el formulario

    useEffect(()=> {
    // console.log('email Changed')
}, [email] );
    //se dispara cuando cambia el email

    useEffect(()=> {
        // console.log('email Changed')
    }, [email] );

    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />
            <input 
            type="text"
            className="form-control"
            placeholder="Username"
            name="username" 
            value={username}
            onChange= {onInputChange}
            />
            <hr />
            <input 
            type="email"
            className="form-control mt-2"
            placeholder="username@gmail.com"
            name="email" 
            value={email}
            onChange= {onInputChange}

            />
            {
                username === "rakatax" && <Message/>
            }
            
        </>

    )
}
