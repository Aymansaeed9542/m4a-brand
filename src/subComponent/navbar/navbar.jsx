import { useState, useEffect } from "react";
import logo from "./../../assets/m4alogo.png"
import { Link ,NavLink } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`navbar fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/50 backdrop-blur-md shadow-lg py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="">
          <Link to="/">
            <img
              src={logo}
              alt="M4A Logo"
              className={`transition-all duration-300 ${
                scrolled ? 'w-12 sm:w-14 md:w-16' : 'w-15 sm:w-15 md:w-20 lg:w-22 xl:w-25'
              } h-auto max-w-full`}
              style={{ objectFit: "contain" }}
            />
          </Link>
        </div>
        
        {/*toggle for small screens */}
        <div className="flex-none lg:hidden">
          <button
            className={`btn btn-ghost btn-circle ${scrolled ? 'text-gray-800' : 'text-white'}`}
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
          } absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg z-20 lg:hidden`}
        >
          <ul className="menu menu-vertical gap-2 p-4">
            <li>
              <NavLink to="/" className="text-gray-800 hover:text-gray-600">Home</NavLink>
            </li>
            <li>
              <NavLink to="/products" className="text-gray-800 hover:text-gray-600">Products</NavLink>
            </li>
            <li>
              <NavLink to="/aboutus" className="text-gray-800 hover:text-gray-600">About Us</NavLink>
            </li>
          </ul>
        </div>
        
        {/* Main menu for large screens */}
        <div className="hidden lg:flex gap-2 items-center">
          <NavLink 
            to="/" 
            className={`btn btn-ghost transition-colors duration-200 ${
              scrolled ? 'text-gray-800 hover:text-gray-600' : 'text-white hover:text-white'
            }`}
          >
            Home
          </NavLink>
          <NavLink 
            to="/products" 
            className={`btn btn-ghost transition-colors duration-200 ${
              scrolled ? 'text-gray-800 hover:text-gray-600' : 'text-white hover:text-white'
            }`}
          >
            Products
          </NavLink>
          <NavLink 
            to="/aboutus" 
            className={`btn btn-ghost transition-colors duration-200 ${
              scrolled ? 'text-gray-800 hover:text-gray-600' : 'text-white hover:text-white'
            }`}
          >
            About Us
          </NavLink>
          <input
            type="text"
            placeholder="Search"
            className={`input input-bordered w-24 md:w-auto transition-all duration-200 ${
              scrolled ? 'bg-white/80 border-gray-300' : 'bg-white/20 border-white/30 text-white placeholder-white/70'
            }`}
          />
        </div>
      </div>
    </div>
  );
}