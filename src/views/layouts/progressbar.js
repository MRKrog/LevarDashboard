import React, { Component } from "react";

class Progressbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0
    };

    this.routes = [
      { url: "/setup-wizard/welcome", step: 1 },
      { url: "/setup-wizard/business-info", step: 2 },
      { url: "/setup-wizard/integration", step: 3 },
      { url: "/setup-wizard/final", step: 4 }
    ];

    this.setStep = this.setStep.bind(this);
  }

  componentWillMount() {
    this.unlisten = this.props.history.listen((location, action) => {
      this.setStep(location.pathname);
    });
  }

  componentWillUnmount() {
    this.unlisten();
  }

  componentDidMount() {
    this.setStep(this.props.location.pathname);
  }

  setStep(pathname) {
    console.log(pathname);
    let _route = this.routes.find(route => route.url === pathname);
    if (_route) {
      this.setState({
        step: _route.step
      });
    }
  }

  render() {
    return <div className={"progress-bar step" + this.state.step}></div>;
  }
}

export default Progressbar;
