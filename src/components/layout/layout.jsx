import React from 'react'
import Navbar from './../../subComponent/navbar/navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="min-h-screen">
      <Navbar/>
      <main className="pt-20 sm:pt-0">
        <Outlet/>
      </main>
    </div>
  )
}

export default Layout