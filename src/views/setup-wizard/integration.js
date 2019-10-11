import React, { Component } from "react";

export default class Integration extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.history.push("/setup-wizard/final");
  }

  render() {
    return (
      <div className="integration">
        <div className="page-title">
          Great. Let’s integrate your product data.
        </div>
        <div className="row p-0">
          <div className="col-lg-4 col-md-6">
            <div className="product" onClick={this.handleSubmit}>
              <div className="product-logo">
                <img
                  src={require("../../assets/images/shopify.png")}
                  alt="shopify"
                ></img>
              </div>
              <div className="product-label">
                Shopify
                <span>E-Commerse</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="product disabled">
              <div className="product-logo ">
                <img
                  src={require("../../assets/images/csv.png")}
                  alt="csv"
                ></img>
                <p className="hover-label">
                  Please contact{" "}
                  <a href="https://support@levar.co">support@levar.co</a> for
                  more information
                </p>
              </div>
              <div className="product-label">
                CSV Import
                <span>Custom</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="product disabled">
              <div className="product-logo">
                <img
                  src={require("../../assets/images/customapi.png")}
                  alt="shopify"
                ></img>
                <p className="hover-label">
                  Please contact{" "}
                  <a href="https://support@levar.co">support@levar.co</a> for
                  more information
                </p>
              </div>
              <div className="product-label">
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
