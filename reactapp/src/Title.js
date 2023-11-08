// import React, { useState } from "react";

// function Title(){
//     const [title,setTitle] = useState("IrshadSifat@Love Forever");
//     const handleChange= () =>{
//         setTitle("Frover Love together");
//     };

//     return(
//         <div>
//         <h1>{title}</h1>
//         <button onClick={handleChange}>Change Title</button>
//         </div>
//     )
// }

// export default Title;

import React, { useState } from "react";

function Title(){
    const [title,setTitle] = useState("I am a React Developer");
    const handleChange = () => {
        setTitle("Right now i am in hyedrabad");
    };

    return(
        <div>
        <h1>{title}</h1>
        <button onClick={handleChange}>change Title</button>
        </div>
    )

};

export default Title;