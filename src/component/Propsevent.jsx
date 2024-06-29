import React from 'react'

const Propsevent = () => {

    const handleWelcomUser=(user)=>{
    alert(`hello ${user}`)
    }

    const handleHover =()=>{
        alert('hii')
    }

  return (
    <div>
      <ChildEvent  onClick={()=>handleWelcomUser('tom')}
        onMouseEnter={handleHover}
        />
    </div>
  )
}

export default Propsevent

const ChildEvent=(props)=>{

    const handleGreeting=()=>{
        console.log(`hello , i m greeting`)
        props.onClick()
    }
    return(
        <>
        <button onClick={props.onClick}>click</button>
        <button onMouseEnter={props.onMouseEnter}>hover</button>
        <button onClick={handleGreeting}>greeting</button>
        </>
    )
}