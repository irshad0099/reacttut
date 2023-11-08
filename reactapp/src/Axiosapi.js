// import axios from "axios";
// import React,{useEffect} from "react";

// function Data(){
//     useEffect(()=>{
//         axios.get('https://fakestoreapi.com/products')
//         .then((response)=> console.log(response.json))
        
//     },[])
//     return(
//         <div>
//         <h1>Axios get data in api</h1>
//         </div>
//     )
// }

// export default Data;

// import axios from "axios";
// import React , {useEffect,useState} from "react";

// function Data(){
//     const [data,setData] = useState([]);
//     useEffect(()=>{
//         axios.get('https://fakestoreapi.com/products')
//         .then((response)=>
//         // console.log(response.data)
//         setData(response.data)
//         )
//     },[])

//     return(
//         <div>
//         <h1>Axios method in data</h1>
//         {
//             data.map((item,ind)=>
//             <p>{item.price}</p>
            
//             )
//         }
//         </div>
//     )
// }

// export default Data;

// import axios from "axios";
// import React, {useState,useEffect} from "react";

// function Data(){
//     const [datas, setdatas] = useState([]);
//     useEffect(() => {
//         axios.get('https://fakestoreapi.com/products')
//         .then((response)=>
//         //   console.log(response.data)
//         setdatas(response.data)
//         )
//     },[])

//     return(
//         <div>
//          <h1> Aios method in data</h1>
//          {
           
//         datas.map((item,ind)=>
//         <p key={item.id}>{item.title}</p>
//             )
//          }
//         </div>
//     )
// }

// export default Data;

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function Data(){
//     const [datas,setDatas] = useState([]);
//     useEffect(()=>{
//         axios.get('https://fakestoreapi.com/products')
//         .then((response)=>
//         // console.log(response.data)
//         setDatas(response.data)
//         )
//     },[])

//     return(
//         <div>
//         <h1>Axios collect the data in api</h1>
//         {
//             datas.map((item,ind)=>
//             <p key={item.id}>{item.id}-------{item.price}</p>
//             )
//         }
//          </div>
//     )
// }

// export default Data;

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function Data(){
//     const [datas,setDatas] = useState([]);
//     useEffect(()=>{
//         axios.get('https://fakestoreapi.com/products')
//         .then((response)=>
//         // console.log(response.data)
//         setDatas(response.data)
//         )
//     },[])
//     return(
//         <div>
//         <h1>Axios method in api store</h1>
//         {
//             datas.map((item,ind)=>
//             <p key={item.ind}>{item.id}-----{item.price}</p>
//             )
//         }
//         </div>
//     )
// }

// export default Data;

import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
function Data(){
    const [datas,setDatas] = useState([]);
    useEffect(()=> {
        axios.get('https://fakestoreapi.com/products')
        .then((response)=>
        setDatas(response.data)
        )
    },[])

    return(

        <div>
        <h1>Axios method in api</h1>
        {
            datas.map((item,ind)=>
            <p key={item.ind}>{item.id}_________{item.title}</p>
            )
        }
        </div>
    )
}

export default Data;
















// import React, { useEffect } from "react";
// import axios from "axios";

// function Data(){
//     useEffect(()=>{
//         axios.get('https://fakestoreapi.com/products')
//         .then((response)=> console.log(response.JSON))
        
//     },[])

//     return(
//        <div>
//        <h1>Axios method in api</h1>
//        </div>
//     )
// };

// export default Data;