import React, { Component } from "react";
import AssetTable from "./AssetTable/AssetTable";
import Loading from "../../../components/Loading/Loading";

import { connect } from "react-redux";
import { setLoading } from "../../../redux/actions/loading";

class AssetPipeline extends Component {
  componentDidMount() {
    const { setLoading } = this.props;
    setLoading(true);
    // this.getAllOrders()
    setLoading(false);
  }

  render() {
    const { loading } = this.props;

    return (
      <div className="AssetPipeline">
        {
          loading ? (
            <Loading />
          ) : (
            <div className="AssetContent">
              <AssetTable />
            </div>
          )
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

export default connect(mapStateToProps, mapDispatchToProps)(AssetPipeline);
