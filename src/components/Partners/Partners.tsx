'use client';
import { unbounded } from '@/app/fonts';
import useMediaQuery from '@/utils/useMediaQuery';
import Image from 'next/image';
import CompaniesIntroduce from './CompaniesIntroduce';
import CompaniesList from './CompaniesList';
import styles from './Partners.module.scss';

export default function Partners() {
  const { matches } = useMediaQuery('(max-width: 769px)');

  return (
    <>
      {matches ? (
        <div className="flex gap-6 items-center justify-center mb-9 px-[25px]">
          <h3 className={`${unbounded.className} font-bold text-[32px]`}>НАШІ ПАРТНЕРИ</h3>
          <div className="rotate-[135deg]">
            <Image src="/images/arrow.svg" alt="arrow" width={25} height={25} />
          </div>
        </div>
      ) : null}
      <div className={styles.partners}>
        <CompaniesList />
        <CompaniesIntroduce />
      </div>
    </>
  );
}
