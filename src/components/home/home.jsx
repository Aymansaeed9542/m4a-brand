import React from 'react'
import MainSlider from '../../subComponent/mainSlider/mainSlider'
import banner from './../../assets/dark-banner.png'
import hoodie from './../../assets/M4A White Hoodie.png'
import tshirt from './../../assets/M4A Evergreen T-Shirt.png'
import pants from './../../assets/M4A Premium Pants Design.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Professional Hero Banner */}
      <section className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={banner} 
            alt="M4A Brand Hero" 
            className="w-full h-full object-cover object-center" 
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-black/60"></div>
        </div>
        
        {/* Content Container */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-8 border border-white/20">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></span>
                New Collection Available
              </div>
              
              {/* Main Headline */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Elevate Your
                <span className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Everyday Style
                </span>
              </h1>
              
              {/* Subtitle */}
              <p className="text-xl sm:text-2xl text-white/80 mb-8 max-w-2xl leading-relaxed">
                Premium comfort meets minimalist design. Built for movement, crafted to last.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/products" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <span>Shop Collection</span>
                  <i className="fas fa-arrow-right ml-2"></i>
                </Link>
                <button className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm">
                  <i className="fas fa-play mr-2"></i>
                <Link 
                  to="/aboutUs" 
                  className=""
                >
                  <span>Watch Our Story</span>
                  <i className="fas fa-arrow-right ml-2"></i>
                </Link></button>
              </div>
              
              {/* Stats */}
              <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/20">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">500</div>
                  <div className="text-white/70 text-sm">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">100+</div>
                  <div className="text-white/70 text-sm">Premium Products</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">4.9★</div>
                  <div className="text-white/70 text-sm">Customer Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
          <i className="fas fa-chevron-down text-2xl"></i>
        </div>
      </section>

      {/* Categories Section */}
      <div className='mt-16 px-6 md:px-12'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
            Shop by Category
          </h2>
          <p className='text-gray-600 text-lg max-w-2xl mx-auto'>
            Discover our premium collection of comfortable and stylish essentials
          </p>
        </div>
        
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto'>
          {/* Hoodies Card */}
          <div className='bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden'>
            <div className='relative h-48 sm:h-56 md:h-64 overflow-hidden'>
              <img 
                src={hoodie} 
                alt="Premium Hoodies" 
                className='w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent'></div>
            </div>
            <div className='p-6'>
              <h3 className='text-xl font-bold text-gray-900 mb-2'>Premium Hoodies</h3>
              <p className='text-gray-600 text-sm mb-4'>
                Cozy comfort meets street style. Perfect for any weather with premium materials.
              </p>
              <div className='flex items-center mb-4'>
                <div className='flex text-yellow-400'>
                  <i className='fas fa-star text-sm'></i>
                  <i className='fas fa-star text-sm'></i>
                  <i className='fas fa-star text-sm'></i>
                  <i className='fas fa-star text-sm'></i>
                  <i className='fas fa-star text-sm'></i>
                </div>
                <span className='text-gray-500 text-sm ml-2'>(4.8)</span>
              </div>
            <Link to={{ pathname: '/products' }} state={{ scrollTo: 'hoodies' }}>
                          <button className='w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors duration-200'>
              View all Products
              </button>
            </Link>
            </div>
          </div>

          {/* T-Shirts Card */}
          <div className='bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden'>
            <div className='relative h-48 sm:h-56 md:h-64 overflow-hidden'>
              <img 
                src={tshirt} 
                alt="Premium T-Shirts" 
                className='w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent'></div>
            </div>
            <div className='p-6'>
              <h3 className='text-xl font-bold text-gray-900 mb-2'>Premium T-Shirts</h3>
              <p className='text-gray-600 text-sm mb-4'>
                Essential everyday comfort with clean design and breathable fabrics.
              </p>
              <div className='flex items-center mb-4'>
                <div className='flex text-yellow-400'>
                  <i className='fas fa-star text-sm'></i>
                  <i className='fas fa-star text-sm'></i>
                  <i className='fas fa-star text-sm'></i>
                  <i className='fas fa-star text-sm'></i>
                  <i className='fas fa-star text-sm'></i>
                </div>
                <span className='text-gray-500 text-sm ml-2'>(4.9)</span>
              </div>

            <Link to={{ pathname: '/products' }} state={{ scrollTo: 'tshirts' }}>
                          <button className='w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors duration-200'>
              View all Products
              </button>
            </Link>
            </div>
          </div>

          {/* Pants Card */}
          <div className='bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden'>
            <div className='relative h-48 sm:h-56 md:h-64 overflow-hidden'>
              <img 
                src={pants} 
                alt="Premium Pants" 
                className='w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent'></div>
            </div>
            <div className='p-6'>
              <h3 className='text-xl font-bold text-gray-900 mb-2'>Premium Pants</h3>
              <p className='text-gray-600 text-sm mb-4'>
                Versatile comfort with modern fit. Perfect for work, workout, or casual wear.
              </p>
              <div className='flex items-center mb-4'>
                <div className='flex text-yellow-400'>
                  <i className='fas fa-star text-sm'></i>
                  <i className='fas fa-star text-sm'></i>
                  <i className='fas fa-star text-sm'></i>
                  <i className='fas fa-star text-sm'></i>
                  <i className='fas fa-star text-sm'></i>
                </div>
                <span className='text-gray-500 text-sm ml-2'>(4.7)</span>
              </div>
            <Link to={{ pathname: '/products' }} state={{ scrollTo: 'pants' }}>
                          <button className='w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors duration-200'>
              View all Products
              </button>
            </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Slider Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-black/5 rounded-full text-gray-600 text-sm font-medium mb-6">
              <i className="fas fa-star mr-2 text-yellow-500"></i>
              Featured Collection
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Discover Our
              <span className="block bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Latest Styles
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Curated selection of premium pieces that define modern comfort and style
            </p>
      </div>
          
          <div className="relative">
      <MainSlider/>
      
            {/* Slider Controls */}
            <div className="flex justify-center mt-8 space-x-4">
              <button className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-900 transition-colors duration-300"></button>
              <button className="w-3 h-3 rounded-full bg-gray-900"></button>
              <button className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-900 transition-colors duration-300"></button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home