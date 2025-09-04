import React from "react";
import classes from "./navbar.module.css";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import HamburgerMenu from "./HamburgerMenu"; // Import the new component

const Navbar = ({ search, setSearch, fetchRecipes }) => {
  const handleSearch = (e) => {
    e.preventDefault();
    fetchRecipes(search);
  };

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        {/* Left Section - Logo */}
        <Link to="/" className={classes.left}>
          Recipe Ideas
        </Link>

        {/* Center Section - Search Bar */}
        <form onSubmit={handleSearch} className={classes.centerSearch}>
          <input
            type="text"
            value={search}
            placeholder="Search by ingredient..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit">
            <AiOutlineSearch />
          </button>
        </form>

        {/* Right Section - Navigation Links (Visible on desktop) */}
        <ul className={classes.rightLinks}>
          <li className={classes.listItem}><Link to="/">Home</Link></li>
          <li className={classes.listItem}><Link to="/about">About</Link></li>
          <li className={classes.listItem}><Link to="/contact">Contact</Link></li>
          <li className={classes.listItem}><Link to="/services">Services</Link></li>
        </ul>

        {/* Hamburger menu for mobile */}
        <div className={classes.mobileNav}>
          <HamburgerMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;