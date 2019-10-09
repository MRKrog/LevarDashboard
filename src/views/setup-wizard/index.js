import React, { Component } from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import routes from "./routes";
import Progressbar from "../layouts/progressbar";
import { withRouter } from "react-router";

class SetupWizard extends Component {
  render() {
    let path = "/setup-wizard";
    return (
      <div className="setup-wizard">
        <Progressbar {...this.props} />
        <div className="container">
          <Switch>
            {routes.map((prop, key) => {
              if (prop.redirect)
                return (
                  <Redirect
                    from={path + prop.path}
                    to={path + prop.to}
                    key={key}
                  />
                );
              return (
                <Route
                  path={path + prop.path}
                  key={key}
                  render={props => <prop.component {...props} />}
                />
              );
            })}
          </Switch>
        </div>
      </div>
    );
  }
}

export default SetupWizard;
