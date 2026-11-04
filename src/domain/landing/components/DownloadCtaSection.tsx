import styles from './DownloadCtaSection.module.css';

import { Reveal } from '@/domain/landing/components/Reveal';
import { StoreButtons } from '@/domain/landing/components/StoreButtons';

import penguinCheck from '@/assets/images/penguin-check.png';

export function DownloadCtaSection() {
  return (
    <section id="download" className={styles.section}>
      <Reveal className={styles.card}>
        <div>
          <h2 className={styles.title}>
            다음 모임 공지는
            <br />
            링크로 보내보세요
          </h2>
          <p className={styles.description}>앱은 모임을 여는 사람만 설치하면 돼요.</p>
          <div className={styles.storeButtons}>
            <StoreButtons />
          </div>
        </div>
        <div className={styles.mascot} aria-hidden="true">
          <p className={styles.speech}>
            링크만 보내세요,
            <br />
            세는 건 제가 할게요!
          </p>
          <img className={styles.penguin} src={penguinCheck} alt="" />
        </div>
      </Reveal>
    </section>
  );
}
