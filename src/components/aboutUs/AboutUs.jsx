import React from 'react'
import { Link } from 'react-router-dom'

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-8 border border-white/20">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></span>
              Founded 2024
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Our Story
              <span className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                M4A Brand
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              Born from passion, built with purpose. We're redefining modern fashion with quality, style, and community at our core.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  More Than Just
                  <span className="block text-gray-600">Clothing</span>
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  M4A isn't just a brand—it's a movement. We believe that what you wear should reflect who you are: confident, stylish, and unapologetically authentic. Every piece we create is designed to empower you to express your unique style while feeling comfortable in your own skin.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  From our premium hoodies that blend street style with comfort, to our essential t-shirts that form the foundation of any wardrobe, we're committed to delivering pieces that don't just look good—they make you feel unstoppable.
                </p>
                <Link 
                  to="/products" 
                  className="inline-flex items-center px-8 py-4 bg-black text-white font-semibold rounded-xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
                >
                  <span>Explore Our Collection</span>
                  <i className="fas fa-arrow-right ml-2"></i>
                </Link>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                    <i className="fas fa-bullseye text-white text-2xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To create high-quality, stylish clothing that empowers individuals to express their unique style while building a community of fashion-forward thinkers.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-2xl shadow-lg mt-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6">
                    <i className="fas fa-eye text-white text-2xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To become the go-to brand for modern, quality clothing that bridges the gap between street style and everyday comfort.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Meet the Visionaries
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Behind every great brand are passionate individuals who dare to dream differently.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <i className="fas fa-user text-gray-600 text-4xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Mohamed Adel</h3>
                <p className="text-lg text-gray-600 mb-4">Co-Founder & Creative Director</p>
                <p className="text-gray-600 leading-relaxed">
                  Mohamed brings a keen eye for design and an unwavering commitment to quality. His vision for M4A centers around creating pieces that seamlessly blend style with functionality, ensuring every customer feels confident and comfortable.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <i className="fas fa-user text-gray-600 text-4xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Alaa Montaser</h3>
                <p className="text-lg text-gray-600 mb-4">Co-Founder & Brand Strategist</p>
                <p className="text-gray-600 leading-relaxed">
                  Alaa drives the strategic vision of M4A, focusing on building meaningful connections with our community. His passion for fashion and understanding of modern consumer needs helps shape our brand's direction and growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements & Stats */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Our Journey So Far
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                In just a short time, we've achieved remarkable milestones that reflect our commitment to excellence and customer satisfaction.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <i className="fas fa-calendar text-white text-2xl"></i>
                </div>
                <div className="text-4xl font-bold mb-2">2024</div>
                <div className="text-white/80">Founded</div>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <i className="fas fa-shopping-cart text-white text-2xl"></i>
                </div>
                <div className="text-4xl font-bold mb-2">1000+</div>
                <div className="text-white/80">Happy Customers</div>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <i className="fas fa-star text-white text-2xl"></i>
                </div>
                <div className="text-4xl font-bold mb-2">4.9★</div>
                <div className="text-white/80">Customer Rating</div>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <i className="fas fa-heart text-white text-2xl"></i>
                </div>
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-white/80">Quality Promise</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                What Drives Us
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our core values shape everything we do, from design to customer service.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <i className="fas fa-gem text-white text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality First</h3>
                <p className="text-gray-600 leading-relaxed">
                  We never compromise on quality. Every piece is crafted with premium materials and attention to detail, ensuring durability and comfort that lasts.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <i className="fas fa-users text-white text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Community</h3>
                <p className="text-gray-600 leading-relaxed">
                  We're building more than a brand—we're creating a community of fashion-forward individuals who share our passion for style and self-expression.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <i className="fas fa-lightbulb text-white text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovation</h3>
                <p className="text-gray-600 leading-relaxed">
                  We constantly push boundaries, exploring new designs, materials, and styles to stay ahead of fashion trends while maintaining our unique identity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-black to-gray-900 text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Join the M4A Family
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              Ready to experience the difference? Discover our collection and become part of a community that values quality, style, and authenticity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/products" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                <span>Shop Now</span>
                <i className="fas fa-arrow-right ml-2"></i>
              </Link>
              <Link 
                to="/" 
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300"
              >
                <span>Back to Home</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs