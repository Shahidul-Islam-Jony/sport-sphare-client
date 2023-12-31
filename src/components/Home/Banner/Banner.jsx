
import banner1 from '../../../assets/images/banner1.jpg'
import banner2 from '../../../assets/images/banner2.jpg'
import banner3 from '../../../assets/images/banner3.jpg'
import banner4 from '../../../assets/images/banner4.jpg'
import banner5 from '../../../assets/images/banner5.jpg'
import banner6 from '../../../assets/images/banner6.jpg'
import banner7 from '../../../assets/images/banner7.jpg'
import banner8 from '../../../assets/images/banner8.jpg'
import banner9 from '../../../assets/images/banner9.jpg'
import banner10 from '../../../assets/images/banner10.jpg'
import banner11 from '../../../assets/images/banner11.jpg'
import banner13 from '../../../assets/images/banner13.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import "swiper/css/autoplay";
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';

const Banner = () => {

    return (
        <div className='mt-5'>
            <Swiper
                // loop={true}
                pagination={{ clickable: true }}
                modules={[Pagination,EffectCoverflow,Autoplay]}
                autoplay={{ delay: 5000 }}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    depth: 2000,
                    slideShadows: true,
                }}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={banner11} className='h-[500px] w-11/12 bg-cover md:w-2/3 rounded-lg' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner1} className='h-[500px] w-11/12 bg-cover md:w-2/3 rounded-lg' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner13} className='h-[500px] w-11/12 bg-cover md:w-2/3 rounded-lg' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner3} className='h-[500px] w-11/12 bg-cover md:w-2/3 rounded-lg' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner4} className='h-[500px] w-11/12 bg-cover md:w-2/3 rounded-lg' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner6} className='h-[500px] w-11/12 bg-cover md:w-2/3 rounded-lg' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner8} className='h-[500px] w-11/12 bg-cover md:w-2/3 rounded-lg' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner9} className='h-[500px] w-11/12 bg-cover md:w-2/3 rounded-lg' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner10} className='h-[500px] w-11/12 bg-cover md:w-2/3 rounded-lg' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner7} className='h-[500px] w-11/12 bg-cover md:w-2/3 rounded-lg' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner2} className='h-[500px] w-11/12 bg-cover md:w-2/3 rounded-lg' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner5} className='h-[500px] w-11/12 bg-cover md:w-2/3 rounded-lg' />
                </SwiperSlide>
                
               
               

            </Swiper>
        </div>
    )
}

export default Banner;

