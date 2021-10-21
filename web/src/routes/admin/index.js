import { AutoStories, Dashboard } from "@mui/icons-material";
import { AuthPage, DashboardPage } from "views/admin";

import CadastrosViews from "./cadastros";

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
    Icon: Dashboard,
    layout: "/admin",
  },
  {
    collapse: true,
    name: "Cadastro",
    state: "CadastroscCollapse",
    views: CadastrosViews,
    Icon: AutoStories,
  },
];

export default routes;
