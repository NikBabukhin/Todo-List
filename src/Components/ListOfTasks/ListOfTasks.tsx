import style from './ListOfTasks.module.css'
import React from "react";
import {FilterType, TasksItemType} from "../../App";
import {SuperButton} from "../SuperButton/SuperButton";
import {SortButtonsBlock} from "./SortButtonsBlock/SortButtonsBlock";

type ListOfTasksPropsType = {
    todoId: string,
    todoTitle: string,
    tasksState: Array<TasksItemType>,
    addNewTask: (idTodo: string, newTaskName: string) => void,
    changeFilterTodo: (idTodo: string, newFilter: FilterType) => void,
    changeStatusTask: (idTodo: string, idTask: string) => void,
    changeTaskName: (idTodo: string, idTask: string, newTaskName: string) => void,
    deleteTask: (idTodo: string, idTask: string) => void,
}

export const ListOfTasks: React.FC<ListOfTasksPropsType> = (props) => {

    const changeFilter = (filter: FilterType) => {
        props.changeFilterTodo(props.todoId, filter);
    }

    //Main return
    return (
        <div className={style.list__wrapper}>
            <h3>{props.todoTitle}</h3>
            <div>
                <ul>
                    {props.tasksState.map(task => <li key={task.id}>{task.title}</li>)}
                </ul>
            </div>
            <SortButtonsBlock changeFilterTodo={changeFilter}/>
        </div>
    )
}