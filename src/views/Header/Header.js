import React, { Component } from "react";
import levarIcon from '../../assets/images/levarlogo_white.png';


class Header extends Component {
  render() {
    return (
      <div className="Header">
        <section className="LevarIcon">
          <img src={levarIcon} alt="levAR" />
        </section>
        <section className="AccountContainer">
          <img src={levarIcon} alt="levAR" />
        </section>
      </div>
    );
  }
}

export default Header;
