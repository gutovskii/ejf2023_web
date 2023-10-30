import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerIcons}>
        <div>
          <img src="../../../icons/instagram.svg" alt="linkedin" />
        </div>
        <div>
          <img src="../../../icons/linkedin.svg" alt="linkedin" />
        </div>
        <div>
          <img src="../../../icons/telegram.svg" alt="telegram" />
        </div>
      </div>
      <div className={styles.footerEjf}>
        <img src="../../../icons/ejf-icon.svg" width={300} />
      </div>
      <div className={styles.footerYear}>2023</div>
    </div>
  );
}
