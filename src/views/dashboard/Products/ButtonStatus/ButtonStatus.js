import React, { Component } from 'react';

import arcube from '../../../../assets/images/icons/arcube.svg';
import addproductplus from '../../../../assets/images/icons/addproductplus.svg';

class ButtonStatus extends Component {

  setStatus3D = (currentStatus) => {
    let buttonStatus;
    switch(currentStatus) {
      case 0:
        buttonStatus = (
          <button className="addProduct">
            <img alt="Add Product" src={addproductplus}></img> <span>Create AR</span>
          </button>)
        break;
      case 1:
        buttonStatus = (
          <button className="pending">
            <span>Pending Creation</span>
          </button>)
        break;
      case 2:
        buttonStatus = (
          <button className="inProgress">
            <span>In Progress</span>
          </button>)
        break;
      case 3:
        buttonStatus = (
          <button className="finished">
            <img alt="Finished" src={arcube}></img>
          </button>)
        break;
      default:
      buttonStatus = (
        <button className="finished">
          <img alt="Finished" src={arcube}></img>
        </button>)
    }
    return buttonStatus
  }

  render() {
    return (
      <div className="ButtonStatus">
        {this.setStatus3D(this.props.status)}
      </div>
    )
  }
}

export default ButtonStatus;
