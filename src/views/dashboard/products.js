import React, { Component } from "react";
import ProductsTable from "./ProductsTable";
import Loading from "../../components/Loading/Loading";

import { connect } from "react-redux";
import { setLoading } from "../../redux/actions/loading";

import { fetchData } from "../../utility/fetchData.js";


class Products extends Component {

  componentDidMount() {
    // const { setLoading } = this.props;
    console.log('product component loaded');
    console.log("Before", this.props.loading);
    this.props.setLoading(true);
    console.log("After", this.props.loading);
  }

  getAllOrders = () => {
    const url = '';
    const data = fetchData(url)
  }

  render() {
    return (
      <div className="products">
        <Loading />
        <ProductsTable />
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  loading: state.loading
});

export const mapDispatchToProps = dispatch => ({
  setLoading: data => dispatch(setLoading(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
