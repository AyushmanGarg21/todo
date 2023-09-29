import React from "react";
import { useState } from "react";
import Todoitem from "./Todoitem";
import InputArea from "./inputArea";

function App() {
  
  const [list, setList] = useState([]); 
  const [inputText, setInputText] = useState("");

  function handletext(event){
    const value = event.target.value;
    setInputText(value);
  }

  function additem(){
    setList((prevValue) => {
      return [...prevValue, inputText];
    });
    setInputText("");
  }

  function deleteitem(id){
    setList((prevValue) => {
      return prevValue.filter((item,index) => {
        return index !== id;
      });
    });
  }


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea ontext={handletext} onadd={additem} text={inputText}/>
      <div>
        <ul>
          {list.map((item,id) => (
            <Todoitem key ={id} index={id} text={item} oncheck={deleteitem}/>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
