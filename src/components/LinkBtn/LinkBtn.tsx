import { manrope } from '@/app/fonts';
import Image from 'next/image';
import styles from './LinkBtn.module.scss';

interface LinkBtnProps {
  text: string;
  href: string;
}

export default function LinkBtn({ text, href }: LinkBtnProps) {
  return (
    <div className={`${styles.linkBtn}`}>
      <div className={`${styles.linkBtnBlock}`}>
        <a className={`${manrope.className}`} href={href} target="_blank">
          <div>{text}</div>
          <Image
            src="/icons/arrow.svg"
            alt="arrow"
            width={30}
            height={30}
            className={styles.arrowImage}
          />
        </a>
      </div>
    </div>
  );
}
