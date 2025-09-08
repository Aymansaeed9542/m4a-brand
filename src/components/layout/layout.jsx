import React, { useEffect } from 'react'
import Navbar from './../../subComponent/navbar/navbar'
import Footer from '../footer/footer'
import { Outlet, useLocation } from 'react-router-dom'

const Layout = () => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [location.pathname])

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar/>
      <main className="flex-1 pt-20 sm:pt-0">
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default Layout