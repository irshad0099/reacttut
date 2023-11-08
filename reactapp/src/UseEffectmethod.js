import React from "react";
import { useState } from "react";

const UseEffectmethod = ( )=> {
    const [num,setNum] = useState(0);

    return(
        <button onClick={()=> {setNum(num+1)}}> Clicked me {num}</button>
        
    )
}

export default UseEffectmethod;