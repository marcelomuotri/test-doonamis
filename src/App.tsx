// src/AppRouter.tsx
import { Component } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import SeriesDetailPage from "./pages/SerieDetailPage/SerieDetailPage";
import Layout from "./components/Layout/Layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "series/:id",
        element: <SeriesDetailPage />,
      },
      {
        index: true,
        element: <Navigate to="/home" replace />,
      },
    ],
  },
]);

class AppRouter extends Component {
  render() {
    return <RouterProvider router={router} />;
  }
}

export default AppRouter;
