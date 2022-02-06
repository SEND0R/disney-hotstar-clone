import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const isExpand = false;
function Header() {
  function expand() {
    if (isExpand) {
      isExpand = true;
    } else {
      isExpand = true;
    }
  }
  return (
    <div className="header">
      <div className="burger_menu">
        <svg
          className="menuicon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#FFFFFF"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
        </svg>
      </div>
      <Link to={"/"}>
        <div className="logo">
          <img src="assets/images/logo.svg" alt="Logo" />
        </div>
      </Link>
      <nav className="navbar">
        <a href=""> TV</a>
        <a href=""> Movies</a>
        <a href=""> Sports</a>
        <Link to={"/disney"}>Disney+</Link>
        <a href=""> KIDS</a>
      </nav>
      <div className="right_header">
        <div className="searchbar">
          <input
            onClick={expand}
            type="Search"
            autoComplete="off"
            placeholder="search here"
          />
          <span className="search_icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="rgba(249,249,249,0.5)"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </svg>
          </span>
        </div>
        <div className="account_container">
          <button className="login_button subscribe">subscribe</button>
          <Link to={"/login"}>
            <button className="login_button">login</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
