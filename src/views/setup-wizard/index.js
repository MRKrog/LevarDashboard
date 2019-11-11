import React, { Component } from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import routes from "./routes";
import Sidebar from "../layouts/sidebar";
import Progressbar from "../layouts/progressbar";

class SetupWizard extends Component {
  render() {
    let path = "/setup-wizard";
    return (
      <>
        <Sidebar {...this.props} />
        <div className="main-container">
          <div className="setup-wizard">
            <Progressbar {...this.props} />
            <div className="wizard-container">
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
        </div>
      </>
    );
  }
}

export default SetupWizard;
