import React, { useState } from 'react'

const State = () => {
    const[value,setValue]=useState(0)

    const handleClick=()=>{
        setValue(()=>value+1)
    }
  return (
    <div>
        <h1>{value}</h1>
      <button onClick={handleClick}>increment</button>
    </div>
  )
}

export default State
