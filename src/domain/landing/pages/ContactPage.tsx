import styles from './ContactPage.module.css';

import { LandingFooter } from '@/domain/landing/components/LandingFooter';
import { LandingHeader } from '@/domain/landing/components/LandingHeader';

const CONTACT_EMAIL = 'withme2026official@gmail.com';

const FAQS = [
  {
    question: '참여자도 앱을 설치해야 하나요?',
    answer: '아니요. 받은 초대 링크를 열고 카카오로 로그인하면 바로 응답할 수 있어요.',
  },
  {
    question: '응답을 바꾸고 싶어요',
    answer: '같은 초대 링크로 다시 들어가면 응답을 바꿀 수 있어요.',
  },
  {
    question: '초대 링크가 열리지 않아요',
    answer: '모임이 끝났거나 삭제되었을 수 있어요. 모임을 연 사람에게 새 링크를 요청해주세요.',
  },
  {
    question: '모임은 어떻게 만드나요?',
    answer: 'WithME 앱을 설치하면 모임을 만들고 초대 링크를 보낼 수 있어요.',
  },
];

export function ContactPage() {
  return (
    <main className={styles.page}>
      <LandingHeader />

      <section className={styles.content}>
        <h1 className={styles.title}>문의하기</h1>
        <p className={styles.description}>궁금한 점이나 불편한 점이 있다면 알려주세요.</p>

        <h2 className={styles.sectionTitle}>자주 묻는 질문</h2>
        <ul className={styles.faqList}>
          {FAQS.map((faq) => (
            <li key={faq.question}>
              <details className={styles.faq}>
                <summary className={styles.question}>{faq.question}</summary>
                <p className={styles.answer}>{faq.answer}</p>
              </details>
            </li>
          ))}
        </ul>

        <div className={styles.contactCard}>
          <p className={styles.contactTitle}>원하는 답을 찾지 못했나요?</p>
          <p className={styles.contactDescription}>아래 메일로 보내주시면 확인 후 답장드릴게요.</p>
          <a className={styles.mailButton} href={`mailto:${CONTACT_EMAIL}`}>
            이메일로 문의하기
          </a>
          <p className={styles.email}>{CONTACT_EMAIL}</p>
        </div>
      </section>

      <LandingFooter />
    </main>
  );
}
