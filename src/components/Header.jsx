import { useState } from "react";
import { Link } from "react-router";

const Header = ({ menu }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/"
            className="text-xl font-bold text-blue-700 dark:text-white"
          >
            My Portfolio
          </Link>

          <nav className="hidden md:flex gap-8 items-center">
            {menu.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
              className="text-gray-700 dark:text-gray-200 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3 bg-white dark:bg-gray-800 shadow">
          {menu.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="block text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
