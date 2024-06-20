import { Autoplay } from 'swiper/modules';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import SwiperCore from 'swiper';
import image1 from '../images/image1 copy.JPG';
import image2 from '../images/image2 copy.JPG';
import image3 from '../images/image3 copy.JPG';
import image4 from '../images/image4 copy.JPG';
import '../index.css';
SwiperCore.use([Autoplay]);

function imageSwipe() {
    return(
        <div className="h-[687px] w-[58vw] bg-black">
          <Swiper
            spaceBetween={0}
            centeredSlides={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            className="w-full h-full"
          >
            <SwiperSlide>
              <img src={image1} alt="Image 1" className="w-full h-full object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={image2} alt="Image 2" className="w-full h-full object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={image3} alt="Image 3" className="w-full h-full object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={image4} alt="Image 4" className="w-full h-full object-cover" />
            </SwiperSlide>
          </Swiper>
        </div>
    )
}

export default imageSwipe;