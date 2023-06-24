import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useState } from "react";

const Register = () => {
  const { user, userRegistration, verifyEmailAddress } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    console.log(name, email, password, confirmPassword);

    // Validation
    if (password.length < 6) {
      setError("Password must be 6 c5ar");
      return;
    } else if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    } else if (!/(?=.*[A-Z])/.test(password)) {
      setError("Please add at least one uppercase letter.");
      return;
    } else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
      setError("Please add at least two numbers.");
    } else if (password.length < 6) {
      setError("Please add at least 6 characters.");
    }

    // User  registration
    userRegistration(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(userCredential.user);
        setSuccess("User registration is successful!!!");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });

    // Verify email address
    verifyEmailAddress()
      .then(() => {})
      .catch(() => {});
    form.reset();
    // Remove message
    setSuccess("");
    setError("");
  };

  return (
    <div className="md:flex justify-center items-center h-screen">
      <form
        onSubmit={handleRegister}
        className="bg-white shadow-md rounded md:px-8 md:pt-6 md:pb-8 mb-4 md:w-80 p-2"
      >
        <div className="mb-2">
          <h2 className="text-2xl font-bold text-blue-600">Register Please</h2>
        </div>
        <div className="mb-2">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            name="name"
            placeholder="Name"
          />
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
        <div className="mb-6">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="confirm-password"
          >
            Confirm Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="confirm-password"
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
          />
        </div>
        <div className="my-2">
          <p>
            Already a member ?{" "}
            <Link to="/login">
              <span className="text-indigo-600">Login</span>
            </Link>{" "}
          </p>
        </div>
        <div className="my-2">
          {error && <p className="text-red-500"> {error}</p>}
          {success && <p className="text-green-500"> {success}</p>}
        </div>

        <div className="flex items-center justify-center w-full">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="submit"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
