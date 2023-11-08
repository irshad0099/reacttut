// import React, { useEffect, useState } from 'react'

// function FetchApi() {
//   const [datas, setDatas] = useState([]);
//   useEffect(()=>{
//     fetch("https://fakestoreapi.com/products")
//     .then(res=>res.json())
//     .then(data=>{
//         // console.log(data); 
//         setDatas(data)
//     })
//   })
//   return (
//     <div>
//     <h1>Fetching Data from an API</h1>
//     <div>
//      {
//         datas.map((item,ind)=>
//         <p key={item.id}>{item.price}{item.title}</p>
//         )
//      }
//     </div>

//     </div>
//   )
// }

// export default FetchApi































// import React, { useEffect } from "react";

// function Data (){
//   useEffect(()=>{
//     fetch('https://fakestoreapi.com/products')
//     .then((reponse)=> reponse.json())
//     .then(json=> console.log(json))
//   },[])

//   return(

//     <div>
//      <h1>Fetch api method in fakestore api</h1>

//     </div>
//   )

// };
// export default Data;


// import React, { useEffect } from "react";

// function Data(){
//   useEffect(()=>{
//     fetch('https://fakestoreapi.com/products')
//     .then((response) => response.json())
//     .then(json => console.log(json))
//   },[])

//   return(
//     <div>
//     <h1>Fetch api with data</h1>

   

//     </div>
//   )
// }

// export default Data;





// import React, { useEffect, useState } from "react";
// function FetchApi() {


//   const [datas, setDatas] = useState([]);
//   useEffect(() => {
//     fetch('https://fakestoreapi.com/products')
//       .then(response => response.json())
//       .then(data => {
//         setDatas(data)
//       })
//   })
//   return (
//     <div className="container-fluid">
//       <h1>Fetch api</h1>
//       <table className='table' style={{ padding: '20px', width: '100%' }}>

//         <thead>
//           <tr>
//             <th>Product ID</th>
//             <th>Product Name</th>
//             <th>Product Price</th>
//             <th>Product Image</th>
//           </tr>
//         </thead>

//         <tbody>
//           <tr>
//             {
//               datas.map((item, ind) =>
//                 <tr>
//                   <td>{item.id}</td>
//                   <td>{item.title}</td>
//                   <td>{item.price}</td>
//                   <td>
//                     <img src={item.image} alt="Error" height={100} width={100} />
//                   </td>
//                 </tr>
//               )
//             }
//           </tr>
//         </tbody>

//       </table>
//     </div>
//   )
// }

// export default FetchApi;