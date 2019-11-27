import React from 'react';
import   { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Droppy = (props) => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        List Id
      </DropdownToggle>
      <DropdownMenu>
        {props.id}
        {props.fn}
        {props.ln}
        {props.email}
        <DropdownItem divider />
      </DropdownMenu>
    </ButtonDropdown>
  );
}

export default Droppy;