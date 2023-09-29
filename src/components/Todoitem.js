import React from "react";

function Todoitem(props) {
    return (
        <div onClick={()=>{props.oncheck(props.index)}}>
        <li>{props.text}</li>
        </div>
    );
}

export default Todoitem;