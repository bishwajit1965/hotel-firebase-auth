import React, { useContext, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import "./Header.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import { FaBars, FaTimes, FaHotel } from "react-icons/fa";

const Header = () => {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About Us", path: "/about-us" },
    { id: 3, name: "Contact Us", path: "/contact-us" },
    { id: 4, name: "Profile", path: "/profile" },
    { id: 5, name: "Register", path: "/register" },
  ];

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        MySwal.fire({
          position: "top-end",
          icon: "success",
          title: "User has been logged out !!!",
          showConfirmButton: false,
          timer: 2500,
        });
        setSuccess("User is logged out!!!");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setError(errorMessage);
      });
  };
  return (
    <nav className="bg-gray-100 lg:bg-gray-100 md:px-20 w-full shadow-lg sticky top-0 z-50">
      <div className="md:hidden p-2">
        {isNavMenuOpen === true ? (
          <FaBars
            onClick={() => setIsNavMenuOpen(!isNavMenuOpen)}
            className="h-6 w-6 text-blue-500"
          />
        ) : (
          <FaTimes
            onClick={() => setIsNavMenuOpen(!isNavMenuOpen)}
            className="h-6 w-6 text-blue-500"
          />
        )}
      </div>
      <ul className="inline-flex items-center justify-between w-full">
        <Link
          className={`inline-flex items-center invisible md:visible`}
          to="/"
        >
          <FaHotel
            onClick={() => setIsNavMenuOpen(!isNavMenuOpen)}
            className="h-5 w-5 text-blue-500"
          />
          <h2 className="uppercase font-bold">HotelImperial</h2>
        </Link>
        <span
          className={`grid md:flex md:justify-between bg-gray-100 lg:bg-gray-100 p-2 lg:px-16 py-2 md:py-2 absolute md:static duration-1000 w-full ${
            isNavMenuOpen ? "top-14" : "-top-40"
          }`}
        >
          {routes.map((route) => (
            <NavLink className={`font-bold`} to={route.path} key={route.id}>
              {route.name}
            </NavLink>
          ))}
          <Link>
            {user ? (
              <>
                <Link
                  className="text-red-400 font-bold ml-0"
                  onClick={handleLogOut}
                >
                  Logout
                </Link>
              </>
            ) : (
              <>
                <NavLink className="ml-0" to="/login">
                  Login
                </NavLink>
              </>
            )}
          </Link>
          <Link className="invisible md:visible">
            {user && <span>Welcome ! {user.email}</span>}
          </Link>
        </span>
      </ul>
    </nav>
  );
};

export default Header;
