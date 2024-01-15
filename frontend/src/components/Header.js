import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaRegUserCircle } from 'react-icons/fa';
import { CiSearch } from "react-icons/ci";
import '../assets/styles/Header.css';

function Header() {
    return(
        <nav className="main-nav">
            <Link to="/" className="nav-title">Elektreka</Link>
            <div className="nav-search-box">
            <input placeholder="Search" className="search-input"></input>
            <button className="search-btn"><CiSearch className="btn-icon"/></button>
            </div>
            {/* <div className="nav-menu">
                <span></span>
                <span></span>
                <span></span>
            </div> */}
            <ul className="main-nav-list">
                <li>
                    <Link to="/account"><FaRegUserCircle className="list-icon"/>Account</Link>
                </li>
                <li>
                    <Link to="/cart"><FaShoppingCart className="list-icon"/>Cart</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Header