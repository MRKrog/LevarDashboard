import Overview from "./Overview/index";
import Products from "./Products/index";
import Settings from "./Settings";
import AssetPipeline from "./AssetPipeline";
import Integrations from "./Integrations";

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
    path: "/integrations",
    name: "integrations",
    component: Integrations
  },
  {
    path: "/assetpipeline",
    name: "Asset Pipeline",
    component: AssetPipeline
  },
  {
    path: "/settings",
    name: "settings",
    component: Settings
  },
  {
    redirect: true,
    path: "/",
    to: "/overview",
    name: "overview",
    component: Overview
  }
];

export default routes;
