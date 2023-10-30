'use client';
import { unbounded } from '@/app/fonts';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './OurTeam.scss';
import Teammate from './Teammate';
import { teamConfig } from './team.config';

export default function OurTeam() {
  return (
    <div>
      <h3
        className={`${unbounded.className} font-black uppercase text-[40px] text-center mt-[100px]`}
      >
        Наша Команда
      </h3>
      <Swiper
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
        loop={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {teamConfig.map((teammate, i) => (
          <SwiperSlide key={i}>
            <Teammate teammate={teammate} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
