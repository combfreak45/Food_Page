import React from 'react'
import './Card.css'
function Card({name,image,text,price}) {
  return (
    <div className='card'>
      <div><img src ={image} alt="img" /></div>
      <div className='card_h'>
      <h1>{name}</h1>
      <p>{text}</p>
      <h3>Price:{price}</h3>
      </div>
    </div>
  )
}

export default Card
