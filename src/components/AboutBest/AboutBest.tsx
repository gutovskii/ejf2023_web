'use client';
import { manrope, unbounded } from '@/app/fonts';
import useMediaQuery from '@/utils/useMediaQuery';
import Image from 'next/image';
import Link from 'next/link';
import styles from './AboutBest.module.scss';

export default function AboutBest() {
  const { matches } = useMediaQuery('(min-width: 1010px)');

  return (
    <div className={styles.container} style={{ marginTop: matches ? '130px' : '110px' }}>
      <div className={styles.infoContainer}>
        <span className={`${unbounded.className} ${styles.infoText}`}>BEST Lviv</span>
        <Link href="https://best-lviv.org.ua">
          <Image
            src="/icons/arrow.svg"
            alt="arrow"
            width={40}
            height={40}
            className={styles.arrowImage}
          />
        </Link>
        <div>
          <p className={`${manrope.className}  ${styles.description}`}>
            BEST Lviv (Board of European Students of Technology) – осередок міжнародної
            неприбуткової громадської організації, який об’єднує студентів технічних спеціальностей.
            Нашою місією є розвиток студентів через обмін знаннями та співпраці компаній,
            університетів та студентів Європи.
          </p>
        </div>
        <div className={`${manrope.className}  ${styles.statistics}`}>
          <span className={styles.stat}>30 країн</span>
          <span className={styles.stat}>85 осередків</span>
          <span className={styles.stat}>34 роки досвіду</span>
        </div>
      </div>

      <div className="col-span-1 p-[4vw]">
        <Image
          src="/image/BestLogo.svg"
          alt="Best Logo"
          width={590}
          height={333}
          className={`h-full px-[2vw] ${styles.logoImage}`}
        />
      </div>
    </div>
  );
}
