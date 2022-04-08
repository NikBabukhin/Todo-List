import {SuperButton} from "../../SuperButton/SuperButton";
import {FilterType} from "../../../App";
import React from "react";

type SortButtonsBlockPropsType = {
    changeFilterTodo: (newFilter: FilterType) => void,
}

export const SortButtonsBlock: React.FC<SortButtonsBlockPropsType> = (props) => {

    return (
        <div>
            <SuperButton buttonName={'all'} onClick={() => props.changeFilterTodo('all')}/>
            <SuperButton buttonName={'active'} onClick={() => props.changeFilterTodo('active')}/>
            <SuperButton buttonName={'completed'} onClick={() => props.changeFilterTodo('completed')}/>
        </div>
    )
}