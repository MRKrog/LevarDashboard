import Welcome from "./welcome";
import BusinessInfo from "./business-info";
import Integration from "./integration";
import Final from "./final";

const routes = [
  {
    path: "/welcome",
    name: "Welcome",
    component: Welcome
  },
  {
    path: "/business-info",
    name: "BusinessInfo",
    component: BusinessInfo
  },
  {
    path: "/integration",
    name: "Integration",
    component: Integration
  },
  {
    path: "/final",
    name: "Final",
    component: Final
  },
  {
    redirect: true,
    path: "/",
    to: "/welcome",
    name: "Welcome"
  }
];

export default routes;
