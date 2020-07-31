import React, { useState } from "react";
/** Reactstrap **/
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
/** Constants **/
import { DRIVERS } from "../../util/constants";
/** Redux **/
import { useSelector, useDispatch } from "react-redux";
import { setDriver } from "../../actions/driverActions";

const DriverDropdown = () => {
  /** State **/
  const [dropdownOpen, setDropdownOpen] = useState(false);

  /** Redux **/
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const handleUpdateDriver = (e) => {
    const selectedDriver = e.target.innerText;
    if (selectedDriver === store.driver) return;
    dispatch(setDriver(selectedDriver));
  };

  const renderItems = DRIVERS.map((driver, i) => {
    if (i === 0) return;
    else
      return (
        <DropdownItem
          key={`${driver}-${i}-ddDropdown`}
          onClick={handleUpdateDriver}
        >
          {driver}
        </DropdownItem>
      );
  });

  // dropdown inner txt
  const dropdown_txt = store.driver === DRIVERS[0] ? "Select" : store.driver;

  return (
    <section>
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>{dropdown_txt}</DropdownToggle>
        <DropdownMenu>{renderItems}</DropdownMenu>
      </Dropdown>
    </section>
  );
};

export default DriverDropdown;
