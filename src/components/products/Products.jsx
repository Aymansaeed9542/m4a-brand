import React, { useState } from 'react'
import { Link } from 'react-router-dom'

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

const Products = () => {
  const [selectedHoodie, setSelectedHoodie] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

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

  const openModal = (hoodie) => {
    setSelectedHoodie(hoodie)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedHoodie(null)
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
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Premium Hoodies</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Cozy comfort meets street style. Perfect for any weather with premium materials.
            </p>
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

      {/* Modal */}
      {isModalOpen && selectedHoodie && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedHoodie.image}
                alt={selectedHoodie.name}
                className="w-full h-80 object-cover object-top rounded-t-2xl"
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 transition-colors duration-200"
              >
                <i className="fas fa-times text-lg"></i>
              </button>
            </div>
            
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedHoodie.name}</h2>
              <p className="text-gray-600 text-lg mb-6">{selectedHoodie.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Available Sizes</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedHoodie.sizes.map((size) => (
                      <span key={size} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                        {size}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Available Colors</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedHoodie.colors.map((color) => (
                      <span key={color} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                        {color}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900">{selectedHoodie.price}</span>
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