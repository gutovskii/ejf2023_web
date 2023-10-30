'use client';
import { unbounded } from '@/app/fonts';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/scrollbar';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Photos from '../../utils/OurPhotoExporter';
import LinkBtn from '../LinkBtn';

export default function OurPhotos() {
  return (
    <>
      <h3
        className={`${unbounded.className} items-center flex justify-between px-7 font-black text-left mb-[50px] text-[30px] sm:mb-[20px] md:text-[45px] lg:text-[60px] mt-[100px]`}
      >
        НАШІ ФОТО
        <LinkBtn text="Дивитись усі" href="google.com" />
      </h3>

      <Slider direction="left" />
      <Slider direction="right" />
    </>
  );
}

type SliderProps = {
  direction: 'left' | 'right';
};
function Slider({ direction }: SliderProps) {
  return (
    <>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={3}
        loop={true}
        speed={1800}
        grabCursor={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
          reverseDirection: direction == 'left',
        }}
      >
        {Photos.map((photo) => (
          <SwiperSlide key={photo.src} className="h-[318px] w-[541px]">
            {' '}
            <Image width={541} height={318} src={photo} alt="photo" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
