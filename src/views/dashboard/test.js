import React, { Component } from "react";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import SimpleReactValidator from "simple-react-validator";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/dist/style.css";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import { updateUser } from "../../redux/actions/user";
import { connect } from "react-redux";

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

    // this.handleInputChange = this.handleInputChange.bind(this);
    this.handleValueChange = this.handleValueChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);

    this.validator = new SimpleReactValidator({ autoForceUpdate: this });
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleValueChange(name, value) {
    console.log(value);
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
    const { email } = this.props;
    const url = "http://localhost:3000/api/v1/step2";

      const fetchOptions = {
        method: "POST",
        body: JSON.stringify({ phone_number, address, state, zip, country }),
        headers:{
          'Content-Type': 'application/json'
        }
      }

      try {
        const response = await fetch(url, fetchOptions)
        console.log('response', response);
        if(!response.ok) { throw new Error(`Fetch Call Cannot Be Made`)}
        const data = await response.json();
        console.log('data', data);
        this.props.history.push("/setup-wizard/integration");
        return data;
      } catch (error) {
        console.log('error', error);
        return error;
      }
      // this.props.updateUser(this.state);
  }

  render() {
    return (
      <div className="business-info wizard-content">
        <div className="page-title">
          Just a little more information
        </div>
        <form onSubmit={this.handleSubmit} className="Wizard-Form">
          <div className="Wizard-Input">
            <PhoneInput
              autoFormat={false}
              defaultCountry='us'
              countryCodeEditable={false}
              value={this.state.phone_number}
              onChange={val => this.handleValueChange("phone_number", val)}
              onBlur={() => this.validator.showMessageFor("phone_number")}
              placeholder="Phone Number"
            />
            {this.validator.message(
              "phone_number",
              this.state.phone_number,
              "required|min:10|max:120"
            )}

            <input
              type="text"
              name="business address"
              placeholder="Business Address"
              value={this.state.address}
              onChange={event =>
                this.handleValueChange("address", event.target.value)
              }
              onBlur={() => this.validator.showMessageFor("business address")}
            />
          {this.validator.message(
            "business address",
            this.state.address,
            "required"
          )}


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
            {this.validator.message(
              "country",
              this.state.country,
              "required"
            )}
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

const mapStateToProps = state => ({
  user: state.user.user
});

export default connect(mapStateToProps, null)(BusinessInfo);
