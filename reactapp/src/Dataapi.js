// import React, { useEffect } from "react";

// function Dataapi() {
//     useEffect(() => {
//         fetch('https://fakestoreapi.com/products')
//             .then(response => response.json())
//             .then(json => console.log(json))
//     }, [])

//     return (
//         <div>
//             <h1>Fetch get data method</h1>
//         </div>
//     )
// }

// export default Dataapi;

import React,{useEffect} from "react";

function Dataapi(){
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(response=>response.json())
        .then(json => console.log(json))
    },[])

    return(
        <div>
        <h1>useEffect get api method</h1>
        </div>
    )
}

export default Dataapi;