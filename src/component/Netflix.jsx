import React from 'react'
import Data from '../api/Data.json'
import NetflixList from './NetflixList'

const Netflix = () => {
  return (
    <ul>
        {Data.map((item)=>{
          return(
            <NetflixList key={item.id} data={item}/>
          )
       } )}
      </ul>
  )
}
export default Netflix

