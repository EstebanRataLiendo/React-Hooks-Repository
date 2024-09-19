import { TodoList } from "./TodoList"
import { TodoAdd } from "./TodoAdd"
import { useTodo } from "../hooks/useTodo"

// useReducer retorna el valor inicial y lo graba en el estado "todos".
//En la app, retornamos el TodoList con la propiedad igual al estado "todos".
// Dentro del TodoList, toma el estado de "todos" como parametro y retornamos...
//... una lista mapeando el "todos" poniendo como variable el "todo" y por cada item mapeado, ejecutamos...
//... el "TodoItem", le damos una key a cada elemento de la lista y la propiedad igual al estado "todo"
//En el "TodoItem" renderizamos cada item de la "li" tomando el parametro desestructurado todo y...
//... con ese parametro extraemos la descripcion para ponerlo como nombre del item


export const TodoApp = () => {

  const {todos,todosCount, pendingTodosCount, handleDeleteTodo, handleNewTodo, handleToggleTodo} = useTodo()

  return (
    <>
        <h1>TodoApp: {todosCount}, <small>pendientes: {pendingTodosCount} </small></h1>
        <hr />
        <div className="row">
          <div className="col-7">
            {/* todoList */}
            < TodoList 
              todos={todos} 
              onDeleteTodo = { id=> handleDeleteTodo(id)} 
              onToggleTodo = { id=> handleToggleTodo(id)} 
            />
            {/* fin del todoList */}
          </div>

          <div className="col-5">
            <h4>Agregar TODO</h4>
            <hr />
            {/* todoAdd onNewTodo (todo) */} 
            {/* {id: New Date()..., description:'', done: false } */}
            <TodoAdd onNewTodo={handleNewTodo} />
            {/* fin del formulario y del todoAdd */}
          </div>
        </div>
    </>
  )
}


