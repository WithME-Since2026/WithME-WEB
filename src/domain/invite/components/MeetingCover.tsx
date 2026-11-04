import styles from './MeetingCover.module.css';

import membersIcon from '@/assets/icons/members.svg';

type MeetingCoverProps = {
  title: string;
  coverImageUrl: string;
  memberCount: number;
  memberAvatarUrls: string[];
};

export function MeetingCover({
  title,
  coverImageUrl,
  memberCount,
  memberAvatarUrls,
}: MeetingCoverProps) {
  return (
    <section className={styles.cover}>
      <img className={styles.coverImage} src={coverImageUrl} alt="" />
      <div className={styles.gradient} />
      <div className={styles.info}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.memberRow}>
          <div className={styles.avatarStack}>
            {memberAvatarUrls.map((avatarUrl) => (
              <img key={avatarUrl} className={styles.avatar} src={avatarUrl} alt="" />
            ))}
          </div>
          <div className={styles.memberCount}>
            <img src={membersIcon} alt="" width={11} height={11} />
            <span>멤버 {memberCount}명</span>
          </div>
        </div>
      </div>
    </section>
  );
}
