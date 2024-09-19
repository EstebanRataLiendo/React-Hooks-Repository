//se ejecuta diractamente en el main
console.log('hola mundo')

//estado inicial
const initialState = [{
    id: 1,
    todo: 'Seleccionar inicial',
    done: false, 
}]

//no puede ser asyncrono
//no puede tener funciones dentro de el ni disparar efectos secundarios
//no podemos mutar el arreglo, debemos cambiar el estado
//Mandamos nuestro estado incial al reducer
const toDoReducer = (state= initialState, action = {}) => {
//condición si la acción es igual al type que pusimos entonces retoruna todo el estado anterior más el payload que es el nuevo toDo
    if (action.type === '[TODO] add todo'){
        return [...state, action.payload]
    }

    //siempre debe retornar un estado
    return state;
}

//creamos constante para guardar el estado de la función
let toDos = toDoReducer();

//creamos constante que agregará nuevo object al estado
const newToDo = {
    id: 2,
    todo: 'Ganar el primer Gimnasio',
    donde: false,
}

//va a ser la action que le daremos
const addTodoAction= {
    type: '[TODO] add todo',
    payload: newToDo,
}

//actualiza el state con la action
toDos = toDoReducer(toDos, addTodoAction)

//ESTO MUTA EL ESTADO Y NO SE PUEDE
// toDos.push({
//     id: 2,
//     todo: 'Ganar el primer Gimnasio',
//     donde: false,
// })

console.log(toDos)