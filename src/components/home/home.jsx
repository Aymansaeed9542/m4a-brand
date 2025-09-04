import React from 'react'
import MainSlider from '../../subComponent/mainSlider/mainSlider'
import banner from './../../assets/banner.png'
import hoodie from './../../assets/M4A White Hoodie.png'
import tshirt from './../../assets/M4A Evergreen T-Shirt.png'
import pants from './../../assets/M4A Premium Pants Design.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className='relative w-full h-[40vh] md:h-[60vh] overflow-hidden  '>
        <img src={banner} alt="Brand banner" className='absolute inset-0 w-full h-full object-cover object-top ' />
        <div className='absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent' />
        <div className='relative z-10 h-full flex flex-col items-start justify-center px-6 md:px-12 text-white'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight'>
            Elevate Your Everyday Style
          </h1>
          <p className='mt-3 md:mt-4 text-sm sm:text-base md:text-lg text-white/85 max-w-xl'>
            Premium comfort. Minimal design. Built for movement and made to last.
          </p>
          <div className='mt-5'>
            <Link to="/products" className='inline-block bg-white text-black hover:bg-zinc-100 transition-colors px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg font-semibold text-sm sm:text-base'>
              Shop New Arrivals
            </Link>
          </div>
        </div>
      </div>

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
            <Link to="/products">
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

            <Link to="/products">
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
            <Link to="/products">
                          <button className='w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors duration-200'>
              View all Products
              </button>
            </Link>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-16'>
        <MainSlider/>
      </div>
    </div>
  )
}

export default Home