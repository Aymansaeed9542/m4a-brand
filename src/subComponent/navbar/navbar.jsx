import { useState } from "react";
import logo from "./../../assets/m4alogo.png"
import { Link ,NavLink } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar bg-base-100 shadow-sm flex flex-column py-5 px-10 flex-row justify-between">
      <div className="">
        <Link to="/">
          <img
            src={logo}
            alt="M4A Logo"
            className="w-15 sm:w-15 md:w-20 lg:w-22 xl:w-25 h-auto max-w-full"
            style={{ objectFit: "contain" }}
          />
        </Link>
      </div>
      {/*toggle for small screens */}
      <div className="flex-none lg:hidden">
        <button
          className="btn btn-ghost btn-circle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {/* Main menu for small screens */}
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } absolute top-16 right-4 bg-base-100 rounded-box shadow-lg z-20 lg:hidden`}
      >
        <ul className="menu menu-vertical gap-2">
          <li>
            <NavLink to ="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
          <li>
            <NavLink to="/aboutus">About Us</NavLink>
          </li>
        </ul>
      </div>
      {/* Main menu for large screens */}
      <div className="hidden lg:flex gap-2 items-center">
        <NavLink to="/" className="btn btn-ghost">
          Home
        </NavLink>
        <NavLink to="/products" className="btn btn-ghost">
          Products
        </NavLink>
        <NavLink to="/aboutus" className="btn btn-ghost">
          About Us
        </NavLink>
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-24 md:w-auto"
        />
      </div>
    </div>
  );
}