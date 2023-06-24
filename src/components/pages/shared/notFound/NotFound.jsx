import React from "react";
import { useRouteError } from "react-router-dom";

const NotFound = () => {
  const { error, status } = useRouteError();
  console.log(error);
  return (
    <div className="h-screen md:flex p-2 flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-gray-700 mb-4">
        <span className="text-amber-600 font-bold"> Oops!</span> Page Not Found
      </h1>
      <h2 className="mb-8 font-extrabold text-9xl text-yellow-500">
        <span className="sr-only">Error</span>
        {status || 404}
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        The page you are looking for might have been removed or is temporarily
        unavailable.
      </p>
      <p className="text-2xl font-semibold md:text-3xl text-red-800 mb-8">
        {error?.message}
      </p>
      <a
        href="/"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Go back to homepage
      </a>
    </div>
  );
};

export default NotFound;
