import SetupWizard from "./views/setup-wizard";
import Login from "./views/auth/login";
import Dashboard from "./views/Dashboard";

const routes = [
    {
        path: "/setup-wizard",
        name: "SetupWizard",
        dashboard: true,
        component: SetupWizard
    },
    {
        path: "/login",
        name: "Login",
        dashboard: false,
        component: Login
    },
    {
      path: "/Dashboard",
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
