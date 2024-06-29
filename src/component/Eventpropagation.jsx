import React from 'react'

const Eventpropagation = () => {
  
    const handleGrantParent=()=>{
        console.log("hello grantParent")
    }
    const handleParent = () => {
        console.log("hello Parent")
    }
    const handleChild = (e) => {
     e.stopPropagation()
        console.log("hello child")
    }

  return (
    <div color='red' onClickCapture={handleGrantParent}>
      <div color='blue'  onClickCapture={handleParent}>
        <button color='green' onClickCapture={handleChild}>click hare</button>
      </div>
    </div>
  )
}

export default Eventpropagation
