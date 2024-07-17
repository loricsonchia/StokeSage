import React, { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";
// import Marquee from "../components/Marquee";
import axios from "axios";
import News from "./News";
import Marquee from "../components/Marquee";

const Login = () => {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [error, setError] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  // const { login } = useContext(AuthContext);

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   setError("");
  //   try {
  //     const res = await axios.post("http://localhost:3000/api/auth/login", {
  //       username,
  //       password,
  //     });
  //     const token = res.data.token;
  //     login(token);
  //   } catch (error) {
  //     setError("Invalid username or password");
  //   }
  // };

  // const tickers = [
  //   { symbol: "AAPL", price: "US $170.53", change: "+1.37%" },
  //   { symbol: "S&P 500", price: "US $5001.10", change: "+2.51%" },
  //   { symbol: "TSLA", price: "US $175.23", change: "-0.15%" },
  //   { symbol: "JPM", price: "US $192.94", change: "-0.28%" },
  //   { symbol: "NVDA", price: "US $345.67", change: "-3.80%" },
  // ];

  return (
    <section className="bg-background">
      <header className="flex justify-start rounded-none relative border-b-1 border-white-800">
        <div className="text-8xl flex-shrink-0 pl-10 pt-10 pr-96">
          <h1 className="text-stockSage">StockSage</h1>
        </div>
        <div className="max-h-fit auto-rows-fr gap-6 font-quicksand">
          <div className="col-span-3 border-white border-b-1 border-l-1 rounded-none">
            <Marquee/>
          </div>
          <div className="col-span-3 border-white border-l-1 rounded-none">
            <News> News </News>
          </div>
        </div>
      </header>

      <div class="flex flex-col items-center justify-center pt-16 pb-10 mx-auto md:max-h-screen lg:py-0">
        <a
          href="#"
          class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        ></a>
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-2 space-y-1 md:space-y-2 sm:p-8">
            <h1 class="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign In
            </h1>
            <form class="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="useremail"
                  class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="alexjones@gmail.com"
                  required
                />
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="userpassword"
                  placeholder=""
                  class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    />
                  </div>
                  <div class="ml-3 text-sm">
                    <label
                      for="remember"
                      class="text-gray-500 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800  transition duration-700 hover:scale-125"
              >
                Sign in
              </button>
              <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <a
                  href="#"
                  class="font-medium text-primary-600 hover:underline dark:text-primary-500 dark:text-purple-400"
                >
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>

      <footer className="flex justify-between items-center md:max-h-max">
        <div className="pt-3 pb- 10 pl-10">
          <h3 className="text-white">where finance meets AI</h3>
        </div>
        <div className="pt-3 pb-10 pr-10">
          <h3 className=" text-white">2024</h3>
        </div>
      </footer>
    </section>
  );
};

export default Login;
