import React, { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { user, userLogIn, changeUserPassword, googleSignIn, gitHubSignIn } =
    useContext(AuthContext);
  const emailRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const from = location.state?.from?.pathname || "/";

  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    // User login
    userLogIn(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setSuccess("User login is successful !!!");

        MySwal.fire({
          position: "top-end",
          icon: "success",
          title: "User login successful !!!",
          showConfirmButton: false,
          timer: 2500,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
    form.reset();
    // Remove message
    setSuccess("");
    setError("");
  };

  const handleResetPassword = () => {
    const email = emailRef.current.value;
    console.log(email);
    if (!email) {
      MySwal.fire({
        position: "top-end",
        icon: "success",
        title: "Email field is blank !!!",
        showConfirmButton: false,
        timer: 2500,
      });
    }
    changeUserPassword(email)
      .then(() => {
        MySwal.fire({
          position: "top-end",
          icon: "success",
          title: "Please verify your email address.",
          showConfirmButton: false,
          timer: 2500,
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  const handleGitHubLogIn = () => {
    gitHubSignIn()
      .then((result) => {
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleLogIn}
        className="bg-white shadow-md rounded md:px-8 pt-6 pb-8 mb-4 md:w-80 w-full p-2"
      >
        <div className="mb-2">
          <h2 className="text-2xl font-bold text-blue-600">Login Please</h2>
        </div>
        <div className="mb-2">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            name="email"
            ref={emailRef}
            placeholder="Email"
          />
        </div>
        <div className="mb-2">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            name="password"
            placeholder="Password"
          />
        </div>
        <div className="my-2">
          <p className="">
            <small>
              Forgot password ?{" "}
              <Link onClick={handleResetPassword}>
                {" "}
                <span className="text-indigo-600">Reset Password</span>
              </Link>{" "}
            </small>
          </p>
        </div>
        <div className="my-2">
          <p>
            New to this site ?{" "}
            <Link to="/register">
              <span className="text-indigo-600">Register</span>
            </Link>{" "}
          </p>
        </div>
        <div className="my-2">
          {error && <p className="text-red-500"> {error}</p>}
          {success && <p className="text-green-500"> {success}</p>}
        </div>

        <div className="flex items-center justify-center mb-2">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="submit"
          >
            Log in
          </button>
        </div>

        <div className="w-full mb-2">
          <p>
            <span className="font-bold text-amber-600 mr-2">OR</span>Continue
            with:
          </p>
          <button
            onClick={handleGoogleSignIn}
            type="submit"
            className="border border-indigo-100 px-4 py-1 inline-flex items-center w-full rounded-md"
          >
            <FaGoogle className="mr-2" />
            Google Login
          </button>
        </div>
        <div className="w-full mb-2">
          <button
            onClick={handleGitHubLogIn}
            type="submit"
            className="border border-indigo-100 px-4 py-1 inline-flex items-center w-full rounded-md"
          >
            <FaGithub className="mr-2" />
            GitHub Login
          </button>
        </div>
        <div className="w-full">
          <button
            type="submit"
            className="border border-indigo-100 px-4 py-1 inline-flex items-center w-full rounded-md"
          >
            <FaFacebook className="mr-2" />
            Facebook Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
