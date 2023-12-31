
import banner1 from '../../../assets/images/banner1.jpg'
import banner2 from '../../../assets/images/banner2.jpg'

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
                loop={true}
                pagination={{ clickable: true }}
                modules={[Pagination,EffectCoverflow,Autoplay]}
                autoplay={{ delay: 5000 }}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={banner1} className='h-[500px] w-11/12 rounded-lg' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner2} className='h-[500px] w-11/12 rounded-lg' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner1} className='h-[500px] w-11/12 rounded-lg' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner2} className='h-[500px] w-11/12 rounded-lg' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner1} className='h-[500px] w-11/12 rounded-lg' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner2} className='h-[500px] w-11/12 rounded-lg' />
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export default Banner;

