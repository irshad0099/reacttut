import axios from "axios";
import React,{useEffect} from "react";

function Asyncawait(){
    useEffect(()=>{
        ( async () =>{
            try {
                const result = await axios.get('https://fakestoreapi.com/products')
                console.log(result)
            } catch (error) {
                console.log(error)
            }
        }) ()
    })

    return(
        <div>
         Async await get api method
        </div>
    )
}

export default Asyncawait;