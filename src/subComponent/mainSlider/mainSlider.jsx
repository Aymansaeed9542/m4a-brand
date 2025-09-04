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
    <div className="w-full h-[40vh] md:h-[60vh]">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        speed={900}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-full overflow-hidden"
      >
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img src={slide1} alt="Slide 1" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img src={slide2} alt="Slide 2" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img src={slide3} alt="Slide 3" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MainSlider;
