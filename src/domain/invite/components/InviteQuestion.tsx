import styles from './InviteQuestion.module.css';

type InviteQuestionProps = {
  title: string;
  inviterName: string;
  inviterAvatarUrl: string;
};

export function InviteQuestion({ title, inviterName, inviterAvatarUrl }: InviteQuestionProps) {
  return (
    <section className={styles.container}>
      <div className={styles.inviterChip}>
        <img className={styles.inviterAvatar} src={inviterAvatarUrl} alt="" />
        <span>{inviterName}님이 초대했어요</span>
      </div>
      <p className={styles.question}>
        {title}에
        <br />
        참석하시나요?
      </p>
    </section>
  );
}
