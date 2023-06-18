import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import ContextLayout from "./components/contextLayout";
import { router } from "./libs/router.jsx";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextLayout>
      <RouterProvider router={router} />
    </ContextLayout>
  </React.StrictMode>
);
