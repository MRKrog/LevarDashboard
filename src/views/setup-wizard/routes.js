import Welcome from "./welcome";
import BusinessInfo from "./business-info";

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
    redirect: true,
    path: "/",
    to: "/welcome",
    name: "Welcome"
  }
];

export default routes;
