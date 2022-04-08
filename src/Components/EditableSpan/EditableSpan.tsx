import React from "react";

type EditableSpanPropsType = {
    title:string
}

export const EditableSpan:React.FC<EditableSpanPropsType>=(props)=> {
    return <span>{props.title}</span>
}