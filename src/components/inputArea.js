import React from "react";


function InputArea(props) {
    return (
        <div className="form">
        <input onChange={props.ontext} type="text" value={props.text}/>
        <button onClick={props.onadd}>
            <span>Add</span>
        </button>
        </div>
    );
    }

export default InputArea;