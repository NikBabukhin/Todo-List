import React from "react";

type SuperButtonPropsType = {
    idForClick?:string,
    buttonName:string,
    onClick: ()=>void,
    className?: string,
    activeClassName?:string,
}

export const SuperButton:React.FC<SuperButtonPropsType>=(props)=> {

    return (
        <button
            className={props.className}
            onClick={props.onClick}
        >{props.buttonName}</button>
    )
}