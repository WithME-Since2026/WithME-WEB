import styles from './InviteHeader.module.css';

import logo from '@/assets/images/logo.png';

type InviteHeaderProps = {
  roundLabel: string;
};

export function InviteHeader({ roundLabel }: InviteHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <img className={styles.logo} src={logo} alt="" />
        <span className={styles.brandName}>WithME</span>
      </div>
      <span className={styles.roundBadge}>{roundLabel}</span>
    </header>
  );
}
