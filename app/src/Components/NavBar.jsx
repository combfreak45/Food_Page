import React from 'react'
import './NavBar.css'
import Button from './Button';
const NavBar = () => {
  return (
    <div className='main'>
      <img src="\logo.png" alt="logo" />
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
