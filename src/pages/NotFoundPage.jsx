import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-center px-4">
      <h1 className="text-[120px] md:text-[150px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-yellow-500 animate-bounce">
        404
      </h1>
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-700 dark:text-gray-200">
        Oops! Page Not Found
      </h2>
      <p className="mt-3 text-gray-500 dark:text-gray-400">
        The page you're looking for might have been removed or doesn't exist.
      </p>

      <Link
        to="/"
        className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-md"
      >
        ⬅️ Go Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
