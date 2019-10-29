import React, { Component } from "react";
import levarIcon from '../../assets/images/levarlogo_whiteHoriz.png';

// import Tooltip from '@material-ui/core/Tooltip';
// import IconButton from '@material-ui/core/IconButton';
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Account from "../Account/Account";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <section className="LevarIcon">
          <img src={levarIcon} alt="levAR" />
        </section>
        <section className="AccountContainer">
          <Account />
        </section>
      </div>
    );
  }
}

export default Header;
