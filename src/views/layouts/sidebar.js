import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="header">
          <div className="logo">
            <Link to="/">
              <img
                src={require("../../assets/images/levarlogo_white.png")}
                alt="logo"
              ></img>
            </Link>
          </div>
          <div className="profile"></div>
        </div>
        <div className="menu-content"></div>
        <div className="grey-space"></div>
        <div className="add-product"></div>
      </div>
    );
  }
}
