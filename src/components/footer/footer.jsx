import React from 'react'
import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white text-center">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-1 text-center">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-4">M4A Brand</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Elevating everyday style with premium comfort. Built for movement, crafted to last.
              </p>
              
              {/* Social Media Icons */}
              <div className="flex flex-wrap gap-3 justify-center ">
                <a 
                  href="https://facebook.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-500 hover:scale-110 shadow-lg"
                  aria-label="Follow us on Facebook"
                >
                  <FaFacebookF className="text-white text-lg" />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-all duration-500 hover:scale-110 shadow-lg"
                  aria-label="Follow us on Instagram"
                >
                  <FaInstagram className="text-white text-lg" />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors duration-500 hover:scale-110 shadow-lg"
                  aria-label="Follow us on Twitter"
                >
                  <FaTwitter className="text-white text-lg" />
                </a>
                <a 
                  href="https://tiktok.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-900  ho rounded-full flex items-center justify-center hover:bg-gray-950 transition-colors duration-500 hover:scale-110 shadow-lg"
                  aria-label="Follow us on TikTok"
                >
                  <FaTiktok className="text-white text-lg" />
                </a>
                <a 
                  href="https://wa.me/201234567890" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-500 hover:scale-110 shadow-lg"
                  aria-label="Contact us on WhatsApp"
                >
                  <FaWhatsapp className="text-white text-lg" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className=''>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 flex flex-col justify-between items-center">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center">
                  <i className="fas fa-home mr-2 text-sm"></i>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center">
                  <i className="fas fa-shopping-bag mr-2 text-sm"></i>
                  Products
                </Link>
              </li>
              <li>
                <Link to="/aboutus" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center">
                  <i className="fas fa-info-circle mr-2 text-sm"></i>
                  About Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center">
                  <i className="fas fa-shipping-fast mr-2 text-sm"></i>
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center">
                  <i className="fas fa-undo mr-2 text-sm"></i>
                  Returns
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Customer Service</h4>
            <ul className="space-y-3 flex flex-col justify-between items-center">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center">
                  <i className="fas fa-question-circle mr-2 text-sm"></i>
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center">
                  <i className="fas fa-headset mr-2 text-sm"></i>
                  Contact Support
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center">
                  <i className="fas fa-shield-alt mr-2 text-sm"></i>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center">
                  <i className="fas fa-file-contract mr-2 text-sm"></i>
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center">
                  <i className="fas fa-credit-card mr-2 text-sm"></i>
                  Payment Methods
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className='flex flex-col justify-between items-center '>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <i className="fas fa-map-marker-alt text-white mr-3 mt-1"></i>
                <div>
                  <p className="text-gray-300">
                    123 Corniche Road<br />
                    Alexandria, Egypt 21500
                  </p>
                </div>
              </div>
              
              <div className="flex items-center">
                <i className="fas fa-phone text-white mr-3"></i>
                <a href="tel:+201234567890" className="text-gray-300 hover:text-white transition-colors duration-300">
                  +20 123 456 7890
                </a>
              </div>
              
              <div className="flex items-center">
                <i className="fas fa-mobile-alt text-white mr-3"></i>
                <a href="tel:+201098765432" className="text-gray-300 hover:text-white transition-colors duration-300">
                  +20 109 876 5432
                </a>
              </div>
              
              <div className="flex items-center">
                <i className="fas fa-envelope text-white mr-3"></i>
                <a href="mailto:info@m4abrand.com" className="text-gray-300 hover:text-white transition-colors duration-300">
                  info@m4abrand.com
                </a>
              </div>
              
              <div className="flex items-center">
                <i className="fas fa-clock text-white mr-3"></i>
                <p className="text-gray-300">
                  Sun - Thu: 9:00 AM - 10:00 PM<br />
                  Fri - Sat: 10:00 AM - 11:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <p>&copy; 2024 M4A Brand. All rights reserved.</p>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center text-gray-400">
                <i className="fas fa-lock mr-2"></i>
                <span>Secure Payment</span>
              </div>
              <div className="flex items-center text-gray-400">
                <i className="fas fa-truck mr-2"></i>
                <span>Free Shipping</span>
              </div>
              <div className="flex items-center text-gray-400">
                <i className="fas fa-undo mr-2"></i>
                <span>Easy Returns</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
