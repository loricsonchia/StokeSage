import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log("User signed out");
        navigate("/");
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  };

  return (
    <nav className="flex-col mt-16">
      <div>
        <ul className="font-medium flex flex-col text-3xl pl-10 md:flex-row md:space-x-20 space-x-reverse">
          <li>
            <Link
              to="/home"
              className="block py-2 px-3 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500"
              aria-current="page"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/manipulation"
              className="block py-2 px-3 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500"
            >
              Future
            </Link>
          </li>
          <li>
            <a
              href="https://finance.yahoo.com/topic/stock-market-news/"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 px-3 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500"
            >
              News
            </a>
          </li>
          <li>
            <button
              onClick={handleLogout}
              className="block py-2 px-3 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500"
            >
              Logout
            </button>
            ;
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
