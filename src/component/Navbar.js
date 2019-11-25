import React, { Component } from 'react';
import { useState}  from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const NavBar = (props) => {
    const [collapsed, setCollapsed] = useState(true);
  
    const toggleNavbar = () => setCollapsed(!collapsed);
  
    return (
      <div>
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto">Home</NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/about-me/">About Me</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/asaddam?tab=repositories">GitHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }

export default NavBar;