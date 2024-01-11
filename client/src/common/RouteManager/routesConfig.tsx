import { RouteObject } from "react-router";
import Main from "../../pages/Main/Main";
import Layout from "./Layout";
import Settings from "../../pages/Settings/Settings";

const routesConfig: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Main />,
      },
    ],
  },

  {
    path: "/settings",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Settings />,
      },
    ],
  },
];

export default routesConfig;
