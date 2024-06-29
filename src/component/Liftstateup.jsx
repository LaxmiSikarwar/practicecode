import React, { useState } from 'react'

const Liftstateup = () => {
  return (
    <div>
      <Indexcomponent/>
      <DisplayScreen/>
    </div>
  )
}

export default Liftstateup

const Indexcomponent =()=>{

    const[inputValue,setInputValue]=useState('')
    return(
        <>
        <input type='text' 
        placeholder='enter your name'
        value={inputValue}
        />
        </>
    )
}

const DisplayScreen=()=>{
    return(
        <>
        <h1>this is a DisplayScreen</h1>
        </>
    )
}