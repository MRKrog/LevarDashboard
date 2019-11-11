import React, { Component } from "react";

class Integration extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.history.push("/setup-wizard/final");
  }

  render() {
    return (
      <div className="Integration wizard-content">
        <div className="page-title">
          Great. Let’s integrate your product data.
        </div>
        <div className="Integration-Content">
          <div className="Integration-Product">
            <div className="Product" onClick={this.handleSubmit}>
              <div className="Product-logo">
                <img src={require("../../assets/images/shopify.png")} alt="shopify"></img>
              </div>
              <div className="Product-label">
                Shopify
                <span>E-Commerse</span>
              </div>
            </div>
          </div>
          <div className="Integration-Product">
            <div className="Product disabled">
              <div className="Product-logo">
                <img src={require("../../assets/images/csv.png")} alt="csv"></img>
              </div>
              <div className="Product-label">
                CSV Import
                <span>Custom</span>
              </div>
            </div>
          </div>
          <div className="Integration-Product">
            <div className="Product disabled">
              <div className="Product-logo">
                <img src={require("../../assets/images/customapi.png")} alt="custom"></img>
              </div>
              <div className="Product-label">
                API Integration
                <span>Custom</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Integration;
