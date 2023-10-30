'use client';
import { unbounded } from '@/app/fonts';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <div className="flex flex-col gap-2 items-center justify-center h-full relative top-0 md:my-[2vw] mb-[35px]">
      <Image
        src="/icons/linia.svg"
        alt="linia"
        width={1920}
        height={1080}
        className={styles.linia}
      />

      <div className="absolute flex flex-col gap-2 items-center justify-center">
        <h1 className={`${unbounded.className} ${styles.heading}`}>ІНЖЕНЕРНИЙ ЯРМАРОК КАР’ЄРИ</h1>
        <span className={`${unbounded.className} ${styles.year}`}>2023</span>
      </div>

      <Marquee
        autoFill={true}
        className="mt-10 bg-white text-ejfBlue py-1 text-md flex w-full font-normal"
      >
        <p className={`${unbounded.className} mr-20`}>4 корпус НУ “ЛП”</p>
        <p className={`${unbounded.className} mr-20`}>15.11 - 16.11</p>
      </Marquee>
    </div>
  );
}
