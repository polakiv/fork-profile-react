import React from 'react'; 
import {NavLink} from "react-router-dom";

function Navbar() {
  return (<nav className='nav'>
	<div> 
		<NavLink to="/profile">Profile</NavLink>
	</div>
		<div>
			<NavLink to="/dialogs">Dialogs</NavLink>
		</div>
		<div>
			Messages
		</div>
		<div>
			News
		</div>
		<div>
			Music
		</div>
		<div>
			Settings
		</div>
	  </nav>
  );
}

export default Navbar;