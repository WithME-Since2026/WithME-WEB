import styles from './StatusView.module.css';

type ErrorViewProps = {
  message?: string;
  actionLabel?: string;
  onAction?: () => void;
};

export function ErrorView({
  message = '오류가 발생했습니다.',
  actionLabel,
  onAction,
}: ErrorViewProps) {
  return (
    <div className={styles.container}>
      <p className={styles.message}>{message}</p>
      {actionLabel && onAction && (
        <button type="button" className={styles.actionButton} onClick={onAction}>
          {actionLabel}
        </button>
      )}
    </div>
  );
}
