import styles from './AttendanceChoiceButtons.module.css';

import type { InviteAttendanceStatus } from '@/domain/invite/types';

import absentDefaultIcon from '@/assets/icons/absent-default.svg';
import absentSelectedIcon from '@/assets/icons/absent-selected.svg';
import attendDefaultIcon from '@/assets/icons/attend-default.svg';
import attendSelectedIcon from '@/assets/icons/attend-selected.svg';



const CHOICES: {
  value: InviteAttendanceStatus;
  label: string;
  defaultIcon: string;
  selectedIcon: string;
  selectedClassName: string;
}[] = [
  {
    value: 'ATTEND',
    label: '참석',
    defaultIcon: attendDefaultIcon,
    selectedIcon: attendSelectedIcon,
    selectedClassName: styles.attendSelected,
  },
  {
    value: 'ABSENT',
    label: '불참',
    defaultIcon: absentDefaultIcon,
    selectedIcon: absentSelectedIcon,
    selectedClassName: styles.absentSelected,
  },
];

type AttendanceChoiceButtonsProps = {
  value: InviteAttendanceStatus | null;
  onChange: (value: InviteAttendanceStatus) => void;
};

export function AttendanceChoiceButtons({ value, onChange }: AttendanceChoiceButtonsProps) {
  return (
    <div className={styles.row} role="radiogroup" aria-label="참석 여부">
      {CHOICES.map((choice) => {
        const isSelected = value === choice.value;

        return (
          <button
            key={choice.value}
            type="button"
            role="radio"
            aria-checked={isSelected}
            className={`${styles.button} ${isSelected ? choice.selectedClassName : ''}`}
            onClick={() => onChange(choice.value)}
          >
            <img
              src={isSelected ? choice.selectedIcon : choice.defaultIcon}
              alt=""
              width={20}
              height={20}
            />
            {choice.label}
          </button>
        );
      })}
    </div>
  );
}
