import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./containers/home";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TextEditor from "./components/textEditor";

function App() {
  const isProduction = process.env.NODE_ENV === "production";

  const basename = isProduction ? "/personal_resume" : "/";

  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/textEditor",
        element: <TextEditor />,
      },
    ],
    { basename }
  );

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <RouterProvider router={router} />
    </LocalizationProvider>
  );
}

export default App;
