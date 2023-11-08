// import React from "react";
// import { useState } from "react";

// const initialCount = 0;
// function Counter() {
//     const [count, setCount] = useState(initialCount);


//     return (
//         <div>
//             <p>You clicked me {count} times</p>
//             <button className="btn btn-success" onClick={() => setCount((c) => c + 1)}>Increment</button>
//             <button className="btn btn-primary" onClick={() => setCount((c) => c - 1)}>Decrement</button>

//         </div>
//     )

// }

// export default Counter;

// import React, { useState } from "react";


// function Increment(){
//     const [count,setCount]= useState(0);



//     return(

//         <div>
//         <h1>{count}</h1>
//         <button onClick={()=>setCount(count + 1)}>Increment</button>
//         <button onClick={()=>setCount(count - 1)}>Decrement</button>
//         </div>
        
//         )
// }

// export default Increment;

// useState method

// import React, { useState } from "react";

// function Increment(){
//     const [count,setCount] = useState(0);

//     return(
//         <div>
//         <h1>{count}</h1>
//         <button   className="btn btn-primary"onClick={()=> setCount(count + 1)}>Increment</button>
//         <button  className="btn btn-danger" onClick={()=>setCount(count - 1)}>Decrement</button>
//         </div>
//     )
// }

// export default Increment;

// import React, { useState } from "react";

// function Increment() {
//     const [count,setCount] = useState(0);
//     return(
//         <div>
//         <h1>{count}</h1>
//         <button className="btn btn-primary" onClick={()=> setCount(count + 1)}>Increment</button>
//         <button className="btn btn-danger" onClick={()=> setCount(count - 1)}>Decrement</button>
//         </div>
//     )
// };

// export default Increment;

// import React, { useState } from "react";

// function Increment (){
//     const [count,setCount] = useState(0);
//     return(
//         <div>
//         <h1>{count}</h1>
//         <button className="btn btn-success" onClick={() => setCount(count + 1)}>Increment</button>
//         <button className="btn btn-danger" onClick={()=> setCount(count -1)}>Decrement</button>
//         </div>
//     )
// };

// export default Increment;

// import React, { useState } from "react";

// function Increment (){
//     const [count,setCount] = useState(0);
//     return(
//        <div>
//        <h1>{count}</h1>
//        <button onClick={() => setCount (count + 1)}>Increment</button>
//        </div>
//     )
// };

// export default Increment;

import React from "react";
import { useState } from "react";

function Increment(){
    const [count,setCount] = useState(0);
    return(
        <div>
        <h1>{count}</h1>
        <button className="btn btn-primary" onClick={()=> setCount (count + 1)}>Increment</button>
        <button className="btn btn-danger" onClick={()=> setCount (count - 1)}>Decrement</button>
        </div>
    )
};

export default Increment;