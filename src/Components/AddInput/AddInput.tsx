import {SuperButton} from "../SuperButton/SuperButton";
import React, {useState} from "react";
import {SuperInput} from "../SuperInput/SuperInput";

type AddInputPropsType = {
    placeholder: string,
    taskOrTodo: 'Task'|'Todo',
    addItem: (value: string) => void,
}

export const AddInput: React.FC<AddInputPropsType> = (props) => {
    const [value, setValue] = useState<string>('')
    const [error, setError] = useState<boolean>(false)

    const onChangeCallBack = (value: string) => {
        setValue(value);
        setError(false);
    }
    const onKeyPressCallBack: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === 'Enter') {
            addItemCallBack()
        }
    }
    const addItemCallBack = () => {
        if (value.trim() !== '') {
            props.addItem(value);
            setValue('')
        } else {
            setError(true)
        }
    }


    return (
        <div>
            <SuperInput
                taskOrTodo={props.taskOrTodo}
                error={error}
                value={value}
                placeholder={props.placeholder}
                onChange={onChangeCallBack}
                onKeyPress={onKeyPressCallBack}
            />
            <SuperButton buttonName={'+'} onClick={addItemCallBack}/>
        </div>

    )
}