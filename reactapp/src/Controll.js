import React, { useState } from "react";

function Form(){
    const [Email,setEmail] = useState("");
    const [PassWord,setPassword] = useState("")

    return(
        <div >
        <h1>Controll Component</h1>
        <input type="text" value={Email} placeholder="Enter your Email ID" onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" value={PassWord} placeholder="Enter Your Password" onChange={(e)=>setPassword(e.target.value)}/>
        <button type="submit">Submit</button>
        </div>
    )
};

export default Form;