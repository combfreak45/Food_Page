import React from 'react'
import './NavBar.css'
const NavBar = ({ searchFood, filterBtns,selectedBtn,filterFood}) => {
  return (
    <div className="main_n">
      <div className="main_h">
        <img src="\logo.png" alt="logo" />
        <h1>Food Point</h1>
      </div>
      <div className='main_s'>
       <h3>Find your Food</h3>
      <input onChange={searchFood} type="text" placeholder="hello" />
      </div>
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
      </div>
    </div>
  );
};

export default NavBar
