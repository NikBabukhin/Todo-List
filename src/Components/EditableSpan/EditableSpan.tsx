import React, {ChangeEvent, useState} from "react";

type EditableSpanPropsType = {
    title:string,
    changeTitle: (newTitle:string)=>void
}

export const EditableSpan:React.FC<EditableSpanPropsType>=(props)=> {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [value, setValue] = useState<string>(props.title)

    const onEdit = ()=> {
        setEditMode(true)
        setValue(props.title);
    }
    const offEdit = ()=> {
        setEditMode(false);
        props.changeTitle(value)
    }
    const onChangeHandler=(e:ChangeEvent<HTMLInputElement>)=> {
        setValue(e.currentTarget.value)
    }
    const onKeyPressHandler:React.KeyboardEventHandler<HTMLInputElement>=(key)=> {
            if (key.key === 'Enter') {
                offEdit()
            }
    }


    return editMode?
        <input
            autoFocus
            value={value}
            onBlur={offEdit}
            onChange={onChangeHandler}
            onKeyPress={onKeyPressHandler}
        />:
        <span onDoubleClick={onEdit}>{props.title}</span>
}