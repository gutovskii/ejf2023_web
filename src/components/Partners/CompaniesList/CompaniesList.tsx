import { unbounded } from '@/app/fonts';
import Image from 'next/image';
import { companyLogosSrc, partnersConfig } from '../partners.config';
import styles from './CompaniesList.module.scss';

import { useStore } from '../store';

export default function CompaniesList() {
  const [state, actions] = useStore();

  return (
    <div className={styles.list}>
      {Object.keys(partnersConfig).map((companyName, i) => (
        <div
          style={{
            opacity: state.currentCompany === companyName ? 1 : 0.6,
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            marginBottom: '30px',
          }}
          className={styles.listItem}
          onClick={() => actions.chooseCompany(companyName)}
          key={i}
        >
          <Image
            className={`${styles.listItemLogo}`}
            src={companyLogosSrc[i]}
            alt="logo"
            width={35}
            height={35}
          />
          <div
            className={`${unbounded.className} ${styles.listItemName}`}
            style={{ fontWeight: 700 }}
          >
            {companyName}
          </div>
        </div>
      ))}
    </div>
  );
}
