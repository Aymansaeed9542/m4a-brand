import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

// Import hoodie images
import hoodie1 from '../../assets/hoodies/1.jpg'
import hoodie2 from '../../assets/hoodies/2.jpg'
import hoodie3 from '../../assets/hoodies/3.jpg'
import hoodie4 from '../../assets/hoodies/4.jpg'
import hoodie5 from '../../assets/hoodies/5.jpg'
import hoodie6 from '../../assets/hoodies/6.jpg'
import hoodie7 from '../../assets/hoodies/7.jpg'
import hoodie8 from '../../assets/hoodies/8.jpg'
import hoodie9 from '../../assets/hoodies/9.jpg'
import hoodie10 from '../../assets/hoodies/10.jpg'
import hoodie11 from '../../assets/hoodies/11.jpg'
import hoodie12 from '../../assets/hoodies/12.jpg'
import hoodie13 from '../../assets/hoodies/13.jpg'
import hoodie15 from '../../assets/hoodies/15.jpg'
import hoodie16 from '../../assets/hoodies/16.jpg'
import hoodie17 from '../../assets/hoodies/17.jpg'
import hoodie18 from '../../assets/hoodies/18.jpg'
import hoodie19 from '../../assets/hoodies/19.jpg'
import hoodie20 from '../../assets/hoodies/20.jpg'
import hoodie21 from '../../assets/hoodies/21.jpg'
import hoodie22 from '../../assets/hoodies/22.jpg'

// Import t-shirt images
import tshirtCharcoal from '../../assets/t-shirts/M4A Premium T-Shirt Design.png'
import tshirtEvergreen from '../../assets/t-shirts/M4A Evergreen T-Shirt Product.png'
import tshirtLavender from '../../assets/t-shirts/M4A Lavender T-Shirt Product.png'
import tshirtOrange from '../../assets/t-shirts/M4A Orange T-Shirt Product.png'
import tshirtWhite from '../../assets/t-shirts/M4A White T-Shirt Product.png'

// Import pants images
import pantsBeige from '../../assets/pants/M4A Beige Pants Product.png'
import pantsBlack from '../../assets/pants/M4A Black Pants Product.png'
import pantsCharcoal from '../../assets/pants/M4A Charcoal Pants Product.png'
import pantsEvergreen from '../../assets/pants/M4A Evergreen Pants Product.png'
import pantsNavy from '../../assets/pants/M4A Navy Pants Product.png'

const Products = () => {
  const location = useLocation()
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Smooth scroll to section if URL has a hash
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }, [location.hash])

  // Hoodie data with details
  const hoodies = [
    { id: 1, name: "Classic Black Hoodie", price: "599 LE", image: hoodie1, description: "Premium cotton blend with modern fit. Perfect for everyday wear.", sizes: ["S", "M", "L", "XL"], colors: ["Black", "White", "Gray"] },
    { id: 2, name: "Urban Gray Hoodie", price: "599 LE", image: hoodie2, description: "Comfortable and stylish with a relaxed fit. Ideal for casual outings.", sizes: ["S", "M", "L", "XL"], colors: ["Gray", "Black", "Navy"] },
    { id: 3, name: "Street Style Hoodie", price: "649 LE", image: hoodie3, description: "Contemporary design with premium materials. Built for comfort and style.", sizes: ["S", "M", "L", "XL", "XXL"], colors: ["Black", "Charcoal", "White"] },
    { id: 4, name: "Minimalist Hoodie", price: "599 LE", image: hoodie4, description: "Clean lines and simple design. Perfect for the minimalist wardrobe.", sizes: ["S", "M", "L", "XL"], colors: ["White", "Black", "Beige"] },
    { id: 5, name: "Premium Comfort Hoodie", price: "699 LE", image: hoodie5, description: "Ultra-soft fabric with superior comfort. Your new favorite hoodie.", sizes: ["S", "M", "L", "XL"], colors: ["Navy", "Black", "Gray"] },
    { id: 6, name: "Modern Fit Hoodie", price: "599 LE", image: hoodie6, description: "Contemporary cut with attention to detail. Modern and comfortable.", sizes: ["S", "M", "L", "XL"], colors: ["Black", "White", "Olive"] },
    { id: 7, name: "Essential Hoodie", price: "749 LE", image: hoodie7, description: "A wardrobe essential with timeless appeal. Quality you can trust.", sizes: ["S", "M", "L", "XL"], colors: ["Gray", "Black", "White"] },
    { id: 8, name: "Athletic Hoodie", price: "649 LE", image: hoodie8, description: "Designed for movement with breathable materials. Perfect for active lifestyle.", sizes: ["S", "M", "L", "XL"], colors: ["Black", "Navy", "Charcoal"] },
    { id: 9, name: "Casual Comfort Hoodie", price: "599 LE", image: hoodie9, description: "Relaxed fit for ultimate comfort. Perfect for lounging or casual wear.", sizes: ["S", "M", "L", "XL"], colors: ["Black", "Gray", "White"] },
    { id: 10, name: "Designer Hoodie", price: "749 LE", image: hoodie10, description: "Premium design with exceptional quality. A statement piece for your wardrobe.", sizes: ["S", "M", "L", "XL"], colors: ["Black", "White", "Navy"] },
    { id: 11, name: "Urban Classic Hoodie", price: "599 LE", image: hoodie11, description: "Classic style with urban appeal. Timeless design meets modern comfort.", sizes: ["S", "M", "L", "XL"], colors: ["Gray", "Black", "Charcoal"] },
    { id: 12, name: "Comfort Zone Hoodie", price: "649 LE", image: hoodie12, description: "Maximum comfort with stylish design. Your comfort zone redefined.", sizes: ["S", "M", "L", "XL"], colors: ["Black", "Navy", "Gray"] },
    { id: 13, name: "Style Statement Hoodie", price: "699 LE", image: hoodie13, description: "Make a statement with this premium hoodie. Style meets substance.", sizes: ["S", "M", "L", "XL"], colors: ["Black", "White", "Olive"] },
    { id: 15, name: "Premium Blend Hoodie", price: "599 LE", image: hoodie15, description: "Premium cotton blend for superior comfort and durability.", sizes: ["S", "M", "L", "XL"], colors: ["Black", "Gray", "White"] },
    { id: 16, name: "Modern Essential Hoodie", price: "649 LE", image: hoodie16, description: "Modern essential with contemporary styling. Perfect for any occasion.", sizes: ["S", "M", "L", "XL"], colors: ["Navy", "Black", "Charcoal"] },
    { id: 17, name: "Comfort First Hoodie", price: "599 LE", image: hoodie17, description: "Comfort-first design with premium materials. Feel the difference.", sizes: ["S", "M", "L", "XL"], colors: ["Black", "Gray", "White"] },
    { id: 18, name: "Urban Edge Hoodie", price: "699 LE", image: hoodie18, description: "Urban edge with sophisticated design. Stand out with style.", sizes: ["S", "M", "L", "XL"], colors: ["Charcoal", "Black", "Navy"] },
    { id: 19, name: "Classic Comfort Hoodie", price: "599 LE", image: hoodie19, description: "Classic comfort with modern appeal. A timeless addition to your wardrobe.", sizes: ["S", "M", "L", "XL"], colors: ["Gray", "Black", "White"] },
    { id: 20, name: "Premium Style Hoodie", price: "749 LE ", image: hoodie20, description: "Premium style with exceptional quality. Elevate your everyday look.", sizes: ["S", "M", "L", "XL"], colors: ["Black", "White", "Navy"] },
    { id: 21, name: "Contemporary Hoodie", price: "649 LE", image: hoodie21, description: "Contemporary design with attention to detail. Modern and sophisticated.", sizes: ["S", "M", "L", "XL"], colors: ["Navy", "Charcoal", "Black"] },
    { id: 22, name: "Ultimate Comfort Hoodie", price: "699 LE", image: hoodie22, description: "Ultimate comfort meets premium style. Your new go-to hoodie.", sizes: ["S", "M", "L", "XL"], colors: ["Black", "Gray", "White"] }
  ]

  // T-shirt data with details
  const tshirts = [
    { id: 1, name: "M4A Charcoal T-Shirt", price: "299 LE", image: tshirtCharcoal, description: "Premium cotton blend with modern fit. Perfect for everyday wear.", sizes: ["S", "M", "L", "XL"], colors: ["Charcoal", "Black", "White"] },
    { id: 2, name: "M4A Evergreen T-Shirt", price: "299 LE", image: tshirtEvergreen, description: "Comfortable and stylish with a relaxed fit. Ideal for casual outings.", sizes: ["S", "M", "L", "XL"], colors: ["Evergreen", "Black", "Navy"] },
    { id: 3, name: "M4A Lavender T-Shirt", price: "299 LE", image: tshirtLavender, description: "Contemporary design with premium materials. Built for comfort and style.", sizes: ["S", "M", "L", "XL"], colors: ["Lavender", "Purple", "White"] },
    { id: 4, name: "M4A Orange T-Shirt", price: "299 LE", image: tshirtOrange, description: "Clean lines and simple design. Perfect for the minimalist wardrobe.", sizes: ["S", "M", "L", "XL"], colors: ["Orange", "Black", "White"] },
    { id: 5, name: "M4A White T-Shirt", price: "299 LE", image: tshirtWhite, description: "Ultra-soft fabric with superior comfort. Your new favorite t-shirt.", sizes: ["S", "M", "L", "XL"], colors: ["White", "Black", "Gray"] }
  ]

  // Pants data with details
  const pants = [
    { id: 1, name: "M4A Beige Pants", price: "399 LE", image: pantsBeige, description: "Premium cotton blend with modern fit. Perfect for everyday wear.", sizes: ["S", "M", "L", "XL"], colors: ["Beige", "Brown", "Cream"] },
    { id: 2, name: "M4A Black Pants", price: "399 LE", image: pantsBlack, description: "Comfortable and stylish with a relaxed fit. Ideal for casual outings.", sizes: ["S", "M", "L", "XL"], colors: ["Black", "Charcoal", "Navy"] },
    { id: 3, name: "M4A Charcoal Pants", price: "399 LE", image: pantsCharcoal, description: "Contemporary design with premium materials. Built for comfort and style.", sizes: ["S", "M", "L", "XL"], colors: ["Charcoal", "Black", "Gray"] },
    { id: 4, name: "M4A Evergreen Pants", price: "399 LE", image: pantsEvergreen, description: "Clean lines and simple design. Perfect for the minimalist wardrobe.", sizes: ["S", "M", "L", "XL"], colors: ["Evergreen", "Forest", "Olive"] },
    { id: 5, name: "M4A Navy Pants", price: "399 LE", image: pantsNavy, description: "Ultra-soft fabric with superior comfort. Your new favorite pants.", sizes: ["S", "M", "L", "XL"], colors: ["Navy", "Blue", "Black"] }
  ]

  const openModal = (product) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProduct(null)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Products</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover our premium collection of comfortable and stylish essentials
          </p>
        </div>
      </div>

      {/* Hoodies Section */}
      <section id="hoodies" className="py-16 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Premium Hoodies</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Cozy comfort meets street style. Perfect for any weather with premium materials.
            </p>
          </div>

          {/* Professional Warning Section */}
          <div dir="rtl" role="alert" className="max-w-4xl mx-auto mb-12 p-6 border-2 border-red-400 rounded-xl bg-red-50 shadow-lg">
            <div className="flex items-start gap-4">
              {/* Warning Icon */}
              <div className="text-3xl flex-shrink-0" aria-hidden="true">⚠️</div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="font-bold text-xl text-red-800 mb-3">تنويه هام</h3>
                <p className="text-base leading-relaxed text-gray-800 mb-4">
                  خدمة الدفع عن طريق الكارت <span className="font-bold text-red-600">غير متاحة حالياً</span>. لطلب المنتج، يرجى أخذ لقطة شاشة (Screenshot) للمنتج وإرسالها عبر واتساب على الأرقام التالية:
                </p>

                {/* Phone Numbers */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 bg-white p-3 rounded-lg border border-red-200">
                    <div className="text-green-600 text-xl">📞</div>
                    <span className="font-bold text-lg text-green-600">01225194463</span>
                    <a 
                      href="https://wa.me/201225194463" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="mr-auto bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200"
                    >
                      افتح واتساب
                    </a>
                  </div>

                  <div className="flex items-center gap-3 bg-white p-3 rounded-lg border border-red-200">
                    <div className="text-green-600 text-xl">📞</div>
                    <span className="font-bold text-lg text-green-600">01277341769</span>
                    <a 
                      href="https://wa.me/201277341769" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="mr-auto bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200"
                    >
                      افتح واتساب
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {hoodies.map((hoodie) => (
              <div
                key={hoodie.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={hoodie.image}
                    alt={hoodie.name}
                    className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => openModal(hoodie)}
                      className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 transform translate-y-4 group-hover:translate-y-0"
                    >
                      View Details
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{hoodie.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{hoodie.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900">{hoodie.price}</span>
                    <div className="flex text-yellow-400">
                      <i className="fas fa-star text-sm"></i>
                      <i className="fas fa-star text-sm"></i>
                      <i className="fas fa-star text-sm"></i>
                      <i className="fas fa-star text-sm"></i>
                      <i className="fas fa-star text-sm"></i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* T-Shirts Section */}
      <section id="tshirts" className="py-16 bg-white scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Premium T-Shirts</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Essential comfort meets modern style. Perfect for any occasion with premium materials.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {tshirts.map((tshirt) => (
              <div
                key={tshirt.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={tshirt.image}
                    alt={tshirt.name}
                    className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => openModal(tshirt)}
                      className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 transform translate-y-4 group-hover:translate-y-0"
                    >
                      View Details
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{tshirt.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{tshirt.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900">{tshirt.price}</span>
                    <div className="flex text-yellow-400">
                      <i className="fas fa-star text-sm"></i>
                      <i className="fas fa-star text-sm"></i>
                      <i className="fas fa-star text-sm"></i>
                      <i className="fas fa-star text-sm"></i>
                      <i className="fas fa-star text-sm"></i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pants Section */}
      <section id="pants" className="py-16 bg-gray-50 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Premium Pants</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comfortable and stylish bottoms. Perfect for any outfit with premium materials.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {pants.map((pant) => (
              <div
                key={pant.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={pant.image}
                    alt={pant.name}
                    className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => openModal(pant)}
                      className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 transform translate-y-4 group-hover:translate-y-0"
                    >
                      View Details
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{pant.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{pant.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900">{pant.price}</span>
                    <div className="flex text-yellow-400">
                      <i className="fas fa-star text-sm"></i>
                      <i className="fas fa-star text-sm"></i>
                      <i className="fas fa-star text-sm"></i>
                      <i className="fas fa-star text-sm"></i>
                      <i className="fas fa-star text-sm"></i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-80 object-cover object-center rounded-t-2xl"
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 transition-colors duration-200"
              >
                <i className="fas fa-times text-lg"></i>
              </button>
            </div>
            
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedProduct.name}</h2>
              <p className="text-gray-600 text-lg mb-6">{selectedProduct.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Available Sizes</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProduct.sizes.map((size) => (
                      <span key={size} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                        {size}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Available Colors</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProduct.colors.map((color) => (
                      <span key={color} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                        {color}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900">{selectedProduct.price}</span>
                <div className="flex gap-3">
                  <button className="bg-gray-100 text-gray-800 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors duration-200">
                    Add to Cart
                  </button>
                  <button className="bg-black text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors duration-200">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Products