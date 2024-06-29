import React from 'react'


function handleButtonOnclick(e) {
    console.log(e)
    console.log(e.type)
  alert('hello')
}

const handleClickOnButtun=(event)=>{
    console.log(event)
    // console.log(event.target)
    // console.log(event.type)
    alert('i am second button')
}

const SyntheticBaseEvent = () => {
  return (

    <div>
        <button onClick={handleButtonOnclick} >submit</button>
        <br/>
        <button onClick={(event)=>handleClickOnButtun(event)}>secondButton</button>
        <br/>
        <button onClick={(event)=>console.log(event)}>thirdButton</button>
    </div>
  )
}

export default SyntheticBaseEvent