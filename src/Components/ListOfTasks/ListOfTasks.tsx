import style from './ListOfTasks.module.css'
import React from "react";
import {FilterType, TasksItemType} from "../../App";
import {SortButtonsBlock} from "./SortButtonsBlock/SortButtonsBlock";
import {TaskListItem} from "./TaskListItem/TaskListItem";

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
    const changeStatusTask=(idTask: string)=> {
        props.changeStatusTask(props.todoId, idTask)
    }
    const deleteTask=(idTask:string)=>{
        props.deleteTask(props.todoId, idTask)
        console.log('done', props.todoId, idTask)
    }

    //Main return
    return (
        <div className={style.list__wrapper}>
            <h3>{props.todoTitle}</h3>
            <div>
                <ul>
                    {props.tasksState.map(task => <TaskListItem
                        key={task.id}
                        taskId={task.id}
                        title={task.title}
                        taskStatus={task.isDone}
                        changeStatus={changeStatusTask}
                        deleteTask={deleteTask}
                    />)}
                </ul>
            </div>
            <SortButtonsBlock changeFilterTodo={changeFilter}/>
        </div>
    )
}