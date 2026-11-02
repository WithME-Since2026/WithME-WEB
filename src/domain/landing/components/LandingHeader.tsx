import styles from './LandingHeader.module.css';

import wordmark from '@/assets/images/wordmark.png';

export function LandingHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <img className={styles.wordmark} src={wordmark} alt="WithME" />
        <a className={styles.downloadLink} href="#download">
          앱 다운로드
        </a>
      </div>
    </header>
  );
}
