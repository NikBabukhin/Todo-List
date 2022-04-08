import React, {useState} from 'react';
import style from './App.module.css';
import {v1} from "uuid";
import {ListOfTasks} from "./Components/ListOfTasks/ListOfTasks";
import {ListOfTodo} from "./Components/ListOfTodo/ListOfTodo";

export type FilterType = 'all' | 'active' | 'completed';
export type TodoListType = {
    id: string,
    title: string,
    filter: FilterType,
}
export type TasksItemType = {
    id: string,
    title: string,
    isDone: boolean,
}
type TasksListType = {
    [key: string]: Array<TasksItemType>
}

function App() {
    //Helper variables
    const todoId1 = v1();
    const todoId2 = v1();
    //States
    const [todoListState, setTodoListState] = useState<Array<TodoListType>>([
        {id: todoId1, title: 'What to know', filter: 'all'},
        {id: todoId2, title: 'What want to know', filter: 'all'},
    ]);
    const [tasksListState, setTasksListState] = useState<TasksListType>({
        [todoId1]: [
            {id: v1(), title: 'HTML', isDone: true},
            {id: v1(), title: 'CSS', isDone: true},
            {id: v1(), title: 'JS Basics', isDone: false},
            {id: v1(), title: 'TS Basics', isDone: false},
        ],
        [todoId2]: [
            {id: v1(), title: 'React', isDone: true},
            {id: v1(), title: 'Redux', isDone: false},
            {id: v1(), title: 'JS Objects', isDone: true},
            {id: v1(), title: 'TS Types', isDone: false},
        ],
    });

    //Functions ListOfTasks
    const addNewTodoList = (idTodo: string, newTitle: string) => {
        setTodoListState([...todoListState, {id: idTodo, title: newTitle, filter: 'all'}])
    };
    const changeFilterTodo = (idTodo: string, newFilter: FilterType) => {
        setTodoListState(todoListState.map(el => el.id === idTodo ? {...el, filter: newFilter} : el))
    };
    const changeTitleTodo = (idTodo: string, newTitle: string) => {
        setTodoListState(todoListState.map(todo => todo.id === idTodo ? {...todo, title: newTitle} : todo))
    }
    const deleteTodo = (idTodo: string) => {
        const newTasks = {...tasksListState};
        delete newTasks[idTodo];
        setTasksListState(newTasks);
        setTodoListState(todoListState.filter(el => el.id !== idTodo));
    };

    //Functions TasksList
    const addNewTask = (idTodo: string, newTaskName: string) => {
        setTasksListState({
            ...tasksListState,
            [idTodo]: [{id: v1(), title: newTaskName, isDone: false}, ...tasksListState[idTodo]]
        })
        setTodoListState([...todoListState])
    };
    const changeStatusTask = (idTodo: string, idTask: string) => {
        setTasksListState({
            ...tasksListState, [idTodo]: tasksListState[idTodo].map(task => {
                return task.id === idTask ? {...task, isDone: !task.isDone} : task;
            })
        })
        setTodoListState([...todoListState]);
    };
    const changeTaskName = (idTodo: string, idTask: string, newTaskName: string) => {
        setTasksListState({
            ...tasksListState, [idTodo]: tasksListState[idTodo].map(task => {
                return task.id === idTask ? {...task, title: newTaskName} : task;
            })
        })
        setTodoListState([...todoListState])
    };
    const deleteTask = (idTodo: string, idTask: string) => {
        setTasksListState({...tasksListState, [idTodo]: tasksListState[idTodo].filter(task => task.id !== idTask)});
        setTodoListState([...todoListState]);
    };

    //FilteredTasks
    const setTodoForRender = () => {
        let todoForRender = todoListState.map(todo => {
            let tasksForRender = tasksListState[todo.id]
            if (todo.filter === 'active') {
                tasksForRender = tasksListState[todo.id].filter(task => !task.isDone)
            }
            if (todo.filter === 'completed') {
                tasksForRender = tasksListState[todo.id].filter(task => task.isDone)
            }
            return (
                <div key={todo.id} className={style.wrapper__list__main}>
                    <ListOfTasks
                        todoId={todo.id}
                        todoTitle={todo.title}
                        tasksState={tasksForRender}
                        addNewTask={addNewTask}
                        changeFilterTodo={changeFilterTodo}
                        changeStatusTask={changeStatusTask}
                        changeTaskName={changeTaskName}
                        deleteTask={deleteTask}
                    />
                </div>
            )
        });
        return todoForRender
    }

    //Main return
    return (
        <div className={style.App}>

            <div className={style.wrapper__list__main}>
                <ListOfTodo
                    todoState={todoListState}
                    addNewTodoList={addNewTodoList}
                    changeTitleTodo={changeTitleTodo}
                    deleteTodo={deleteTodo}
                />
            </div>
            {setTodoForRender()}
        </div>
    );
}

export default App;
