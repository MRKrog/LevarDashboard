import React, { Component } from "react";
import SidebarAuth from "../layouts/sidebar-auth";
import { Link } from "react-router-dom";
import { Auth } from "aws-amplify";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    // this.validator = new SimpleReactValidator({ autoForceUpdate: this });
  }

  handleInputChange(event, name) {
    const target = event.target;
    const value = target.value;

    this.setState({
      [name]: value
    });
  }

  // daniel.esrig@levar.co
  // 57hsDiBl!

  async handleSubmit(event) {
    event.preventDefault();

    try {
      const data = await Auth.signIn(this.state.name, this.state.password);
      console.log('successful sign in', data)
      // this.props.userHasAuthenticated(true);
      this.props.history.push("/setup-wizard");

      // this.props.history.push('/');
    } catch (error) {
      alert(error.message);
      // this.setState({ isLoading: false });
    }
  }

  // handleSubmit = async (event) => {
  // event.preventDefault();
  //
  // this.setState({ isLoading: true });
  //
  // try {
  //   await Auth.signIn(this.state.email, this.state.password);
  //   this.props.userHasAuthenticated(true);
  //   this.props.history.push('/');
  // } catch (e) {
  //   alert(e.message);
  //   this.setState({ isLoading: false });
  // }
  // };

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
                />
              </div>
              <div className="form-group col-12">
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={event => this.handleInputChange(event, "password")}
                />
              </div>
              <div className="submit-button d-block">
                <input type="submit" value="Sign Up" />
              </div>
            </form>
            <div className="col-12 mt-5">
              <Link to="/">Forgot Password</Link>
              <Link to="/login">Login</Link>
            </div>
          </div>
        </div>
        <SidebarAuth />
      </>
    );
  }
}
