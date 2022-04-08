import style from './ListOfTasks.module.css'
import React from "react";
import {FilterType, TasksItemType} from "../../App";

type ListOfTasksPropsType = {
    todoId:string,
    todoTitle:string,
    tasksState: Array<TasksItemType>,
    addNewTask: (idTodo: string, newTaskName: string) => void,
    changeFilterTodo: (idTodo: string, newFilter: FilterType) => void,
    changeStatusTask: (idTodo: string, idTask: string) => void,
    changeTaskName: (idTodo: string, idTask: string, newTaskName: string) => void,
    deleteTask: (idTodo: string, idTask: string) => void,
}

export const ListOfTasks:React.FC<ListOfTasksPropsType>=(props)=> {
    return (
        <div className={style.list__wrapper}>
            <h3>{props.todoTitle}</h3>
            <div>
                <ul>
                    {props.tasksState.map(task=><li key={task.id}>{task.title}</li>)}
                </ul>
            </div>
        </div>
    )
}