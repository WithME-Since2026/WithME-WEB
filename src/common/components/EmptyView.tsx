import styles from './StatusView.module.css';

type EmptyViewProps = {
  message?: string;
};

export function EmptyView({ message = '데이터가 없습니다.' }: EmptyViewProps) {
  return (
    <div className={styles.container}>
      <p className={styles.message}>{message}</p>
    </div>
  );
}
