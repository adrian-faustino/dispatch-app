import React, { useState } from "react";
/** Constants **/
import { DRIVERS } from "../../../util/constants";
/** Redux **/
import { setDriver } from "../../../actions/driverActions";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const DriversListHandlers = (dispatch, store) => {
  /** State **/
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // dropdown toggle
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const handleExpandInfo = (e) => {
    e.persist();
    dispatch(setDriver(e.target.innerHTML));
  };

  const renderDriversList = () => {
    const drivers_li = DRIVERS.map((driver, i) => {
      if (i === 0) return;
      else
        return <DropdownItem onClick={handleExpandInfo}>{driver}</DropdownItem>;
    });

    // dropdown toggle inner text
    // display name of  onlydriver, do not display "ALL"
    const btn_txt = store.driver === DRIVERS[0] ? "Drivers" : store.driver;

    return (
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>{btn_txt}</DropdownToggle>
        <DropdownMenu>{drivers_li}</DropdownMenu>
      </Dropdown>
    );
  };

  return {
    handleExpandInfo,
    renderDriversList,
  };
};

export default DriversListHandlers;
