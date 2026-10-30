import styles from './StatusView.module.css';

export function LoadingView() {
  return (
    <div className={styles.container}>
      <div className={styles.spinner} role="status" aria-label="로딩 중" />
    </div>
  );
}
