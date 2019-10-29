import React, { Component } from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import routes from "./routes";
import SideBarDrawer from "../SideBarDrawer/SideBarDrawer";
import Header from "../Header/Header";
// import Test from "./test";

class Dashboard extends Component {
  render() {
    let path = "/dashboard";
    // console.log("location", this.props.location);
    return (
      <>
        <div className="SideBarDrawer">
          <SideBarDrawer path={this.props.location.pathname}/>
        </div>
        <div className="main-container">
          <Header />
          <div className="Dashboard">
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
