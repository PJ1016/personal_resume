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
        element: (
          <Home
            data={{
              name: "Praveen Jayanth Kamatham",
              mobileNumber: "9494039564",
              emailAddress: "praveen.jayanth.1111@gmail.com",
              address: "Hyderabad",
              linkedInAddress: "www.linkedin.com/in/praveen-jayanth-8b0687199",
            }}
          />
        ),
      },
    ],
    { basename }
  );

  return <RouterProvider router={router} />;
}

export default App;
