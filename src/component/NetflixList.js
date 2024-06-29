import React from 'react'

const NetflixList = ({data}) => {
    const { img_url, name, rating, watch_url }=data
  return (
    // <li >
    //       <img src={props.data.img_url} alt='qot.jpg' width='300px' height='300px'/>
    //        <h2>Name:{props.item.name}</h2>
    //       <p>Rating:{props.item.rating}</p>
    //       <a href={props.item.watch_url}>
    //       <button>watch now</button>
    //       </a> 
    //       </li>
      <li >
          <img src={img_url} alt='qot.jpg' width='300px' height='300px' />
          <h2>Name:{name}</h2>
          <p>Rating:{rating}</p>
          <a href={watch_url}>
              <button>watch now</button>
          </a>
      </li>
  )
}

export default NetflixList
