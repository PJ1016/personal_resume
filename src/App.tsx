import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./containers/home";

function App() {
  const isProduction = process.env.NODE_ENV === "production";

  const basename = isProduction ? "/personal_resume" : "/";

  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Home />,
      },
    ],
    { basename }
  );

  return <RouterProvider router={router} />;
}

export default App;
