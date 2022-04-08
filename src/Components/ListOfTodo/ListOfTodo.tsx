import {TodoListType} from "../../App";
import React from "react";

type ListOfTodoPropsType = {
    todoState: Array<TodoListType>,
    addNewTodoList: (idTodo: string, newTitle: string) => void,
    changeTitleTodo: (idTodo: string, newTitle: string) => void,
    deleteTodo: (idTodo: string) => void,
}

export const ListOfTodo: React.FC<ListOfTodoPropsType> = (props) => {
    return (
        <div>
            <h3>Hello, your todo list is here:</h3>
            <div>
                <ul>
                    {props.todoState.map(todo=> <li key={todo.id}>{todo.title}</li>)}
                </ul>
            </div>
        </div>
    )
}