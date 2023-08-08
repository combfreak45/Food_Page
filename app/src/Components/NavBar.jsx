import React from 'react'
import './NavBar.css'
import Button from './Button';
const NavBar = () => {
  return (
    <div className="main">
      <img src="\logo.png" alt="logo" />
      <h1>Food Point</h1>
      <div className="btn_grp">
        <Button text="Breakfast" />
        <Button text="Lunch" />
        <Button text="Dinner" />
        <Button text="All"/>
        <input type="text" placeholder="hello" />
      </div>
    </div>
  );
}

export default NavBar
