// import React, { useState } from "react";

// const Usestatetut = () => {
//     const [inputValue, newChangeValue] = useState("");

//     const onChange = (event) => {
//         const newval = event.target.value;
//         newChangeValue(newval)
//     }
//     return (
//         <div>
//             <h1>{inputValue}</h1>
//             <input type="text" value={inputValue} placeholder="type something here..." onChange={onChange}></input>
//         </div>
//     );
// };

// export default Usestatetut;

// import React, { useState } from "react";

// const UsestateTut = () => {
//     const [inputValue,setInputValue] = useState("");
//      const onChange = (event) => {
//         const newval = event.target.value;
//         setInputValue(newval)
//      }

//      return(
//         <div>
//         <h1>{inputValue}</h1>
//         <input type="text" value={inputValue} placeholder="type something here..." onChange={onChange}></input>
//         </div>
//      );
// };

// export default UsestateTut;

import React, { useState } from "react";

const UsestateTut = () => {
    const [inputValue,setInputValue] = useState("");
    const onChange =(event) => {
        const newval = event.target.value;
        setInputValue(newval);
    }

    return(
        <div>
         <h1>{inputValue}</h1>
         <input type="text" value={inputValue} placeholder=" Tsype something here..." onChange={onChange}></input>
        </div>
    )
};

export default UsestateTut;

// import React, { useState } from "react";

// const UsestateTut = ()=> {
//     const [inputValue,setInputValue] = useState("");
//     const onChange = (event) => {
//         const newval = event.target.value;
//         setInputValue(newval)
//     }

//     return(
//         <div>
//         <h1>{inputValue}</h1>
//         <unput type="text" value={inputValue} placeholder="Type something here...." onChange={onChange}></unput>
//         </div>
//     )
// }

// export default UsestateTut;

