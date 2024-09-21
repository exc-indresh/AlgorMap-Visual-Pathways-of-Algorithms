import React from 'react';
import './Header.css';

function Header() {


  return (
    <div className="header">
      <div className="header-logo">Algor<span style={{color:'crimson'}}>Map</span></div>
      <div className="header__options">
         <h3 className="header__option" ><span>Developed by </span><span style={{color:'crimson'}}>Indresh</span></h3>
      </div>
   </div>
  )
}

export default Header;