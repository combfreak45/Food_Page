import React from 'react'
import './NavBar.css'
import Button from './Button';
const NavBar = () => {
  return (
    <div className='main'>
      <img src="\logo.png" alt="logo" />
      <h1 >Food Point</h1>
      <div className='btn_grp'>
        <Button/>
        <Button/>
        <Button/>
        <Button/>
        <input type="text" placeholder='hello' />
      </div>
    </div>
  );
}

export default NavBar
