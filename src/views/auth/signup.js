import React, { Component } from "react";
import { Link } from "react-router-dom";
import Amplify, { Auth, Hub } from "aws-amplify";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Verify from '../../components/Verify/Verify';

import bgImage from "../../assets/images/backgroundImage/arSignin.jpg";


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      isVerified: null,
    };
  }

  // daniel.esrig@levar.co
  // 57hsDiBl!

  componentDidMount(){
    // console.log('on component mount');
    // check the current user when the App component is loaded
    // Auth.currentAuthenticatedUser().then(user => {
    //   console.log(user);
    //   this.setState({authState: 'signedIn'});
    // }).catch(e => {
    //   console.log(e);
    //   this.setState({authState: 'signIn'});
    // });
  }

  checkVerified = async () => {
    const { isVerified } = this.state;
    // if()
    let info = await Auth.currentUserInfo();
    console.log('info', info);
    // let result = await Auth.verifyCurrentUserAttributeSubmit(this.state.name, 'abc123');
    // console.log('in check');
    // this.props.history.push("/setup-wizard");
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
     [name]: value
    })
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newUser = await Auth.signUp({
        username: this.state.name,
        password: this.state.password
      });

      const data = await Auth.signIn(this.state.name, this.state.password);

      console.log('new user', newUser);
      console.log('sign in user', data);
      
      const userStatus = await newUser.userConfirmed
      this.setState({
        isVerified: userStatus
      })


      // this.props.history.push("/setup-wizard");
    } catch (e) {
      alert(e.message);
    }
  }

  render() {
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
                id="outlined-basic"
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
                id="outlined-basic"
                label="Password"
                margin="normal"
                variant="outlined"
                type="text"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="submit-button">
              <Button type="submit" variant="contained">Sign Up</Button>
            </div>
          </form>
          <div className="form-update">
            <Link to="/login">Login</Link>
            <Link to="/">Forgot Password</Link>
          </div>
        </div>
        {
          this.state.isVerified === false &&
          <Verify handleVerify={this.checkVerified} />
        }
      </div>
    );
  }
}
