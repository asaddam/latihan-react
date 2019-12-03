import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  // NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
  import { Link } from 'react-router-dom'
  import { connect } from 'react-redux'
  import  { logout } from '../redux/action'

class Header extends React.Component {
    state = {
      isOpen: false
    };
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    console.log(this.props.role)
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <Link className='navbar-brand' to='./' style={{color: 'white'}}>
              home
          </Link>

          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {/* <NavItem>
                  <Link to='/not-home'>
                      home
                  </Link>
              </NavItem> */}
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret style={{color: 'white'}}>
                  {
                    this.props.role
                    ?
                    this.props.username
                    :
                    'Click Me'
                  }
                </DropdownToggle>
                  {
                    this.props.role
                    ? 
                    <DropdownMenu right>
                      <DropdownItem  onClick={this.props.logout}>
                        Log Out
                      </DropdownItem>
                      <Link to='/belajar'>
                        <DropdownItem>
                        belajar
                        </DropdownItem>
                      </Link>
                    </DropdownMenu>
                    :
                    <DropdownMenu right>
                      <Link to='/login'>
                        <DropdownItem>
                          Login
                        </DropdownItem>
                      </Link>
                    <DropdownItem divider />
                    <DropdownItem>
                      Register
                    </DropdownItem>
                  </DropdownMenu>
                  }
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return{
    username: state.user.username,
    role: state.user.role
  }
}

export default connect(mapStatetoProps, {logout})(Header);