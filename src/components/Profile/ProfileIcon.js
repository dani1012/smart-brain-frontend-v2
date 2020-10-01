import React, {useState} from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


const ProfileIcon = (props) => {

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);
  
  

 
  	return(
      <div className = "pa4 tc">
	  	<Dropdown direction="left" isOpen={dropdownOpen} toggle={toggle}>
	      <DropdownToggle
	        tag="span"
	        data-toggle="dropdown"
	        aria-expanded={dropdownOpen}
		  >    
		     {/*Custom Dropdown Content below, img from Tachyons*/}
			 <img
			    src = "http://tachyons.io/img/logo.jpg"
			    className="br-100 ba w3 dib" alt="avatar"/>

      	  </DropdownToggle>
	      <DropdownMenu>         
	         <DropdownItem onClick = {props.toggleModal}>View Profile</DropdownItem>
	         <DropdownItem onClick={() => props.onClickRemoveToken('signout')} >Sign Out</DropdownItem>
	      </DropdownMenu>
	    </Dropdown>
		
	  </div>
  	)
  }


// props.onRouteChange('signout')

export default ProfileIcon;