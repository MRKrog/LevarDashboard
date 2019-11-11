import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from "react-redux";
import * as actions from "../../redux/actions";

import SimpleReactValidator from "simple-react-validator";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/dist/style.css";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

class BusinessInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone_number: "",
      address: "",
      state: "",
      zip: "",
      country: "United States"
    };

    this.validator = new SimpleReactValidator({ autoForceUpdate: this });
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleValueChange = (name, value) => {
    this.setState({
      [name]: value
    });

    if (name === "country") {
      this.setState({
        state: ""
      });
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { phone_number, address, state, zip, country } = this.state;
    const { user, updateUser, setLoading } = this.props;
    // const url = "http://localhost:3000/api/v1/step2";
    const url = "https://09v84ua8va.execute-api.us-east-1.amazonaws.com/dev/api/v1/step2";

    const fetchOptions = {
      method: "PUT",
      body: JSON.stringify({ email: user.user.email, phone_number, address, state, zip, country }),
      headers:{
        'Content-Type': 'application/json'
      }
    }

    try {
      setLoading(true);
      const response = await fetch(url, fetchOptions)
      console.log('response', response);
      if(!response.ok) { throw new Error(`Fetch Call Cannot Be Made`)}
      const data = await response.json();
      console.log('data', data);
      updateUser({ phone_number, address, state, zip, country })
      setLoading(false);
      this.props.history.push("/setup-wizard/integration");
      return data;
    } catch (error) {
      console.log('error', error);
      return error;
    }
  }

  render() {
    return (
      <div className="Business-Info wizard-content">
        <div className="page-title">
          Just a little more information
        </div>
        <form onSubmit={this.handleSubmit} className="Wizard-Form">
          <div className="Wizard-Input">
            <PhoneInput
              className="Input-Field"
              autoFormat={false}
              defaultCountry='us'
              countryCodeEditable={false}
              value={this.state.phone_number}
              onChange={val => this.handleValueChange("phone_number", val)}
              onBlur={() => this.validator.showMessageFor("phone_number")}
              placeholder="Phone Number"
            />
            <TextField
              id="outlined-basic"
              label="Business Address"
              margin="normal"
              variant="outlined"
              type="text"
              name="address"
              value={this.state.address}
              onChange={this.handleInputChange}
            />
            <CountryDropdown
              defaultOptionLabel="Country"
              className={
                this.state.country === "" || this.state.country === ""
                  ? "placeholder"
                  : ""
              }
              value={this.state.country}
              onChange={val => this.handleValueChange("country", val)}
            />
            <RegionDropdown
              ref={region => (this.regionSelection = region)}
              blankOptionLabel="State"
              defaultOptionLabel="State"
              className={
                this.state.state === "" || this.state.state === "State"
                  ? "placeholder"
                  : ""
              }
              country={this.state.country}
              value={this.state.state}
              onChange={val => this.handleValueChange("state", val)}
            />
            <TextField
              id="outlined-basic"
              label="Business Zip"
              margin="normal"
              variant="outlined"
              type="text"
              name="zip"
              value={this.state.zip}
              onChange={this.handleInputChange}
            />
            <div className="submit-button">
              <Button type="submit" variant="contained" onClick={this.handleSubmit}>Next</Button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  user: state.user
});

export const mapDispatchToProps = dispatch => ({
  setLoading: data => dispatch(actions.setLoading(data)),
  updateUser: data => dispatch(actions.updateUser(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BusinessInfo);
