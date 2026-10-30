import styles from './MeetingInfoCard.module.css';

import calendarIcon from '@/assets/icons/calendar.svg';
import clockIcon from '@/assets/icons/clock.svg';
import locationIcon from '@/assets/icons/location.svg';


type MeetingInfoCardProps = {
  dateText: string;
  timeText: string;
  locationText: string;
};

export function MeetingInfoCard({ dateText, timeText, locationText }: MeetingInfoCardProps) {
  return (
    <ul className={styles.card}>
      <li className={styles.row}>
        <img src={calendarIcon} alt="날짜" width={14} height={14} />
        <span>{dateText}</span>
      </li>
      <li className={styles.row}>
        <img src={clockIcon} alt="시간" width={14} height={14} />
        <span>{timeText}</span>
      </li>
      <li className={`${styles.row} ${styles.rowTop}`}>
        <img className={styles.locationIcon} src={locationIcon} alt="장소" width={14} height={14} />
        <span className={styles.locationText}>{locationText}</span>
      </li>
    </ul>
  );
}
