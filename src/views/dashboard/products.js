import React, { Component } from "react";
import ProductsTable from "./ProductsTable";
import Loading from "../../components/Loading/Loading";
import { fetchData } from "../../utility/fetchData.js";

class Products extends Component {

  componentDidMount() {
    // const { fetchAllProjects } = this.props;
    // this.generatePalette();
    // fetchAllProjects();
    console.log('product component loaded');
    // this.getAllOrders()
  }

//   npm install base-64 --save
// import { encode } from "base-64";
//  const response = await fetch(URL, {
//   method: 'post',
//   headers: new Headers({
//     'Authorization': 'Basic ' + encode(username + ":" + password),
//     'Content-Type': 'application/json'
//   }),
//   body: JSON.stringify({
//     "PassengerMobile": "xxxxxxxxxxxx",
//     "Password": "xxxxxxx"
//   })
// });
// const posts = await response.json();

  getAllOrders = async () => {
    const url = 'https://eo9muwoz3m.execute-api.us-east-1.amazonaws.com/dev/products/findAll';
    let options = {
      method: 'GET',
      headers:{
        'Content-Type': 'application/json',
        'Authorization': 'eyJraWQiOiJ4NFFVXC9jVG1uSnpWWWZ0U25RODBsRUtkQzBRbjJZYjJJeUk1N3djekJTTT0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI3OTk5Y2JmZi0yMmIxLTRhMzUtOWJkNC0zMTFiMzlmZWY0YTciLCJhdWQiOiI2ODBidHBnZGc5anZma2d2M2I4NTl0YjJyMyIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJldmVudF9pZCI6IjhjOWY1MTliLWY2OWItNGMwMC04ZmFiLTczOTJiZjYzYjJmMyIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNTcxNjk1NTI5LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV91TzQ5ZFUweVciLCJjb2duaXRvOnVzZXJuYW1lIjoiNzk5OWNiZmYtMjJiMS00YTM1LTliZDQtMzExYjM5ZmVmNGE3IiwiZXhwIjoxNTcxNjk5MTI5LCJpYXQiOjE1NzE2OTU1MjksImVtYWlsIjoiYmVuLmN1bGx5QGxldmFyLmNvIn0.LaTuPDVhCkr-j53eDvAHeRCCBpXHbYeOjYSID0iMSFtHIoG5S3Jq9uAMKwF8Bbo3jBQaBkOiA8Pb9KLaEmriQhcMK0nLKLhtbzRSgg2nZBET2VG7DdB3r7OpmGdiMOe8p0vgEOtgw4q7btAuGi0vkLbgDlWQ4BTL9yeNW9Ne6oFkBIYQKH-ZawVuvESW--kLSEjFRJLkt2KSvuokEXRRxMkQp0ENvI79Y8lHzi6fhm7rNbMwb-ecXpwNHrc51Hv3dEwBVZQmX9774FFWRZVWfUVkyc4b_ia9zgXsvT9mAUomVSTritdJ7-RZ-qgl87iR3hMiT_srxaHaF59mfjWxcQ'
      }
    }

    try {
      const data = await fetchData(url, options)
      console.log(data);
    } catch (error){
      console.log(error.message);
    }

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

export default Products;
