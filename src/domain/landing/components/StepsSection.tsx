import styles from './StepsSection.module.css';

import { Reveal } from '@/domain/landing/components/Reveal';

import screenAppCreate from '@/assets/images/screen-app-create.jpg';
import screenAppShare from '@/assets/images/screen-app-share.jpg';
import screenAppStatus from '@/assets/images/screen-app-status.jpg';
import screenInviteResult from '@/assets/images/screen-invite-result.jpg';

const STEPS = [
  {
    number: '01',
    who: '운영자 · 앱',
    title: '모임 만들기',
    description: '이름, 날짜, 장소만 넣으면 돼요. 매주 하는 모임도 반복 설정 한 번이면 끝.',
    screen: screenAppCreate,
  },
  {
    number: '02',
    who: '운영자 · 카카오톡',
    title: '링크 공유',
    description: '만들어진 초대 링크를 카카오톡으로 바로 보내요.',
    screen: screenAppShare,
  },
  {
    number: '03',
    who: '참여자 · 웹',
    title: '링크 열고 응답',
    description: '앱 설치 없이 참석, 불참, 미정 중에 골라요.',
    screen: screenInviteResult,
  },
  {
    number: '04',
    who: '운영자 · 앱',
    title: '현황 확인',
    description: '응답이 실시간으로 정리되고, 미응답자에게는 리마인드를 한 번에 보내요.',
    screen: screenAppStatus,
  },
];

export function StepsSection() {
  return (
    <section className={styles.section}>
      <Reveal>
        <h2 className={styles.title}>
          보내는 건 링크 하나,
          <br />
          세는 건 WithME가
        </h2>
      </Reveal>
      <ol className={styles.list}>
        {STEPS.map((item, index) => (
          <li key={item.number} className={styles.listItem}>
            <Reveal className={styles.item} delay={index * 100}>
              <div className={styles.screen}>
                <img src={item.screen} alt={`${item.title} 화면`} loading="lazy" />
              </div>
              <span className={styles.number}>{item.number}</span>
              <span className={styles.who}>{item.who}</span>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemDescription}>{item.description}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
