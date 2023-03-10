import React from "react";
import { useLocation, Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useGlobalContext } from "../Context";
const Nav = () => {
  const currentRoute = useLocation().pathname.toLowerCase();
  console.log(currentRoute);
  const { total, amount } = useGlobalContext();

  return (
    <nav className="navbar">
      <div className="nav-center">
        <li>
          <Link to="/" className="logo">
            Fuzzion-Hub
          </Link>
        </li>
        <ul className="nav-links">
          <li className={currentRoute.includes("home") ? "tab active" : "tab"}>
            <Link to="/">Home</Link>
          </li>

          <li className={currentRoute.includes("men") ? "tab active" : "tab"}>
            <Link to="/men">Men</Link>
          </li>

          <li className={currentRoute.includes("come") ? "tab active" : "tab"}>
            <Link to="/come">Women</Link>
          </li>

          <li
            className={
              currentRoute.includes("electronics") ? "tab active" : "tab"}>
            <Link to="/electronics">Electronics</Link>
          </li>

          <li className={currentRoute.includes("jewelery") ? "tab active" : "tab"}>
            <Link to="/jewelery">Jewelery</Link>
          </li>

          <li className={currentRoute.includes("about") ? "tab active" : "tab"}>
            <Link to="/about">About</Link>
          </li>

        </ul>

        <div className="main_cart">
          <Link to="/cart">
            <div className="cart_amount">{amount}</div>
            <FaShoppingCart />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
