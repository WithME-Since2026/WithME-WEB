import styles from './StatusView.module.css';

type ErrorViewProps = {
  message?: string;
};

export function ErrorView({ message = '오류가 발생했습니다.' }: ErrorViewProps) {
  return (
    <div className={styles.container}>
      <p className={styles.message}>{message}</p>
    </div>
  );
}
