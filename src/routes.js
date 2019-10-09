import SetupWizard from "./views/setup-wizard";
const routes = [
    {
        path: "/setup-wizard",
        name: "SetupWizard",
        component: SetupWizard
    }, {
        redirect: true,
        path: "/",
        to: "/setup-wizard",
        name: "SetupWizard"
    },
];

export default routes;