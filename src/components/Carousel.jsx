
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import  img1 from '../assets/images/carousel1.jpg'
import  img2 from '../assets/images/carousel2.jpg'
import  img3 from '../assets/images/carousel3.jpg'


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';

export default function Carousel() {
  return (
    <div className='container mx-auto px-6 py-10'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <Slide image={img1} text='Get your web developement Projext done in minutes'></Slide>
        </SwiperSlide>
        
        <SwiperSlide>
            <Slide image={img2}  text='Get your Graphic design Projext done in minutes'></Slide>
        </SwiperSlide>
        
        <SwiperSlide>
            <Slide image={img3}  text='Digital marketing campaign in running '></Slide>
        </SwiperSlide>
        
       
      </Swiper>
    </div>
  );
}