import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';

class Final extends Component {
  constructor(props) {
    super(props);
    this.state = {
      store_url: ""
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    });
  }

  render() {
    const { store_url } = this.state;
    return (
      <div className="Final wizard-content">
        <div className="page-title">
          Almost there! Connect your store below.
        </div>
        <div className="Final-Content">
          <div className="Final-Product">
            <img
              src={require("../../assets/images/shopify.png")}
              alt="shopify"
            ></img>
            <div className="Final-Label">
              Shopify <span>E-Commerce</span>
            </div>
          </div>
        </div>
        <form onSubmit={this.handleSubmit} className="Wizard-Form">
          <div className="Wizard-Input">
            <TextField
              id="outlined-basic"
              label="Enter Store URL"
              margin="normal"
              variant="outlined"
              type="text"
              name="store_url"
              value={this.state.store_url}
              onChange={this.handleInputChange}
            />
            <div className="submit-button">
              <a href={`https://7b50717d.ngrok.io/shopify?shop=${store_url}`}
                 className="submit-link">
                 Link Store
              </a>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Final;
