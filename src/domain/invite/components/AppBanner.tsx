import styles from './AppBanner.module.css';

import logo from '@/assets/images/logo.png';

// TODO: 앱 스토어 주소 확정 후 앱 설치 버튼에 링크 연결
export function AppBanner() {
  return (
    <aside className={styles.banner}>
      <img className={styles.logo} src={logo} alt="" />
      <div className={styles.texts}>
        <p className={styles.title}>앱을 설치하면 일정 변경도 바로 알려드려요</p>
        <p className={styles.description}>참석 현황·리마인더까지 한 번에</p>
      </div>
      <button type="button" className={styles.installButton}>
        앱 설치
      </button>
    </aside>
  );
}
