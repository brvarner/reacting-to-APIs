import React from "react";

const Button = props => {

    return (
        <>
            <button onClick={props.handleClick} className={props.className}>{props.btnTxt}</button>
        </>
    )

}

export default Button