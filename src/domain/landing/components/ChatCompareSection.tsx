import type { CSSProperties } from 'react';

import { useInView } from '@/common/hooks/useInView';

import styles from './ChatCompareSection.module.css';

type ChatMessage = {
  id: number;
  sender: string;
  text: string;
  isHost?: boolean;
};

const HOST_NAME = '서연';

const GROUP_CHAT_MESSAGES: ChatMessage[] = [
  { id: 1, sender: HOST_NAME, text: '📢 이번 주 화요일 독서모임 참석 가능한 분 손!', isHost: true },
  { id: 2, sender: '지우', text: '저요!' },
  { id: 3, sender: '도윤', text: '혹시 몇 시였죠?' },
  { id: 4, sender: '수아', text: '저 조금 늦어도 되나요' },
  { id: 5, sender: '현우', text: '저는 아직 모르겠어요 ㅠ' },
  { id: 6, sender: HOST_NAME, text: '그래서… 몇 명이죠? 🥲', isHost: true },
];

const TALLY = [
  { label: '참석', count: 5, className: styles.attend },
  { label: '불참', count: 2, className: styles.absent },
  { label: '미응답', count: 3, className: styles.noReply },
];

// 메시지가 순서대로 쌓이도록 각 요소의 등장 순서를 CSS 변수로 전달
const orderStyle = (order: number) => ({ '--order': order }) as CSSProperties;

export function ChatCompareSection() {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.25, once: false });

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        단톡방에선
        <br />늘 이렇게 끝났잖아요
      </h2>

      <div ref={ref} className={`${styles.panels} ${isInView ? styles.play : ''}`}>
        <div className={styles.panel}>
          <p className={styles.panelLabel}>지금까지의 단톡방</p>
          <div className={styles.chat}>
            {GROUP_CHAT_MESSAGES.map((message, index) => (
              <div
                key={message.id}
                className={`${styles.message} ${message.isHost ? styles.mine : ''}`}
                style={orderStyle(index)}
              >
                {!message.isHost && <span className={styles.sender}>{message.sender}</span>}
                <span className={styles.bubble}>{message.text}</span>
              </div>
            ))}
            <p className={styles.unread} style={orderStyle(GROUP_CHAT_MESSAGES.length)}>
              안 읽은 사람 7명
            </p>
          </div>
        </div>

        <div className={`${styles.panel} ${styles.panelWithMe}`}>
          <p className={styles.panelLabel}>WithME 링크를 보내면</p>
          <div className={styles.chat}>
            <div className={`${styles.message} ${styles.mine}`} style={orderStyle(1)}>
              <div className={styles.linkCard}>
                <span className={styles.linkTitle}>화요 독서모임 · 3회차</span>
                <span className={styles.linkMeta}>11월 17일 (화) 오후 7:30</span>
                <span className={styles.linkButton}>참석 여부 응답하기</span>
              </div>
            </div>

            <div className={styles.tally} style={orderStyle(4)}>
              <p className={styles.tallyTitle}>응답 현황</p>
              <ul className={styles.tallyList}>
                {TALLY.map((item) => (
                  <li key={item.label} className={`${styles.tallyItem} ${item.className}`}>
                    <span className={styles.tallyCount}>{item.count}</span>
                    {item.label}
                  </li>
                ))}
              </ul>
              <p className={styles.tallyNote}>응답이 들어올 때마다 자동으로 정리돼요</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
