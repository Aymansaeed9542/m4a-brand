import React from 'react'
import MainSlider from '../../subComponent/mainSlider/mainSlider'
import banner from './../../assets/banner.png'

const Home = () => {
  return (
    <div>
      <div className='relative w-full h-[40vh] md:h-[60vh] overflow-hidden rounded-xl'>
        <img src={banner} alt="Brand banner" className='absolute inset-0 w-full h-full object-cover' />
        <div className='absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent' />
        <div className='relative z-10 h-full flex flex-col items-start justify-center px-6 md:px-12 text-white'>
          <h1 className='text-3xl md:text-5xl font-extrabold tracking-tight'>
            Elevate Your Everyday Style
          </h1>
          <p className='mt-3 md:mt-4 text-sm md:text-base text-white/85 max-w-xl'>
            Premium comfort. Minimal design. Built for movement and made to last.
          </p>
          <div className='mt-5'>
            <a href="#shop" className='inline-block bg-white text-black hover:bg-zinc-100 transition-colors px-5 py-2.5 rounded-lg font-semibold'>
              Shop New Arrivals
            </a>
          </div>
        </div>
      </div>
      <div className='mt-8'>
        <MainSlider/>
      </div>
    </div>
  )
}

export default Home