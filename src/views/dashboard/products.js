import React, { Component } from "react";
import ProductsTable from "./ProductsTable";
import Loading from "../../components/Loading/Loading";

import { connect } from "react-redux";
import { setLoading } from "../../redux/actions/loading";
import { testVendor } from '../../testProductData.js'
// import { fetchData } from "../../utility/fetchData.js";


class Products extends Component {

  componentDidMount() {
    // const { setLoading } = this.props;
    console.log('product component loaded', testVendor);
    // this.props.setLoading(true);
  }

  getAllOrders = () => {
    // const url = '';
    // const data = fetchData(url)
  }

  render() {
    const { loading } = this.props;

    return (
      <div className="products">
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
