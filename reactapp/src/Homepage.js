import React from 'react'
import { data } from './Crudoperation/data'

function Homepage() {
  return (
    <div>
        <h1>{data.title}</h1>
        <h4>{data.para1}</h4>
        <h4>{data.para2}</h4>

        <p>{data.disc}</p>
          
            
    </div>
  )
}

export default Homepage