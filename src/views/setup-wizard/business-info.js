import React, { Component } from "react";
import SimpleReactValidator from "simple-react-validator";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/dist/style.css";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import { updateUser } from '../../redux/actions/user';
import { connect } from 'react-redux';

class BusinessInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone_number: "",
      address: "",
      state: "",
      zip: "",
      country: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.validator = new SimpleReactValidator({ autoForceUpdate: this });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

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

  handleSubmit(event) {
    event.preventDefault();
    if (this.validator.allValid()) {
      this.props.updateUser(this.state);
      this.props.history.push("/setup-wizard/integration");
    } else {
      this.validator.showMessages();
    }
  }
  render() {
    return (
      <div className="business-info">
        <div className="page-title">
          Hi {this.props.user.business_name}!<br />
          Just a little more information
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="row p-0">
            <div className="form-group col-md">
              <PhoneInput
                autoFormat={false}
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
            </div>
            <div className="form-group col-md">
              <input
                type="text"
                name="business address"
                placeholder="Business Address"
                value={this.state.address}
                onChange={event => this.handleValueChange('address', event.target.value)}
                onBlur={() => this.validator.showMessageFor("business address")}
              />
              {this.validator.message(
                "business address",
                this.state.address,
                "required"
              )}
            </div>
          </div>
          <div className="row p-0">
            <div className="form-group col-md">
              <div className="form-select">
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
                {this.validator.message("state", this.state.state, "required")}
              </div>
              <div className="form-select">
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
              </div>
            </div>
            <div className="form-group col-md">
              <input
                type="text"
                name="zip"
                placeholder="Business Zip"
                value={this.state.zip}
                onChange={this.handleInputChange}
                onBlur={() => this.validator.showMessageFor("zip")}
              />
              {this.validator.message("zip", this.state.zip, "required|min:5")}
            </div>
          </div>
          <div className="submit-button d-block">
            <input type="submit" value="Next" />
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.user,
});

export default connect(mapStateToProps, { updateUser })(BusinessInfo)
