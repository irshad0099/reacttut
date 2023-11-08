// import React, { useEffect, useState } from "react";

// function Counter(){
//     const [count,setCount] = useState(0);

//     useEffect(()=>{
//         console.log("useEffect")
//     })

//     return(
//         <div>
//         <h1>UseEffect in React Counter : =  {count}</h1>
//         <button onClick={()=>setCount( count + 1)}>Update Increment</button>
//         <button onClick={()=>setCount(count - 1)}>Update Decrement</button>
//         </div>
//     )
// };

// export default Counter;

// import React, { useEffect, useState } from "react";

// function Counter(){
//     const [count,setCount] = useState(0);

//     useEffect(()=>{
//         console.log("useeffect")
//     })
//     return(
//         <div>
//          <h1>useeffect Counter : {count}</h1>
//          <button className="btn btn-primary" onClick={()=>setCount(count + 1)}>Increment Counter</button>
//          <button className="btn btn-danger" onClick={()=>setCount(count - 1)}>Decrement Counter</button>
//         </div>
//     )
// };

// export default Counter;

// import React, { useEffect, useState } from "react";

// function counter(){
//     const [count,setCount] = useState(0);

//     useEffect(()=>{
//         console.log("useEffect")
//     })

//     return(
//         <div>
//         <h1>UseEffect Counter : {count}</h1>
//         <button className="btn btn-primary" onClick={()=>setCount(count + 1)}>Increment</button>
//         <button className="btn btn-danger" onClick={()=>setCount(count - 1)}>Decrement</button>
//         </div>
//     )
// };

// export default counter;

import React, { useEffect, useState } from "react";

function Counter (){
    const [count,setCount] = useState(0);
    
    useEffect(()=>{
        console.log('useEffect')
    })

    return(
        <div>
        <h1>UseEffect Counter : {count}</h1>
        <button className="btn btn-primary w-2 m-2" onClick={()=> setCount(count +1 )}>Increment NO</button>
        <button className="btn btn-danger" onClick={()=> setCount(count - 1)}>Decremnet NO</button>
        </div>
    )
};

export default Counter;