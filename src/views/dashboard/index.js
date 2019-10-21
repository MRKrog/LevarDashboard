import React, { Component } from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import routes from "./routes";
import Sidebar from "../layouts/sidebar";
// import Progressbar from "../layouts/progressbar";

class Dashboard extends Component {
  render() {
    let path = "/dashboard";
    return (
      <>
        <Sidebar />
        <div className="main-container Dashboard">
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
      </>
    );
  }
}

export default Dashboard;
