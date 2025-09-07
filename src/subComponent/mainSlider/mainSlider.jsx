import { Swiper, SwiperSlide } from 'swiper/react';
import slide1 from "./../../assets/slide1.png";
import slide2 from "./../../assets/slide2.png";
import slide3 from "./../../assets/slide3.png";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const MainSlider = () => {
  return (
    <div className="relative max-w-6xl mx-auto">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ 
          clickable: true,
          bulletClass: 'swiper-pagination-bullet-custom',
          bulletActiveClass: 'swiper-pagination-bullet-active-custom'
        }}
        navigation={true}
        speed={800}
        modules={[Autoplay, Pagination, Navigation]}
        className="professional-slider rounded-3xl overflow-hidden shadow-2xl"
        style={{
          '--swiper-navigation-color': '#ffffff',
          '--swiper-pagination-color': '#ffffff',
        }}
      >
        <SwiperSlide>
          <div className="relative h-[500px] lg:h-[600px]">
            <img 
              src={slide1} 
              alt="Premium Collection" 
              className="absolute inset-0 w-full h-full object-cover object-center" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            
            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-end">
              <div className="p-8 lg:p-12 text-white">
                <div className="max-w-2xl">
                  <div className="inline-flex items-center px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
                    <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                    New Arrival
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold mb-4">Premium Comfort Collection</h3>
                  <p className="text-lg text-white/90 mb-6 leading-relaxed">
                    Experience the perfect blend of comfort and style with our latest premium collection
                  </p>
                  <button className="inline-flex items-center px-6 py-3 bg-white text-black font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300">
                    <span>Explore Collection</span>
                    <i className="fas fa-arrow-right ml-2"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className="relative h-[500px] lg:h-[600px]">
            <img 
              src={slide2} 
              alt="Street Style Collection" 
              className="absolute inset-0 w-full h-full object-cover object-center" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            
            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-end">
              <div className="p-8 lg:p-12 text-white">
                <div className="max-w-2xl">
                  <div className="inline-flex items-center px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
                    <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                    Street Style
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold mb-4">Urban Street Collection</h3>
                  <p className="text-lg text-white/90 mb-6 leading-relaxed">
                    Bold designs that define modern street culture with premium quality materials
                  </p>
                  <button className="inline-flex items-center px-6 py-3 bg-white text-black font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300">
                    <span>Shop Now</span>
                    <i className="fas fa-arrow-right ml-2"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className="relative h-[500px] lg:h-[600px]">
            <img 
              src={slide3} 
              alt="Minimalist Collection" 
              className="absolute inset-0 w-full h-full object-cover object-center" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            
            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-end">
              <div className="p-8 lg:p-12 text-white">
                <div className="max-w-2xl">
                  <div className="inline-flex items-center px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
                    <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                    Minimalist
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold mb-4">Minimalist Essentials</h3>
                  <p className="text-lg text-white/90 mb-6 leading-relaxed">
                    Clean lines and timeless design. Perfect for the modern minimalist wardrobe
                  </p>
                  <button className="inline-flex items-center px-6 py-3 bg-white text-black font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300">
                    <span>Discover More</span>
                    <i className="fas fa-arrow-right ml-2"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      
      {/* Custom Styles */}
      <style jsx>{`
        .professional-slider .swiper-button-next,
        .professional-slider .swiper-button-prev {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 50%;
          width: 50px;
          height: 50px;
          margin-top: -25px;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .professional-slider .swiper-button-next:after,
        .professional-slider .swiper-button-prev:after {
          font-size: 16px;
          font-weight: bold;
        }
        
        .professional-slider .swiper-pagination {
          bottom: 20px;
        }
        
        .professional-slider .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.5);
          width: 12px;
          height: 12px;
          margin: 0 6px;
        }
        
        .professional-slider .swiper-pagination-bullet-active {
          background: white;
          transform: scale(1.2);
        }
      `}</style>
    </div>
  );
};

export default MainSlider;
