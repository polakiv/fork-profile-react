import React from 'react'; 
import logo from './../logo.svg';

function Header() {
  return (
    
      <header className="header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="">
        <NavLink to={'/login'}>Логинься</NavLink>
      </div>
	   
  );
}

export default Header;