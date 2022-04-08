import React, {ChangeEvent, KeyboardEventHandler} from "react";
import style from './SuperInput.module.css'

type SuperInputPropsType = {
    error: boolean,
    value: string,
    onChange: (value: string) => void,
    onKeyPress: KeyboardEventHandler<HTMLInputElement>,
    placeholder?: string,
    taskOrTodo?: 'Task' | 'Todo',
}

export const SuperInput: React.FC<SuperInputPropsType> = (props) => {

    const onChangeCallBack = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChange(e.currentTarget.value)
    }


    return (
        <div className={style.wrapper}>
            <input
                placeholder={props.placeholder}
                className={`${style.input} ${props.error ? style.error : ''}`}
                type={'text'}
                value={props.value}
                onKeyPress={props.onKeyPress}
                onChange={onChangeCallBack}
            />
            {props.error && <span className={style.span}>{`${props.taskOrTodo} name should be not empty`}</span>}
        </div>
    )
}