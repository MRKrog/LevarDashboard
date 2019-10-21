import Overview from "./overview";
import Products from "./products";

const routes = [
  {
    path: "/overview",
    name: "overview",
    component: Overview
  },
  {
    path: "/products",
    name: "Products",
    component: Products
  },
  {
    redirect: true,
    path: "/",
    to: "/overview",
    name: "Overview"
  }
];

export default routes;
