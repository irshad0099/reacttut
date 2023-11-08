import React, { useState } from "react";

function Counter (){
    const [count,setCount] = useState(0);

    function handleClick(){
        setCount (count + 1);
    }
    return(
        <div>
        <h1>Counter update that together</h1>
        <MyButton count = {count} onClick={handleClick}></MyButton>
        <MyButton count = {count} onClick={handleClick}></MyButton>
        </div>
    );
}

function MyButton({count,onClick}){
    return(
        <MyButton onClick={onClick}>
        clicked {count}  Times
        </MyButton>
    );
}

export default Counter;