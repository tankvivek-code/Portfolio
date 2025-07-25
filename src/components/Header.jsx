import { useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ menu }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-extrabold text-blue-700 dark:text-white tracking-tight"
          >
            Vivek
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-10 items-center">
            {menu.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative text-gray-700 dark:text-gray-200 font-medium text-lg transition-all duration-200 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <span className="hover-underline">{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
              className="text-gray-700 dark:text-gray-200 focus:outline-none transition-transform duration-300"
            >
              <svg
                className="h-7 w-7"
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

      {/* Mobile Navigation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 py-4" : "max-h-0 py-0"
        } px-4 bg-white dark:bg-gray-800`}
      >
        <div className="flex flex-col items-center space-y-4 text-center">
          {menu.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="relative text-gray-700 dark:text-gray-200 font-semibold text-base tracking-wide transition-all duration-200 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <span className="hover-underline">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
