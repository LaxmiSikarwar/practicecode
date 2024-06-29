import React, { useEffect, useState } from 'react'

const HookUseEffect = () => {
    const[count,setCount]=useState(0)

   const handleButtonClick=()=>{
    setCount(count+1)
   }
   useEffect(()=>{
    alert(`the count of one number ${count}`)
    document.title=`you clicked ${count} time`
   },[3000]) 
  return (
    <div>
        <h1>{count}</h1>
      <button onClick={handleButtonClick}>plz click</button>
    </div>
  )
}

export default HookUseEffect
