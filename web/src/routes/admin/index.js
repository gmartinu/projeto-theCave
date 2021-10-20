import { AuthPage, DashboardPage } from "views/admin";

const routes = [
  {
    norender: true,
    path: "/login",
    name: "Login",
    component: AuthPage,
    layout: "/auth",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: DashboardPage,
    layout: "/admin",
  },
];

export default routes;
