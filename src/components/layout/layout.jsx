import React, { useEffect } from 'react'
import Navbar from './../../subComponent/navbar/navbar'
import Footer from './../../subComponent/footer/footer'
import { Outlet, useLocation } from 'react-router-dom'

const Layout = () => {
  const location = useLocation()

  useEffect(() => {
    const hasHash = !!location.hash
    const hasScrollTo = location.state && location.state.scrollTo
    if (!hasHash && !hasScrollTo) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    }
  }, [location.pathname, location.hash, location.state])

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