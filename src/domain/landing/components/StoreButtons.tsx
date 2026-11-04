import styles from './StoreButtons.module.css';

import appStoreBadge from '@/assets/images/app-store-badge.png';
import googlePlayBadge from '@/assets/images/google-play-badge.png';

const STORES = [
  { key: 'appStore', badge: appStoreBadge, label: 'App Store에서 다운로드' },
  { key: 'googlePlay', badge: googlePlayBadge, label: 'Google Play에서 다운로드' },
];

type StoreButtonsProps = {
  align?: 'start' | 'center';
};

// TODO: 앱 스토어 주소 확정 후 각 배지에 링크 연결
export function StoreButtons({ align = 'start' }: StoreButtonsProps) {
  return (
    <div className={`${styles.row} ${styles[align]}`}>
      {STORES.map((store) => (
        <button key={store.key} type="button" className={styles.button} aria-label={store.label}>
          <img className={styles.badge} src={store.badge} alt="" />
        </button>
      ))}
    </div>
  );
}
