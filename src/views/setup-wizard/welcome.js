import React, { Component } from "react";
import SimpleReactValidator from "simple-react-validator";
import { updateUser } from "../../redux/actions/user";
import { connect } from "react-redux";

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      business_name: "",
      website_url: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
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

  handleSubmit(event) {
    event.preventDefault();
    if (this.validator.allValid()) {
      this.props.updateUser(this.state);
      this.props.history.push("/setup-wizard/business-info");
    } else {
      this.validator.showMessages();
    }
  }

  render() {
    return (
      <div className="welcome">
        <div className="page-title col-12">
          Welcome! <br />
          Let's get to know your Business.
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group col-12">
            <input
              className="form-control"
              type="text"
              name="business_name"
              placeholder="Business Name"
              value={this.state.business_name}
              onChange={this.handleInputChange}
              onBlur={() => this.validator.showMessageFor("business_name")}
            />
            {this.validator.message(
              "business_name",
              this.state.business_name,
              "required"
            )}
          </div>
          <div className="form-group col-12">
            <input
              className="form-control"
              type="text"
              name="website_url"
              placeholder="Website URL"
              value={this.state.website_url}
              onChange={this.handleInputChange}
              onBlur={() => this.validator.showMessageFor("website_url")}
            />
            {this.validator.message(
              "website_url",
              this.state.website_url,
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

export default connect(
  null,
  { updateUser }
)(Welcome);
