import styles from './AppDownloadCard.module.css';

import downloadIcon from '@/assets/icons/download.svg';


// TODO: 앱 스토어 주소 확정 후 앱 다운로드 버튼에 링크 연결
export function AppDownloadCard() {
  return (
    <section className={styles.card}>
      <p className={styles.title}>일정 변경 알림을 받고 싶다면?</p>
      <p className={styles.description}>
        앱을 설치하면 참석 현황과 일정 변경을 실시간으로 알 수 있어요.
      </p>
      <button type="button" className={styles.downloadButton}>
        <img src={downloadIcon} alt="" width={15} height={15} />앱 다운로드
      </button>
    </section>
  );
}
