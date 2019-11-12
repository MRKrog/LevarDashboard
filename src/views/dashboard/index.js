import React, { Component } from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import routes from "./routes";
import { connect } from "react-redux";
// import { Auth } from "aws-amplify";
import SideBarDrawer from "../SideBarDrawer/SideBarDrawer";
import Header from "../Header/Header";
import { setLoading } from "../../redux/actions/loading";
import { storeProducts } from "../../redux/actions/storeProducts";

class Dashboard extends Component {

  componentDidMount() {
    const { setLoading, isAuthenticated } = this.props;

    if(!isAuthenticated){
      this.props.history.push("/login");
    } else {
      setLoading(true);
      this.getAllProducts()
    }
  }

  getAllProducts = async () => {
    const { authorization, storeProducts, setLoading } = this.props;
    console.log("authorization on dashboard", authorization);

    const url = 'https://eo9muwoz3m.execute-api.us-east-1.amazonaws.com/dev/products';

    const options = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:3001/',
        'Authorization': `${authorization}`
      },
    }

    try {
      const response = await fetch(url, options)
      console.log(response);
      const data = await response.json()
      storeProducts(data.products)
      setLoading(false);
      console.log('Products', data);
    } catch(error) {
      console.log(error.message);
    }
  }

  render() {
    let path = "/dashboard";

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

export const mapStateToProps = state => ({
  loading: state.loading,
  products: state.products,
  authorization: state.authorization,
  isAuthenticated: state.isAuthenticated,
});

export const mapDispatchToProps = dispatch => ({
  setLoading: data => dispatch(setLoading(data)),
  storeProducts: data => dispatch(storeProducts(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
