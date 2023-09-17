import { createBrowserRouter } from "react-router-dom";

import Layout from "../components/layout";
import Home from "../pages/home";
import Error from "../pages/error";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
    errorElement: <Error />,
  },
]);
