// import React from "react";
// import { useState } from "react";

// const Time = () => {
//     let currentTime = new Date().toLocaleTimeString();
//     const [cTime,setTime] = useState(currentTime);

//     const UpdateTime = () => {
//         let newCurrentTime= new Date().toLocaleTimeString();
//         setTime(newCurrentTime);
//     }

//     return (
//         <div>
//             <h1>{currentTime}</h1>
//             <button onClick={UpdateTime}> Get Time</button>
//         </div>
//     );
// }

// export default Time;


// import React from "react";
// import { useState } from "react";

// const Timer = () => {

//     let Time = new Date(). toLocaleTimeString();

//     const [currentTime, setCurrentTime] = useState(Time);

//     const UpdateTime = () => {
//         Time = new Date(). toLocaleTimeString();
//         setCurrentTime(Time)

//     };

//     setInterval(UpdateTime, 1000);
//     return(
//       <>
//         <h1>{currentTime}</h1>
//       </>
//     );
// }

// export default Timer;

// import React, { useState } from "react";
// import Update from "./Component1/Update";

// const Timer = () => {
//   let Time = new Date(). toLocaleTimeString();

//   const [currentTime,setCurrentTime] = useState(Time);

//   const UpdateTime =() => {
//     Time = new Date().toLocaleTimeString();
//     setCurrentTime(Time)
//   };

//   setInterval(UpdateTime,1000);

//   return(
//     <>
//      <h1>{currentTime}</h1>
//     </>
//   )
// };

// export default Timer;

// import React, { useState } from "react";

// const Timer = () => {
//   let Time  = new Date(). toLocaleTimeString();

//   const [currentTime,setCurrentTime]  = useState(Time);

//   const UpdateTime = () => {
//     Time = new Date().toLocaleTimeString();
//     setCurrentTime(Time)
//   };
//   setInterval(UpdateTime,1000);

//   return(
//     <h1>{currentTime}</h1>
//   )
// };

// export default Timer;

import React, { useState } from "react";

const Timer = () => {
  let Time = new Date(). toLocaleDateString();

  const [currentTime,setCurrentTime] = useState(Time);

  const UpdateTime = () => {
    Time = new Date(). toLocaleTimeString();
    setCurrentTime(Time)
  };

  setInterval(UpdateTime,1000);

  return(
    <h1>{currentTime}</h1>
  )
};

export default Timer;