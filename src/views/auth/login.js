import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Auth } from "aws-amplify";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { connect } from "react-redux";
import { setAuthorization } from "../../redux/actions/authorization";
import { setLoading } from "../../redux/actions/loading";
import { setLoginStatus } from "../../redux/actions/setLogin";

// import { useStyles } from "./authUtility.js"
import bgImage from "../../assets/images/backgroundImage/arBG.jpg"


export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      status: "",
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
     [name]: value
    })
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { setLoading, setAuthorization } = this.props;

    try {
      const data = await Auth.signIn(this.state.name, this.state.password);
      setLoading(true)
      await setAuthorization(data.signInUserSession.idToken.jwtToken)
      setLoading(false)
      console.log('JWT Token', data)
      this.props.setLoginStatus(true);
      this.props.history.push("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  }

  render() {

    // const { name, password } = this.state;

    return (
      <div className="auth-container">
        <div className="background-image" style={{ backgroundImage: `url(${bgImage})` }}></div>
        <div className="auth">
          <div className="page-logo">
            <img src={require("../../assets/images/levarlogo_white.png")} alt="logo"></img>
          </div>
          <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
            <div>
              <TextField
                label="Username"
                margin="normal"
                variant="outlined"
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleInputChange}
              />
            </div>
            <div>
              <TextField
                label="Password"
                margin="normal"
                variant="outlined"
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="submit-button">
              <Button type="submit" variant="contained">Login</Button>
            </div>
          </form>
          <div className="form-update">
            <Link to="/Signup">Sign Up</Link>
            <Link to="/">Forgot Password</Link>
          </div>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  loading: state.loading,
  isAuthenticated: state.isAuthenticated,
});

export const mapDispatchToProps = dispatch => ({
  setLoading: data => dispatch(setLoading(data)),
  setAuthorization: data => dispatch(setAuthorization(data)),
  setLoginStatus: data => dispatch(setLoginStatus(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
