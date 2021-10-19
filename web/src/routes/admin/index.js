import { AuthPage } from "views/admin";

const routes = [
  {
    norender: true,
    path: "/login",
    name: "Login",
    component: AuthPage,
    layout: "/auth",
  },
];

export default routes;
