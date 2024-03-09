import React from "react";
import logo from "../assets/logo.webp";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  return (
    <>
      <header>
        <div className="logo">
          <Link to={"/"}>
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <nav className="navbar">
          <ul>
            <li>{onlineStatus === true ? "🟢" : "🔴"}</li>
            <li>
              <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/About"}
                style={{ textDecoration: "none", color: "black" }}
              >
                About
              </Link>
            </li>
            <li>Cart</li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
