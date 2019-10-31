import React, { Component } from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import routes from "./routes";
import { connect } from "react-redux";

import { setLoading } from "../../redux/actions/loading";

import SideBarDrawer from "../SideBarDrawer/SideBarDrawer";
import Header from "../Header/Header";
// import Test from "./test";

class Dashboard extends Component {
  componentDidMount() {
    const { setLoading } = this.props;
    setLoading(true);
    this.getAllOrders()
    setLoading(false);
  }

  getAllOrders = async () => {
    // https://search-levar-qafpkbpkozcch6cltgihl6z6de.us-east-1.es.amazonaws.com/
    const url = 'https://eo9muwoz3m.execute-api.us-east-1.amazonaws.com/dev/products';
// https://dashboard.levarstaging.com/eyJraWQiOiJ4NFFVXC9jVG1uSnpWWWZ0U25RODBsRUtkQzBRbjJZYjJJeUk1N3djekJTTT0iLCJhbGciOiJSUzI1NiJ9.eyJhdF9oYXNoIjoiS0FXRFM4SExMWFBZMkNLRm50WnRCQSIsInN1YiI6Ijk5Y2Q2MjQ2LThmMDgtNGNkOS1iMmMwLWMwOTliZWE3YjhmNCIsImF1ZCI6IjQ5a2cybWI1djl0YW1zYm9iYmUyNXRrMDI0IiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImV2ZW50X2lkIjoiMTZlMGE1OWEtNTNmYi00MWVjLWIwNDMtYzdiMTFmM2JiNWE3IiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE1NzI1NTEzMTgsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX3VPNDlkVTB5VyIsImNvZ25pdG86dXNlcm5hbWUiOiI5OWNkNjI0Ni04ZjA4LTRjZDktYjJjMC1jMDk5YmVhN2I4ZjQiLCJleHAiOjE1NzI1NTQ5MTgsImlhdCI6MTU3MjU1MTMxOCwiZW1haWwiOiJkYW5pZWwuZXNyaWdAbGV2YXIuY28ifQ.pUUCU7DvvUHP4BI4iW4of3uUB4zZxAhsjkQpPmYKtMx8QO3InmNrh4sOIP7FUNllltL7EqHk5Eri2D4Mib5hxWhMsOWreerrQMNDZlZNWf4EasRh5Cao-QvCMBgVXDvtjnKmb6FsbrKxdh1tLD7Si7375CSnpIZUj-wA9sVt5G5JaVrdRU66sX330CJMgfOQkytTpwG5mNwgPEMz8L1UvWOr6Lahyoy8LDq5dz07jG9UfrJspmsLPE42cjovWSgJkydmtCgcuz7HXf1QMkvbwCS0FsAcwVnl-HoZGi-8IDXirJyz_LuUU7Awq_57RhTOn0Iu4_BK_EmiIRhgCAJ5pg


// eyJraWQiOiJ4NFFVXC9jVG1uSnpWWWZ0U25RODBsRUtkQzBRbjJZYjJJeUk1N3djekJTTT0iLCJhbGciOiJSUzI1NiJ9.eyJhdF9oYXNoIjoicVRjaUtEYm83NmJTdkRIYWdUTG9jUSIsInN1YiI6Ijk5Y2Q2MjQ2LThmMDgtNGNkOS1iMmMwLWMwOTliZWE3YjhmNCIsImF1ZCI6IjQ5a2cybWI1djl0YW1zYm9iYmUyNXRrMDI0IiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImV2ZW50X2lkIjoiYWVkMTRhMGYtYzgxOC00ZDhkLTliN2UtNDY2NjY5Nzg5YjA5IiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE1NzI1NTE1ODgsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX3VPNDlkVTB5VyIsImNvZ25pdG86dXNlcm5hbWUiOiI5OWNkNjI0Ni04ZjA4LTRjZDktYjJjMC1jMDk5YmVhN2I4ZjQiLCJleHAiOjE1NzI1NTUxODgsImlhdCI6MTU3MjU1MTU4OCwiZW1haWwiOiJkYW5pZWwuZXNyaWdAbGV2YXIuY28ifQ.fagaaTTPxav0LxJ1bbZZoSCnerox-WCq_kVAPToDtk_DWbj4nbjP-XN44IoExLFfKHQasSHN6N_Scojw9U24eCx4MaE_sFFO8O3PHSNZWGSu6gIBlha4iUwJZbJUPRrx0UiWEF22ks_r4JbnKD4EUt679zKGqFsU9HPQSkJd7g4jwgK_xN-NCEtWiHiRDHnn2o3so_fEjeHmsqwqILu9kbjbgk2NwIvLe3FGrBNs3EzTx6Hxgang2CJOzmBs9FaLVfYdSczCzWFL9OQk4sCFYkaa1AgUhmPp0Dzj_4ic99fUnEbH5RU7MeEeSNeKXeyKOXIBvPnz-6u-pvwmvaxbiw
// &access_token=eyJraWQiOiJKY1F5ZWRzdWl0WEZpT0pybnRjUGVWcGVyQ3VzTUpmMFVCN0Y0akE1aExFPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI5OWNkNjI0Ni04ZjA4LTRjZDktYjJjMC1jMDk5YmVhN2I4ZjQiLCJldmVudF9pZCI6IjE2ZTBhNTlhLTUzZmItNDFlYy1iMDQzLWM3YjExZjNiYjVhNyIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoib3BlbmlkIGVtYWlsIiwiYXV0aF90aW1lIjoxNTcyNTUxMzE4LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV91TzQ5ZFUweVciLCJleHAiOjE1NzI1NTQ5MTgsImlhdCI6MTU3MjU1MTMxOCwidmVyc2lvbiI6MiwianRpIjoiMDg3ZGI0ZWItZmM0MS00ZmZiLTkyODUtZmU0ZGFkM2I3ZjE0IiwiY2xpZW50X2lkIjoiNDlrZzJtYjV2OXRhbXNib2JiZTI1dGswMjQiLCJ1c2VybmFtZSI6Ijk5Y2Q2MjQ2LThmMDgtNGNkOS1iMmMwLWMwOTliZWE3YjhmNCJ9.OeY0orKSIWPHcCnF9damf7TpoZw669sf6nNjoMvLTvhDa_sE5zuhzhLOF4-q9quUnA-DsSn_mv2EYZJL1CEjgLZCcHASRZfkS92_nYr5qlDtY1SZ9IVBXy8oOfJVb36WK9Ad0cOP7nX8ix4ex_w9cSKMggXbwxt8WJJaV4g4YUG3axLcuHDhl0lDXNjJnxOlRDp3Ys5dk8TImaDp_MRv59zuW7aJlFukidhsZ0ArXodQL2piwYT3D11l9Opc6qsZo74EOjRPPw18ZYgLH5FeQ71n546HDI0k8a81BFrGHjs0u2Pb0dOI1jAY7UVwMzGIkfNwupQovxulIipQ-0MQkA&expires_in=3600&token_type=Bearer
    const options = {
      headers: {
        'Accept': '*/*',
        'Accept-Encoding': 'gzip, deflate',
        'Authorization':'eyJraWQiOiJ4NFFVXC9jVG1uSnpWWWZ0U25RODBsRUtkQzBRbjJZYjJJeUk1N3djekJTTT0iLCJhbGciOiJSUzI1NiJ9.eyJhdF9oYXNoIjoicVRjaUtEYm83NmJTdkRIYWdUTG9jUSIsInN1YiI6Ijk5Y2Q2MjQ2LThmMDgtNGNkOS1iMmMwLWMwOTliZWE3YjhmNCIsImF1ZCI6IjQ5a2cybWI1djl0YW1zYm9iYmUyNXRrMDI0IiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImV2ZW50X2lkIjoiYWVkMTRhMGYtYzgxOC00ZDhkLTliN2UtNDY2NjY5Nzg5YjA5IiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE1NzI1NTE1ODgsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX3VPNDlkVTB5VyIsImNvZ25pdG86dXNlcm5hbWUiOiI5OWNkNjI0Ni04ZjA4LTRjZDktYjJjMC1jMDk5YmVhN2I4ZjQiLCJleHAiOjE1NzI1NTUxODgsImlhdCI6MTU3MjU1MTU4OCwiZW1haWwiOiJkYW5pZWwuZXNyaWdAbGV2YXIuY28ifQ.fagaaTTPxav0LxJ1bbZZoSCnerox-WCq_kVAPToDtk_DWbj4nbjP-XN44IoExLFfKHQasSHN6N_Scojw9U24eCx4MaE_sFFO8O3PHSNZWGSu6gIBlha4iUwJZbJUPRrx0UiWEF22ks_r4JbnKD4EUt679zKGqFsU9HPQSkJd7g4jwgK_xN-NCEtWiHiRDHnn2o3so_fEjeHmsqwqILu9kbjbgk2NwIvLe3FGrBNs3EzTx6Hxgang2CJOzmBs9FaLVfYdSczCzWFL9OQk4sCFYkaa1AgUhmPp0Dzj_4ic99fUnEbH5RU7MeEeSNeKXeyKOXIBvPnz-6u-pvwmvaxbiw',
      },
    }


    try {
      const response = await fetch(url, options)
      const data = await response.json()
      console.log('data', data);
    } catch(error) {
      console.log(error.message);
    }
  }

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

export const mapStateToProps = state => ({
  loading: state.loading
});

export const mapDispatchToProps = dispatch => ({
  setLoading: data => dispatch(setLoading(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
