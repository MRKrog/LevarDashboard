import React, { Component } from "react";
import { Link } from "react-router-dom";

import overviewIcon from '../../assets/images/icons/overview.svg';
import productIcon from '../../assets/images/icons/product_icon.svg';
import integrationsIcon from '../../assets/images/icons/chart_icon.svg';
import pipelineIcon from '../../assets/images/icons/3Dpipeline_icon.svg';
import settingsIcon from '../../assets/images/icons/settings_icon.svg';

import successIcon from '../../assets/images/icons/succteam_symbol.svg';
import creationIcon from '../../assets/images/icons/assetcreationinfo_icon.svg';

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
        <div className="menu-content">
          <ul>
            <li>
              <Link to="/dashboard/overview">
                <img src={overviewIcon} alt="Overview"/>
                <h4>Overview</h4>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/products">
                <img src={productIcon} alt="Overview"/>
                <h4>Products</h4>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/">
                <img src={integrationsIcon} alt="Integrations"/>
                <h4>Integrations</h4>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/">
                <img src={pipelineIcon} alt="Asset Pipeline"/>
                <h4>Asset Pipeline</h4>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/">
                <img src={settingsIcon} alt="Settings"/>
                <h4>Settings</h4>
              </Link>
            </li>
          </ul>
        </div>
        <div className="grey-space">

        </div>
        <div className="add-product"></div>
      </div>
    );
  }
}
