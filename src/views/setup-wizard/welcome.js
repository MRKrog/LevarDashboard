import React, { Component } from "react";

export default class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      business_name: "",
      website_url: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    this.props.history.push("/setup-wizard/business-info");
    event.preventDefault();
  }

  render() {
    return (
      <div className="welcome">
        <div className="page-title">
          Welcome! <br />
          Let's get to know your Business.
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="business_name"
              placeholder="Business Name"
              value={this.state.value}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="website_url"
              placeholder="Website URL"
              value={this.state.value}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group text-right d-block pr-5">
            <input type="submit" value="Next" />
          </div>
        </form>
      </div>
    );
  }
}
