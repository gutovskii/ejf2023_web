import { useStore } from '../store';
import styles from './CompaniesIntroduce.module.scss';

import { manrope } from '@/app/fonts';
import LinkBtn from '@/components/LinkBtn';
import useMediaQuery from '@/utils/useMediaQuery';
import Image from 'next/image';
import { partnersConfig } from '../partners.config';

export default function CompaniesIntroduce() {
  const [state] = useStore();
  const { matches } = useMediaQuery('(min-width: 769px)');

  return (
    <div className={styles.introduce}>
      <div className={styles.introducePage}>
        <div className={styles.introduceInfo}>
          <div className={styles.introduceImage}>
            <Image
              src={partnersConfig[state.currentCompany].logoSrc}
              alt={partnersConfig[state.currentCompany].btnText}
              width={350}
              height={300}
            />
          </div>
          <div className={`${manrope.className} ${styles.introduceDesc}`}>
            {partnersConfig[state.currentCompany].description}
          </div>
          <LinkBtn
            text={partnersConfig[state.currentCompany].btnText}
            href={partnersConfig[state.currentCompany].url}
          />
        </div>
        <div className={styles.introducePhotos}>
          <div>
            <Image
              src={partnersConfig[state.currentCompany].imgSrcs.first}
              alt="company img"
              width={337}
              height={265}
            />
          </div>
          <div>
            <Image
              src={partnersConfig[state.currentCompany].imgSrcs.second}
              alt="company img"
              width={337}
              height={265}
            />
          </div>
          {matches ? (
            <div>
              <Image
                src={partnersConfig[state.currentCompany].imgSrcs.third}
                alt="company img"
                width={337}
                height={265}
              />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
