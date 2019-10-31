import React, { Component } from "react";
import ProductsTable from "./ProductsTable/ProductsTable";
import Loading from "../../../components/Loading/Loading";

import { connect } from "react-redux";
import { setLoading } from "../../../redux/actions/loading";
import { testVendor } from '../../../testProductData.js'
// import { fetchData } from "../../utility/fetchData.js";


class Products extends Component {
  componentDidMount() {
    // const { setLoading } = this.props;
    // setLoading(true);
    // this.getAllOrders()
    // setLoading(false);
  }

  // getAllOrders = async () => {
  //   const url = 'https://search-levar-qafpkbpkozcch6cltgihl6z6de.us-east-1.es.amazonaws.com/_search';
  //   try {
  //     const response = await fetch(url)
  //     const data = await response.json()
  //     console.log('data', data);
  //   } catch(error) {
  //     console.log(error.message);
  //   }
  // }

  render() {
    const { loading } = this.props;

    return (
      <div className="Products">
        {
          loading ? (
            <Loading />
          ) : <ProductsTable productData={testVendor}/>
        }
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
