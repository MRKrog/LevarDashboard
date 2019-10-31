import React, { Component } from "react";
// import SimpleReactValidator from "simple-react-validator";
import SidebarAuth from "../layouts/sidebar-auth";
import { Link } from "react-router-dom";
import { Auth } from "aws-amplify";

import { connect } from "react-redux";
import { setAuthorization } from "../../redux/actions/authorization";
import { setLoading } from "../../redux/actions/loading";

export class Login extends Component {
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
    const { setLoading, setAuthorization } = this.props;

    try {
      const data = await Auth.signIn(this.state.name, this.state.password);
      await setAuthorization(data.signInUserSession.idToken.jwtToken)
      console.log('JWT Token', data.signInUserSession.idToken.jwtToken)

      // From AWS Amplify tutorial
      // this.props.userHasAuthenticated(true);
      this.props.history.push("/dashboard");


    } catch (error) {
      alert(error.message);
      // this.setState({ isLoading: false });
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
                <input type="submit" value="Login" />
              </div>
            </form>
            <div className="col-12 mt-5">
              <Link to="/">Forgot Password</Link>
              <Link to="/Signup">Signup</Link>
            </div>
          </div>
        </div>
        <SidebarAuth />
      </>
    );
  }
}

export const mapStateToProps = state => ({
  loading: state.loading,
});

export const mapDispatchToProps = dispatch => ({
  setLoading: data => dispatch(setLoading(data)),
  setAuthorization: data => dispatch(setAuthorization(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
