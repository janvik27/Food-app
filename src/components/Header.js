import { useContext, useState } from "react";
import logo from "../assets/images/logo.png";
import useInternetStatus from "../utils/hooks/useInternetStatus";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext.js";
import { useSelector } from "react-redux";

const Logo = () => {
  return (
    <a href="/">
      <img alt="logo" src={logo} className=" h-full w-24 py-2 "></img>
    </a>
  );
};

const Header = () => {
  // custom hook
  const internetStatus = useInternetStatus();

  // state variables
  const [isLoggedin, setIsLoggedIn] = useState(false);

  // user context
  const { user } = useContext(UserContext);

  // redux-store
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  return (
    <div className="flex  px-3 justify-between  bg-gray-200 shadow-lg sticky top-0">
      <Logo />
      <div>
        <ul className="flex  py-7  w-auto">
          <Link to="/">
            <li className="px-2 mx-6 hover:bg-red-300/30 rounded-md font-semibold text-gray-900">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="px-2  mx-6 hover:bg-red-300/30 rounded-md font-semibold text-gray-900">
              About us
            </li>
          </Link>
          <Link to="/contact">
            <li className="px-2 mx-6 hover:bg-red-300/30 rounded-md font-semibold text-gray-900">
              Contact{" "}
            </li>
          </Link>
          <Link to="/cart">
            <li
              data-testid="cartLength"
              className="px-2 mx-6 hover:bg-red-300/30 rounded-md font-semibold text-gray-900"
            >
              Cart - {cartItems.length} items
            </li>
          </Link>
          <Link to="/instamart">
            <li className="px-2 mx-6 hover:bg-red-300/30 rounded-md font-semibold text-gray-900">
              Instamart
            </li>
          </Link>
        </ul>
      </div>
      <div className="flex">
        <h1 className=" self-center">{internetStatus ? "🟢" : "🔴"}</h1>
        <span className=" self-center text-slate-800 font-semibold text-sm">
          {user.name}
        </span>
        {isLoggedin ? (
          <button
            className="w-16 bg-red-200 font-semibold text-lg"
            onClick={() => setIsLoggedIn(false)}
          >
            Logout
          </button>
        ) : (
          <button
            className="w-16 bg-red-200 font-semibold text-lg"
            onClick={() => setIsLoggedIn(true)}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
