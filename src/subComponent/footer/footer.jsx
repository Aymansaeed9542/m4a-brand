import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-1 text-center md:text-left">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-4">M4A Brand</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Elevating everyday style with premium comfort. Built for movement, crafted to last.
              </p>
              
              {/* Social Media Icons */}
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <a 
                  href="https://www.facebook.com/share/1amADzSh13/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300 hover:scale-110 shadow-lg"
                  aria-label="Follow us on Facebook"
                >
                  <FaFacebookF className="text-white text-lg" />
                </a>
                <a 
                  href="https://www.instagram.com/m4abrand?igsh=cnpyMzAwczJhZW80&utm_source=ig_contact_invite" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-110 shadow-lg"
                  aria-label="Follow us on Instagram"
                >
                  <FaInstagram className="text-white text-lg" />
                </a>
                <a 
                  href="https://tiktok.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors duration-300 hover:scale-110 shadow-lg"
                  aria-label="Follow us on TikTok"
                >
                  <FaTiktok className="text-white text-lg" />
                </a>
                <a 
                  href="https://wa.me/201225194463" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-300 hover:scale-110 shadow-lg"
                  aria-label="Contact us on WhatsApp"
                >
                  <FaWhatsapp className="text-white text-lg" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white hover:underline underline-offset-4 decoration-gray-400 transition-colors duration-300 inline-flex items-center justify-center md:justify-start">
                  <i className="fas fa-home mr-2 text-sm"></i>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white hover:underline underline-offset-4 decoration-gray-400 transition-colors duration-300 inline-flex items-center justify-center md:justify-start">
                  <i className="fas fa-shopping-bag mr-2 text-sm"></i>
                  Products
                </Link>
              </li>
              <li>
                <Link to="/aboutus" className="text-gray-300 hover:text-white hover:underline underline-offset-4 decoration-gray-400 transition-colors duration-300 inline-flex items-center justify-center md:justify-start">
                  <i className="fas fa-info-circle mr-2 text-sm"></i>
                  About Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white hover:underline underline-offset-4 decoration-gray-400 transition-colors duration-300 inline-flex items-center justify-center md:justify-start">
                  <i className="fas fa-shipping-fast mr-2 text-sm"></i>
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white hover:underline underline-offset-4 decoration-gray-400 transition-colors duration-300 inline-flex items-center justify-center md:justify-start">
                  <i className="fas fa-undo mr-2 text-sm"></i>
                  Returns
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-6">Customer Service</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white hover:underline underline-offset-4 decoration-gray-400 transition-colors duration-300 inline-flex items-center justify-center md:justify-start">
                  <i className="fas fa-question-circle mr-2 text-sm"></i>
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white hover:underline underline-offset-4 decoration-gray-400 transition-colors duration-300 inline-flex items-center justify-center md:justify-start">
                  <i className="fas fa-headset mr-2 text-sm"></i>
                  Contact Support
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white hover:underline underline-offset-4 decoration-gray-400 transition-colors duration-300 inline-flex items-center justify-center md:justify-start">
                  <i className="fas fa-shield-alt mr-2 text-sm"></i>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white hover:underline underline-offset-4 decoration-gray-400 transition-colors duration-300 inline-flex items-center justify-center md:justify-start">
                  <i className="fas fa-file-contract mr-2 text-sm"></i>
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white hover:underline underline-offset-4 decoration-gray-400 transition-colors duration-300 inline-flex items-center justify-center md:justify-start">
                  <i className="fas fa-credit-card mr-2 text-sm"></i>
                  Payment Methods
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start justify-center md:justify-start">
                <i className="fas fa-map-marker-alt text-white mr-3 mt-1"></i>
                <div>
                  <p className="text-gray-300">
                    Agamy K21<br />
                    Alexandria, Egypt 
                  </p>
                </div>
              </div>
              
              <div className="flex items-center justify-center md:justify-start">
                <i className="fas fa-phone text-white mr-3"></i>
                <a href="https://wa.me/201225194463" className="text-gray-300 hover:text-white hover:underline underline-offset-4 decoration-gray-400 transition-colors duration-300">
                  +20 122 519 4463
                </a>
              </div>
              
              <div className="flex items-center justify-center md:justify-start">
                <i className="fas fa-mobile-alt text-white mr-3"></i>
                <a href="https://wa.me/201277341769" className="text-gray-300 hover:text-white hover:underline underline-offset-4 decoration-gray-400 transition-colors duration-300">
                  +20 127 734 1769
                </a>
              </div>
              
              
              <div className="flex items-center justify-center md:justify-start">
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

      {/* Newsletter Section */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
              <p className="text-gray-300">Subscribe to our newsletter for the latest updates and exclusive offers</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-white text-black font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                <i className="fas fa-paper-plane mr-2"></i>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
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