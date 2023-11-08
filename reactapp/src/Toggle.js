// import React, { useState } from "react";

// function Toggle (){
//     const [toggle,setToggle] = useState('ON')

//     function handleClick(){
//         if(toggle=== 'ON'){
//             setToggle('OFF')
//         }else{
//             setToggle('On')
//         }

//     }

//     return(
//         <button onClick={handleClick}>{toggle}</button>
//     )
// };

// export default Toggle;

// import React, { useState } from "react";

// function Toggle(){
//     const [toggle,setToggle] = useState('ON')

//     function handleClick(){
//         if(toggle === 'ON'){
//             setToggle('OFF')
//         }else{
//             setToggle('ON')
//         }
//     }

//     return(
//         <button onClick={handleClick}>{toggle}</button>
//     )
// };

// export default Toggle;

// import React, { useState } from "react";

// function Toggle(){
//     const [toggle,setToggle] = useState('ON');

//     function handleClick (){
//         if(toggle === 'ON'){
//             setToggle('OFF')
//         }else{
//             setToggle('ON')
//         }
//     }
//     return(
//         <button onClick={handleClick}>{toggle}</button>
//     )
// }

// export default Toggle;

//  import React, { useState } from "react";

//  function Toggle(){
//     const [toggle,setToggle] = useState('ON');

//     function handleClick (){
//         if(toggle === 'ON'){
//             setToggle ('OFF')
//         }else{
//             setToggle('ON')
//         }
//     }
//     return(
//         <button onClick={handleClick}>{toggle}</button>
//     )
//  }

//  export default Toggle;

import React from "react";
import { useState } from "react";

function Toggle(){
    const [toggle, setToggle] = useState('ON');

    function handleClick (){
        if(toggle === 'ON'){
            setToggle('OFF')
        }else{
            setToggle('ON')
        }
    }
    return(
        <button onClick={handleClick}>{toggle}</button>
    )
}

export default Toggle;

