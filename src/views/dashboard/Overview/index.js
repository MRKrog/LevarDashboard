import React, { Component } from "react";
import OverviewTable from "./OverviewTable/OverviewTable";
import Loading from "../../../components/Loading/Loading";

import { connect } from "react-redux";
import { setLoading } from "../../../redux/actions/loading";


class Overview extends Component {
  componentDidMount() {
    const { setLoading } = this.props;
    setLoading(true);
    // this.getAllOrders()
    setLoading(false);
  }

  render() {
    const { loading } = this.props;

    return (
      <div className="Overview tableContent">
        {
          loading ? (
            <Loading />
          ) : (
            <OverviewTable />
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

export default connect(mapStateToProps, mapDispatchToProps)(Overview);
