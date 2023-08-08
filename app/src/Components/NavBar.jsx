import React from 'react'
import './NavBar.css'
import Button from './Button';
const NavBar = ({ searchFood, filterBtns,selectedBtn,filterFood}) => {
  return (
    <div className="main">
      <img src="\logo.png" alt="logo" />
      <h1>Food Point</h1>
      <div className="btn_grp">

        {filterBtns.map((value) => (
          <button
            isSelected={selectedBtn === value.type}
            key={value.name}
            onClick={() => filterFood(value.type)}
          >
            {value.name}
          </button>
        ))}
        <input onChange={searchFood} type="text" placeholder="hello" />
      </div>
    </div>
  );
};

export default NavBar
