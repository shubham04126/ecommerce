import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Images/logo.png";
import { Icon } from "react-icons-kit";
import { shoppingCart } from "react-icons-kit/feather/shoppingCart";
import { auth } from "../Config/Config";
import { useNavigate } from "react-router-dom";
import "./button.css";
const Navbar = ({ user, totalProducts }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.signOut().then(() => {
      navigate("/login");
    });
  };
  const handleAddProd = () => {
    // console.log('click')
    navigate("/add-products");
  };

  const handleMyProduct = () => {
    // console.log('click')
    navigate("/my-products");
  };

  const sh = {
    cursor: "pointer",
  };
  return (
    <div className="navbar">
      <div className="leftside">
        <div className="logo">
          <img
            src={Logo}
            alt="logo"
            onClick={() => {
              navigate("/");
            }}
            style={sh}
          />
        </div>
        <h3 className="shop-name">
          <b>GL-Mart</b>
        </h3>
      </div>
      <div className="rightside">
        {!user && (
          <>
            <div>
              <Link className="navlink" to="/about">
                About
              </Link>
            </div>
            <div>
              <Link className="navlink" to="/contact">
                Contact
              </Link>
            </div>
            <div>
              <Link className="navlink" to="/signup">
                Sign Up
              </Link>
            </div>
            <div>
              <Link className="navlink" to="/login">
                Login
              </Link>
            </div>
          </>
        )}

        {user && (
          <>
            <div>
              <Link className="navlink" to="/about">
                About
              </Link>
            </div>
            <div>
              <Link className="navlink" to="/contact">
                Contact
              </Link>
            </div>
            <div>
              <Link className="navlink" to="/">
                {user}
              </Link>
            </div>
            <div className="cart-menu-btn">
              <Link className="navlink" to="cart">
                <Icon icon={shoppingCart} size={20} />
              </Link>
              <span className="cart-indicator">{totalProducts}</span>
            </div>
            <div class="frame" onClick={handleLogout}>
              <button class="custom-btn btn-15">Logout</button>
            </div>
            {user === "admin" && (
              <div class="frame">
                <button class="custom-btn btn-12" onClick={handleAddProd}>
                  <span>Products!</span>
                  <span>ADD</span>
                </button>
              </div>
            )}
            {user !== "admin" && (
              <div class="frame">
                <button class="custom-btn btn-12" onClick={handleMyProduct}>
                  <span>MY!</span>
                  <span>Orders</span>
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
