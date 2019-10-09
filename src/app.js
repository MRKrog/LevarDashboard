import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import routes from "./routes";
import Sidebar from "./views/layouts/sidebar";
import Container from "./views/container";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Container>
            <Sidebar />
            <div className="main-container">
              <Switch>
                {routes.map((prop, key) => {
                  if (prop.redirect)
                    return <Redirect from={prop.path} to={prop.to} key={key} />;
                  return (
                    <Route
                      path={prop.path}
                      key={key}
                      render={props => <prop.component {...props} />}
                    />
                  );
                })}
              </Switch>
            </div>
          </Container>
        </Router>
      </Provider>
    );
  }
}

export default App;
