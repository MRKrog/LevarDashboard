import React, { Component } from "react";
import SimpleReactValidator from "simple-react-validator";

export default class Final extends Component {
  constructor(props) {
    super(props);
    this.state = {
      store_url: ""
    };

    // this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

    this.validator = new SimpleReactValidator({ autoForceUpdate: this });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.history.push("/dashboard");
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="final">
        <div className="page-title">
          Almost there! Connect your store below.
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group col-12">
            <div className="product">
              <div className="product-logo">
                <img
                  src={require("../../assets/images/shopify.png")}
                  alt="shopify"
                ></img>
                <div className="product-label">
                  Shopify
                  <span>E-Commerce</span>
                </div>
              </div>
            </div>
          </div>
          <div className="form-group col-12">
            <div className="shopify-url">
              <input
                className="form-control"
                type="text"
                name="store_url"
                placeholder="Store URL"
                value={this.state.store_url}
                onChange={this.handleInputChange}
                onBlur={() => this.validator.showMessageFor("store_url")}
              />
              <span> .myshopify.com</span>
            </div>
            {this.validator.message(
              "store_url",
              this.state.store_url,
              "required"
            )}
          </div>
          <div className="submit-button d-block">
            <input type="submit" value="Next" />
          </div>
        </form>
      </div>
    );
  }
}
