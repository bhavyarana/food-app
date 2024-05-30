import React from "react";
import logo from "../assets/logo.webp";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const onlineStatus = useOnlineStatus();

  const cartItems = useSelector((store) => store.cart.items);
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
            {/* <li>
              <Link
                to={"/About"}
                style={{ textDecoration: "none", color: "black" }}
              >
                About
              </Link>
            </li> */}
            <li>
              <Link
                to={"/Cart"}
                style={{ textDecoration: "none", color: "black" }}
              >
                <div
                  className="cart-icon"
                  style={{ position: "relative", color: "red" }}
                >
                  <FaShoppingCart />{" "}
                  <div
                    style={{
                      position: "absolute",
                      top: "-20px",
                      right: "-20px",
                      fontSize: "25px",
                      color: "red",
                    }}
                  >
                    {cartItems.length}
                  </div>
                </div>
              </Link>{" "}
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
