import React from "react";

const Navbar = () => {
  return (
    <nav className="flex-col mt-16">
      <div>
        <ul className="font-medium flex flex-col text-2xl pl-10 md:flex-row md:space-x-20 space-x-reverse">
          <li>
            <a
              href="./pages/Home.js"
              className="block py-2 px-3 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500"
              aria-current="page"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="./pages/Manipulation.js"
              className="block py-2 px-3 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500"
            >
              Future
            </a>
          </li>

          <li>
            <a
              href=""
              className="block py-2 px-3 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500"
            >
              News
            </a>
          </li>

          <li>
            <a
              href="#"
              className="block py-2 px-3 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500"
            >
              Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
