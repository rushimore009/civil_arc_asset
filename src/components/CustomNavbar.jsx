import {NavLink as ReactLink }from 'react-router-dom';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

const CustomNavebar =()=> {
  const [isOpen, setIsOpen] = useState(false);

  
  return (
    <div>
      <Navbar color='dark' dark expand="md" fixed=''text-aline="center" >
        
        <NavbarBrand  tag={ReactLink} to="/front">Welcome </NavbarBrand>
        <NavbarToggler onClick={()=>setIsOpen(!isOpen)} />
        
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
          <NavItem>
              <NavLink  tag={ReactLink} to="/Buy">Buy</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to="/home">Rent </NavLink>
            </NavItem>
            <NavItem>
              <NavLink  tag={ReactLink} to="/Login">Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to="/Signup">
                Signup
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to="/About">
                About
              </NavLink>
            </NavItem>
       
           
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Option
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>services</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Contact us</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                <a href="https://www.instagram.com/civil_arc_/?hl=en" >Instagram</a>
                
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem><i class="zmdi zmdi-youtube-play"></i> Youtube</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText><i class="zmdi zmdi-youtube-play"></i> Youtube</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default CustomNavebar;