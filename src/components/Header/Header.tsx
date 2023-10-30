'use client';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './Header.module.scss';

import Link from 'next/link';
import { useState } from 'react';
import { HeaderLink, MobileHeaderLink } from './components/HeaderLink/HeaderLink';

const ROUTES = [
  {
    href: '/',
    text: 'Головна',
    iconSrc: '/icons/house.svg',
  },
  {
    href: '/partners',
    text: 'Партнери',
    iconSrc: '/icons/diamond.svg',
  },
  {
    href: '/map',
    text: 'Карта',
    iconSrc: '/icons/location.svg',
  },
  {
    href: '/about',
    text: 'Організатори',
    iconSrc: '/icons/people.svg',
  },
];

export default function Header() {
  const asPath = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header
      className={`content-container flex justify-between pt-[20px] pb-[20px] items-center fixed bg-black z-[800] ${styles.header}`}
    >
      <Link href={'/'}>
        <Image
          src="/images/logo.svg"
          alt="logo"
          width={70}
          height={70}
          className={`ml-[50px] ${styles.header_logo}`}
        />
      </Link>

      <div className={`flex pr-[70px] gap-[80px] max-[920px]:gap-[40px] ${styles.header_desktop}`}>
        {ROUTES.map((route) => (
          <HeaderLink
            key={route.text}
            href={route.href}
            text={route.text}
            isActive={asPath === route.href ? true : false}
          />
        ))}
      </div>
      <div className={`${styles.header_mobile} mr-[15px]`}>
        <button onClick={toggleMenu}>
          <Image src="/icons/hamburger.svg" alt="menu" width={32} height={25} />
        </button>
      </div>

      <div
        onClick={toggleMenu}
        className={`w-screen h-screen absolute top-0 left-0 flex flex-col items-end bg-black bg-opacity-30 ${
          styles.header_mobile_wrapper
        } ${isOpen ? styles.header_mobile_wrapper_active : ''}`}
      >
        <div className={`w-[175px] bg-black z-[999] mt-[30px] flex flex-col h-screen`}>
          <button className="self-end mr-[15px]">
            <Image src="/icons/hamburger.svg" alt="menu" width={32} height={25} />
          </button>
          <div className="self-start mt-[33px]">
            {ROUTES.map((route) => (
              <MobileHeaderLink
                key={route.text}
                href={route.href}
                text={route.text}
                isActive={asPath === route.href ? true : false}
                iconSrc={route.iconSrc}
                iconAlt={route.text}
              />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
