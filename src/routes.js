import SetupWizard from "./views/setup-wizard";
import Login from "./views/auth/login";
import Signup from "./views/auth/signup";
import Dashboard from "./views/Dashboard";

const routes = [
    {
      path: "/setup-wizard",
      name: "SetupWizard",
      dashboard: true,
      component: SetupWizard
    },
    {
      path: "/signup",
      name: "Signup",
      dashboard: false,
      component: Signup
    },
    {
      path: "/login",
      name: "Login",
      dashboard: false,
      component: Login
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard
    },
    {
      redirect: true,
      path: "/",
      to: "/login",
      name: "login"
    },
];

export default routes;
