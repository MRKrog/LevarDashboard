import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from "react-redux";
import * as actions from "../../redux/actions";

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      business_name: "",
      website_url: "",
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { business_name, website_url } = this.state;
    const { updateUser, user, setLoading } = this.props;
    // const url = "http://localhost:3000/api/v1/step1";
    const url = "https://09v84ua8va.execute-api.us-east-1.amazonaws.com/dev/api/v1/step1";

    const fetchOptions = {
      method: "PUT",
      body: JSON.stringify({ email: user.user.email, business_name, website_url }),
      headers:{
        'Content-Type': 'application/json'
      }
    }

    try {
      setLoading(true);
      const response = await fetch(url, fetchOptions)
      console.log('response', response);
      if(!response.ok) { throw new Error(`Fetch Call Cannot Be Made`)}
      const data = await response.json();
      console.log('data', data);
      updateUser({ business_name, website_url })
      setLoading(false);
      this.props.history.push("/setup-wizard/business-info");
      return data;
    } catch (error) {
      console.log('error', error);
      return error;
    }
  }

  render() {
    return (
      <div className="Welcome wizard-content">
        <div className="page-title">
          Let's get to know your business.
        </div>
        <form onSubmit={this.handleSubmit} className="Wizard-Form">
          <div className="Wizard-Input">
            <TextField
              id="outlined-basic"
              label="Business Name"
              margin="normal"
              variant="outlined"
              type="text"
              name="business_name"
              value={this.state.business_name}
              onChange={this.handleInputChange}
            />
            <TextField
              id="outlined-basic"
              label="Website Address"
              margin="normal"
              variant="outlined"
              type="text"
              name="website_url"
              value={this.state.website_url}
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

export const mapStateToProps = state => ({
  user: state.user
});

export const mapDispatchToProps = dispatch => ({
  setLoading: data => dispatch(actions.setLoading(data)),
  updateUser: data => dispatch(actions.updateUser(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
