import { Link } from 'react-router-dom';

import styles from './LandingHeader.module.css';

import wordmark from '@/assets/images/wordmark.png';

// 문의 페이지에서도 같은 헤더를 쓰기 때문에 다운로드 링크는 랜딩 경로까지 포함
export function LandingHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" aria-label="WithME 홈">
          <img className={styles.wordmark} src={wordmark} alt="WithME" />
        </Link>
        <a className={styles.downloadLink} href="/#download">
          앱 다운로드
        </a>
      </div>
    </header>
  );
}
