import React, { Component } from "react";
import { withRouter } from "react-router";

class Container extends Component {
  componentWillMount() {
    this.unlisten = this.props.history.listen((location, action) => {
      console.log("on route change");
    });
  }
  componentWillUnmount() {
    this.unlisten();
  }
  render() {
    return <div className="app">{this.props.children}</div>;
  }
}

export default withRouter(Container);
