import styles from './KakaoLoginSection.module.css';

import kakaoIcon from '@/assets/icons/kakao.svg';


type KakaoLoginSectionProps = {
  onKakaoLogin: () => void;
};

export function KakaoLoginSection({ onKakaoLogin }: KakaoLoginSectionProps) {
  return (
    <section className={styles.container}>
      <div className={styles.divider} />
      <p className={styles.title}>참석 응답을 남기려면 로그인이 필요해요</p>
      <p className={styles.description}>카카오 계정으로 빠르게 시작할 수 있어요</p>
      <button type="button" className={styles.kakaoButton} onClick={onKakaoLogin}>
        <img src={kakaoIcon} alt="" width={18} height={18} />
        카카오로 시작하기
      </button>
      <p className={styles.notice}>
        웹에서는 카카오 로그인만 지원해요.
        <br />
        다른 로그인 방법은 앱에서 이용 가능해요.
      </p>
    </section>
  );
}
