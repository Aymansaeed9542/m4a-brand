import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/navbar.jsx'
import Layout from './components/layout/layout.jsx'
import Home from './components/home/home.jsx'
import Products from './components/products/Products.jsx'
import AboutUs from './components/aboutUs/AboutUs.jsx'
import NotfoundPage from './components/notFoundPage/NotFoundPage.jsx'


function App() {
const router = createBrowserRouter([{
  path :"" , element : <Layout/> , children :
  [
    {
    index : true , element : <Home/>
  } ,
    {
    path : "/" , element : <Home/>
  },
    {
    path : "products" , element : <Products/>
  },
    {
    path : "aboutus" , element : <AboutUs/>
  },
    {
    path : "*" , element : <NotfoundPage/>
  }

]
}])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
