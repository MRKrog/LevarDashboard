import React, { Component } from "react";
import SimpleReactValidator from "simple-react-validator";
import SidebarAuth from "../layouts/sidebar-auth";
import { Link } from "react-router-dom";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.validator = new SimpleReactValidator({ autoForceUpdate: this });
  }

  handleInputChange(event, name) {
    const target = event.target;
    const value = target.value;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.validator.allValid()) {
      this.props.history.push("/setup-wizard");
    } else {
      this.validator.showMessages();
    }
  }

  render() {
    return (
      <>
        <div className="main-container">
          <div className="auth">
            <div className="page-logo mt-4">
              <img
                src={require("../../assets/images/levarlogo_black.png")}
                alt="logo"
              ></img>
            </div>
            <div className="page-title col-12 text-center">
              Enter your login to get started
            </div>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group col-12">
                <input
                  className="form-control"
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={this.state.name}
                  onChange={event => this.handleInputChange(event, "name")}
                  onBlur={() => this.validator.showMessageFor("username")}
                />
                {this.validator.message(
                  "username",
                  this.state.name,
                  "required"
                )}
              </div>
              <div className="form-group col-12">
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={event => this.handleInputChange(event, "password")}
                  onBlur={() => this.validator.showMessageFor("password")}
                />
                {this.validator.message(
                  "password",
                  this.state.password,
                  "required|min:8"
                )}
              </div>
              <div className="submit-button d-block">
                <input type="submit" value="Login" />
              </div>
            </form>
            <div className="col-12 mt-5">
              <Link to="/">Forgot Password</Link>
              <Link to="/">Signup</Link>
            </div>
          </div>
        </div>
        <SidebarAuth />
      </>
    );
  }
}
