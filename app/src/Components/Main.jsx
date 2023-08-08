import React from 'react'
import Card from './Card'
import { BASE_URL } from '../App'
import './Main.css'
const Main = ({data}) => {
  return (
    <div className="main">
      {data?.map(({ name, image, text, price }) => (
        <Card key={name} name={name} image={BASE_URL+image} text={text} price={price}/>
      ))}
    </div>
  );
}

export default Main
