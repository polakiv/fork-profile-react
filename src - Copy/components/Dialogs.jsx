import React from 'react'; 
import {NavLink} from "react-router-dom";


function DialogItem(props) { 
	let path = "/dialogs/" + props.id;
	return (	  
		<div className='dialog active'>
		  <NavLink to={path}>{props.name}</NavLink>
		</div>
	);
  }
function Dialogs(props) {
	let path = "/dialogs/" + props.id;
  return (     
	  <div className='dialogs'>
		  <div className="dialogsItems">
			  <DialogItem name="Dimych" id="1" />
		 	<div className="dialog">
				<NavLink to={path}>{props.name}</NavLink>
			</div>	
		</div>
	  </div>
  );
}

export default Dialogs;