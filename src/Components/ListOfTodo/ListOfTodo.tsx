import {TodoListType} from "../../App";
import React from "react";
import {AddInput} from "../AddInput/AddInput";
import {EditableSpan} from "../EditableSpan/EditableSpan";
import {SuperButton} from "../SuperButton/SuperButton";

type ListOfTodoPropsType = {
    todoState: Array<TodoListType>,
    addNewTodoList: (newTitle: string) => void,
    changeTitleTodo: (idTodo: string, newTitle: string) => void,
    deleteTodo: (idTodo: string) => void,
}

export const ListOfTodo: React.FC<ListOfTodoPropsType> = (props) => {

    const addNewTodoList = (value: string) => {
        props.addNewTodoList(value)
    }
    const deleteTodoList = (todoId: string) => {
        props.deleteTodo(todoId)
    }


    return (
        <div>
            <h3>Hello, your todo list is here:</h3>
            <AddInput
                placeholder={'Enter your new todo name'}
                taskOrTodo={'Todo'}
                addItem={addNewTodoList}
            />
            <div>
                <ul>
                    {props.todoState.map(todo => {
                        const changeTitleTodo = (newTitle: string) => {
                            props.changeTitleTodo(todo.id, newTitle)
                        }
                        return (
                            <li key={todo.id}>
                                <EditableSpan
                                    title={todo.title}
                                    changeTitle={changeTitleTodo}
                                />
                                <SuperButton buttonName={'x'} onClick={() => deleteTodoList(todo.id)}/>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}