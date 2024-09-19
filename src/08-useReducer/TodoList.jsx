import { TodoItem } from "./todoItem"

export const TodoList = ({todos= [], onDeleteTodo, onToggleTodo  }) => {

    return (
        <>
        <ul className="list-group"> 
            {
            todos.map(todo =>(
            // todoItem ...
                <TodoItem 
                    key={todo.id}  
                    todo={todo}  
                    onDeleteTodo = { id=> onDeleteTodo(id)}
                    onToggleTodo = { id=> onToggleTodo(id) }
                />
            // fin del todoItem
            ))
            }
        </ul>
        </>
    )
}