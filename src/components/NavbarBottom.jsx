import {NavLink as ReactLink }from 'react-router-dom';
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

const NavbarBottom =()=> {
  const [isOpen, setIsOpen] = useState(false);

  
  return (
    <div>
      <div>
      <Navbar color='dark' dark expand="md" fixed='bottom'>
        
        <NavbarBrand tag={ReactLink} to="/Home"  >copyright @m</NavbarBrand>
        <NavbarToggler onClick={()=>setIsOpen(!isOpen)} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
         
           
          </Nav>
          <NavbarText>Youtube</NavbarText>
        </Collapse>
      </Navbar>
    </div>
    </div>
  );
}

export default NavbarBottom;