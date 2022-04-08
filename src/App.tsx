import React from 'react';
import style from './App.module.css';
import {TodoList} from "./Components/TodoList/TodoList";

function App() {

    const todoLists = {}

    return (
        <div className={style.App}>

            <div className={style.wrapper__list__main}>
                todolist
            </div>

            <div className={style.wrapper__list__main}>
                <TodoList/>
            </div>
            <div className={style.wrapper__list__main}>
                <TodoList/>
            </div>
            <div className={style.wrapper__list__main}>
                <TodoList/>
            </div>

        </div>
    );
}

export default App;
