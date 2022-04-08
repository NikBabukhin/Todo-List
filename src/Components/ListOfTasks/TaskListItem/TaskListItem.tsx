import style from './TaskListItem.module.css'
import React from "react";
import {EditableSpan} from "../../EditableSpan/EditableSpan";
import {SuperButton} from "../../SuperButton/SuperButton";

type TaskListItemPropsType = {
    taskId: string,
    title: string,
    taskStatus: boolean,
    changeTaskName: (taskId:string, newTitle:string)=>void,
    changeStatus: (taskId: string) => void,
    deleteTask: (taskId: string) => void,
}

export const TaskListItem: React.FC<TaskListItemPropsType> = (props) => {

    const changeStatus = () => {
        props.changeStatus(props.taskId)
    }
    const deleteTask = () => {
        props.deleteTask(props.taskId)
    }
    const changeTaskName=(newTitle:string)=> {
        props.changeTaskName(props.taskId, newTitle)
    }

    return (
        <li className={style.list__wrapper}>
            <input
                type={'checkbox'}
                checked={props.taskStatus}
                onChange={changeStatus}
            />
            <EditableSpan
                title={props.title}
                changeTitle={changeTaskName}
            />
            <SuperButton buttonName={'x'} onClick={deleteTask}/>
        </li>
    )
}