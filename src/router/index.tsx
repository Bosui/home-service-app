// src/router/index.tsx
import RootLayout from "@/components/layout/RootLayout";
import AboutUs from "@/pages/AboutUs";
import BusinessDetails from "@/pages/BusinessDetails";
import ErrorPage from "@/pages/ErrorPage";
import Home from "@/pages/HomePage";
import Services from "@/pages/Services";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/business/:id",
        element: <BusinessDetails />,
      },
    ],
  },
]);

export default router;
