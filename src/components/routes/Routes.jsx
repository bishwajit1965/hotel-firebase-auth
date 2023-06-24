import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Contact from "../pages/contact/Contact";
import NotFound from "../pages/shared/notFound/NotFound";
import AboutUs from "../pages/about/AboutUs";
import Profile from "../pages/profile/Profile";
import PrivateRoute from "../../restricted/PrivateRoute";
import RoomDetail from "../pages/roomDetail/RoomDetail";
import Footer from "../pages/shared/footer/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/hotel.json"),
      },
      {
        path: "/room-detail/:id",
        element: (
          <PrivateRoute>
            <RoomDetail />
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch("/hotel.json"),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/contact-us",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
