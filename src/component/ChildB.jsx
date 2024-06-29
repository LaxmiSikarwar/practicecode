import React, { useContext } from 'react'
import ChildC from './ChildC'
import { FirstName  } from '../App'

const ChildB = () => {
    const fname =useContext(FirstName)
  return (
    <div>
        <h1>hello, i am {fname}</h1> 
    </div>
  )
}

export default ChildB