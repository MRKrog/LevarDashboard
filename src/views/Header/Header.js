import React, { Component } from "react";
import levarIcon from '../../assets/images/levarlogo_whiteHoriz.png';

import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


class Header extends Component {
  render() {
    return (
      <div className="Header">
        <section className="LevarIcon">
          <img src={levarIcon} alt="levAR" />
        </section>
        <section className="AccountContainer">
          <Tooltip title="Account">
            <IconButton aria-label="Account">
              <AccountCircleIcon className="AccountIcon" />
            </IconButton>
          </Tooltip>
        </section>
      </div>
    );
  }
}

export default Header;
