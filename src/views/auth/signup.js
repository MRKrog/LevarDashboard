import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from '../../redux/actions';

import { Link } from "react-router-dom";
import { Auth } from "aws-amplify";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Verify from '../../components/Verify/Verify';

import bgImage from "../../assets/images/backgroundImage/arSignin.jpg";

export class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      isVerified: null,
      authenticationCode: ""
    };
  }

  checkVerified = async (event) => {
    event.preventDefault();
    const { name, authenticationCode, password } = this.state;
    const { setLoading, updateUser } = this.props;
    try {
      console.log(name, authenticationCode);
      setLoading(true)
      await Auth.confirmSignUp(name, authenticationCode)
      await Auth.signIn(name, password);
      setLoading(false)
      this.props.history.push("/setup-wizard");
    } catch(error) {
      console.log('error: ', error)
    }
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
     [name]: value
    })
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { name } = this.state;
    const { setLoading, updateUser } = this.props;

    try {
      const newUser = await Auth.signUp({
        username: this.state.name,
        password: this.state.password
      });

      console.log('new user', newUser);
      const userStatus = await newUser.userConfirmed
      updateUser({ email: name })
      this.setState({
        isVerified: userStatus
      })
    } catch (error) {
      alert(error.message);
    }
  }

  //
  // <ReactCodeInput type="number"
  //                 className="Confirmation"
  //                 fields={6}
  //                 name="authenticationCode"
  //                 value={this.state.authenticationCode}
  //                 onChange={this.handleInputChange}
  // />

  render() {
    return (
      <div className="auth-container">
        <div className="background-image" style={{ backgroundImage: `url(${bgImage})` }}></div>
        <div className="auth">
          <div className="page-logo">
            <img src={require("../../assets/images/levarlogo_white.png")} alt="logo"></img>
          </div>
          <form noValidate autoComplete="off">
            {
              this.state.isVerified === null &&
              <div className="Input-Fields">
                <TextField
                  id="outlined-basic"
                  label="Username"
                  margin="normal"
                  variant="outlined"
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleInputChange}
                />
                <TextField
                  id="outlined-basic"
                  label="Password"
                  margin="normal"
                  variant="outlined"
                  type="text"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                />
                <div className="submit-button">
                  <Button type="submit" variant="contained" onClick={this.handleSubmit}>Sign Up</Button>
                </div>
              </div>
            }
            {
              this.state.isVerified === false &&
              <div className="Input-Fields">
                <TextField
                  id="outlined-basic"
                  label="Code"
                  margin="normal"
                  variant="outlined"
                  type="text"
                  name="authenticationCode"
                  value={this.state.authenticationCode}
                  onChange={this.handleInputChange}
                />
                <div className="submit-button">
                  <Button type="submit"
                          variant="contained"
                          onClick={this.checkVerified}>
                          Verify
                  </Button>
                </div>
              </div>
            }
          </form>
          <div className="form-update">
            <Link to="/login">Login</Link>
            <Link to="/">Forgot Password</Link>
          </div>
        </div>
        {
          this.state.isVerified === false &&
          <Verify />
        }
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  loading: state.loading,
});

export const mapDispatchToProps = dispatch => ({
  setLoading: data => dispatch(actions.setLoading(data)),
  updateUser: data => dispatch(actions.updateUser(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
