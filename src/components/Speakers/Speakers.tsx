'use client';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { unbounded } from '@/app/fonts';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import Speaker from './Speaker';
import './Speakers.scss';
import { speakersConfig } from './speakers.config';

export default function Speakers() {
  return (
    <div className="relative pt-1">
      <div
        className={`${unbounded.className} uppercase items-center flex gap-6 md:gap-10 lg:gap-12 px-7 font-black text-left mb-[50px] text-[30px] sm:mb-[20px] md:text-[45px] lg:text-[60px] mt-[100px]`}
      >
        Спікери
        <div className="rotate-[135deg]">
          <Image src={'/images/arrow.svg'} alt="arrow" width={30} height={30} />
        </div>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        modules={[Pagination]}
        loop={true}
        watchSlidesProgress={true}
      >
        {speakersConfig.map((speaker) => (
          <SwiperSlide>
            <Speaker speaker={speaker} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
