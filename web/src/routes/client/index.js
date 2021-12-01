import { HomePage } from "views/client";

const routes = [
  {
    norender: true,
    path: "/home",
    name: "Home",
    component: HomePage,
    layout: "/client",
  },
];

export default routes;
