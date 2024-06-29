import React, { useState } from 'react'

const Derivedstate = () => {

const [user,setUser]=useState([
    {name:'tom',age:45},
    {name:'rishi',age:34}
])

  return (
    <div>
        <ul>
      {user.map((item)=>{
        return(
          <li>
            {item.name}
            {item.age}
          </li>  
           
        )
      })}
          </ul>
    </div>
  )
}

export default Derivedstate
