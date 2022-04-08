import style from './ListOfTasks.module.css'
import React from "react";
import {FilterType, TasksItemType} from "../../App";
import {SortButtonsBlock} from "./SortButtonsBlock/SortButtonsBlock";
import {TaskListItem} from "./TaskListItem/TaskListItem";
import {AddInput} from "../AddInput/AddInput";
import {SuperButton} from "../SuperButton/SuperButton";
import {EditableSpan} from "../EditableSpan/EditableSpan";

type ListOfTasksPropsType = {
    todoId: string,
    todoTitle: string,
    tasksState: Array<TasksItemType>,
    addNewTask: (idTodo: string, newTaskName: string) => void,
    changeFilterTodo: (idTodo: string, newFilter: FilterType) => void,
    changeStatusTask: (idTodo: string, idTask: string) => void,
    changeTitleTodo: (idTodo: string, newTitle: string) => void,
    changeTaskName: (idTodo: string, idTask: string, newTaskName: string) => void,
    deleteTask: (idTodo: string, idTask: string) => void,
    deleteTodo: (idTodo: string) => void,
}

export const ListOfTasks: React.FC<ListOfTasksPropsType> = (props) => {

    const changeFilter = (filter: FilterType) => {
        props.changeFilterTodo(props.todoId, filter);
    }
    const changeStatusTask = (idTask: string) => {
        props.changeStatusTask(props.todoId, idTask)
    }
    const changeTitleTodo = (newTitle: string) => {
        props.changeTitleTodo(props.todoId, newTitle)
    }
    const changeTaskName=(idTask: string, newTaskName: string)=>{
        props.changeTaskName(props.todoId, idTask, newTaskName)
    }
    const deleteTask = (idTask: string) => {
        props.deleteTask(props.todoId, idTask)
    }
    const addTask = (value: string) => {
        props.addNewTask(props.todoId, value);
    }
    const deleteTodo = () => {
        props.deleteTodo(props.todoId)
    }

    //Main return
    return (
        <div className={style.list__wrapper}>
            <EditableSpan
                title={props.todoTitle}
                changeTitle={changeTitleTodo}
            />
            <SuperButton buttonName={'x'} onClick={deleteTodo}/>
            <AddInput
                placeholder={'Enter your new task name...'}
                addItem={addTask}
                taskOrTodo={'Task'}
            />
            <div>
                <ul>
                    {props.tasksState.map(task => <TaskListItem
                            key={task.id}
                            taskId={task.id}
                            title={task.title}
                            taskStatus={task.isDone}
                            changeTaskName={changeTaskName}
                            changeStatus={changeStatusTask}
                            deleteTask={deleteTask}
                        />
                        )}
                </ul>
            </div>
            <SortButtonsBlock changeFilterTodo={changeFilter}/>
        </div>
    )
}