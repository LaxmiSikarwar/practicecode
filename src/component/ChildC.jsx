import React from 'react'
import { FirstName } from '../App'

const ChildC = () => {
  return (
    <>
        <FirstName.Consumer>{(fname)=>{
          return <>
              <h1>hii, i am {fname}</h1></>
             
        }}
              
        </FirstName.Consumer>

      </>
    
  )
}

export default ChildC
