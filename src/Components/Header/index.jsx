import React from "react";
import './Header.css'
import { AiOutlineSearch } from 'react-icons/ai';
import {
  Link
} from "react-router-dom";
import hotstar from "../../Assets/hotstar.svg";
import kids from "../../Assets/kids.svg";

function Header() {
  return (
    <>
      <div className="header">
        <div className="nav-container">
          <div className="headerSectionLeft">
            <div className="menu-wrapper">
              <div className="menu-bar">
                <div className="menu-line"></div>
                <div className="menu-line"></div>
                <div className="menu-line"></div>
              </div>
            </div>
            <img src={hotstar} className="brand-logo" alt="Brand Logo" />
            <div className="link-container">
              <Link to="/" id="" className="nav-link"><p className="nav-link-text">TV</p></Link>
              <Link to="/" id="" className="nav-link"><p className="nav-link-text">Movies</p></Link>
              <Link to="/" id="" className="nav-link"><p className="nav-link-text">Sports</p></Link>
              <Link to="/" id="" className="nav-link"><p className="nav-link-text">Disney+</p></Link>
              <Link to="/" id="" className="nav-link">
                <img src={kids} alt="kids" className="nav-img-kids" />
              </Link>
            </div>


          </div>
          <div className="headerSectionRight">
            <div className="search-input">
              <input type="text" name="search" className="search-input-text" placeholder="Search" />
            </div>
            <AiOutlineSearch className="search-ic" />
            <button className="subscribe-btn">Subscribe</button>
            <a href="http://" className="login-btn">LOGIN</a>
          </div>
        </div>
      </div>

      <div className="dummy-header"></div>
    </>
  );
}

export default Header;
