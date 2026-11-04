import styles from './HeroSection.module.css';

import { StoreButtons } from '@/domain/landing/components/StoreButtons';

import screenRespond from '@/assets/images/screen-invite-respond.jpg';

export function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.copy}>
          <h1 className={styles.title}>
            이번 모임,
            <br />
            <span className={styles.highlight}>
              누구누구
              <svg
                className={styles.underline}
                viewBox="0 0 220 16"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path d="M3 11 C 45 4, 95 3, 140 8 S 200 12, 217 6" pathLength={1} />
              </svg>
            </span>{' '}
            와요?
          </h1>
          <p className={styles.description}>
            <span>단톡방에 &lsquo;참석 가능한 분 손!&rsquo; 올리고</span>{' '}
            <span>하나하나 세던 거,</span> <span>이제 안 해도 돼요.</span>
            <br />
            <span>모임 링크 하나만 보내면</span> <span>응답이 알아서 모여요.</span>
          </p>
          <div className={styles.storeButtons}>
            <StoreButtons />
          </div>
          <p className={styles.note}>참여자는 앱 없이 링크로 응답해요</p>
        </div>

        <div className={styles.screen}>
          <img src={screenRespond} alt="초대 링크를 열었을 때 보이는 참석 응답 화면" />
        </div>
      </div>
    </section>
  );
}
