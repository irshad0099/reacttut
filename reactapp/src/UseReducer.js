// import React, { useReducer } from "react";

// const initialState = 0;

// const reducer = (state, action) => {
//     console.log(state, action);
//     if (action.type === "INCREMENT") {
//         return state + 1;
//     }
//     if (action.type === "DECREMENT") {
//         return state - 1;
//     }

//     return state;
// }

// const UseReducer = () => {

//     const [state, dispatch] = useReducer(reducer, initialState);

//     return (
//         <>
//             <div className="text-center">
//                 <p>{state}</p>
//                 <button className="btn btn-success" onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
//                 <button className="btn btn-danger" onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
//             </div>
//             </>
//     )
// };

// export default UseReducer;

import React, { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {

    console.log(state,action);
    if(action.type === "INCREMENT"){
        return state + 1;
    }
    if(action.type === 'DECREMENT'){
        return state - 1;
    }

    return state;
}

const UseReducer = () => {
    const [state,dispatch] = useReducer(reducer,initialState);
    return(
        <>
        <div className="text-center">
        <p>{state}</p>
        <button className="btn btn-primary" onClick={()=> dispatch({type: "INCREMENT"})}>Increment</button>
        <button className="btn btn-danger" onClick={()=> dispatch({type: "DECREMENT"})}>Decrement</button>
        </div>
        </>
    )
};

export default UseReducer;