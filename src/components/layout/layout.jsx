import React from 'react'
import Navbar from './../../subComponent/navbar/navbar'
import Footer from '../footer/footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
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