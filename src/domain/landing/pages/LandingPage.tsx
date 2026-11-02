import styles from './LandingPage.module.css';

import { ChatCompareSection } from '@/domain/landing/components/ChatCompareSection';
import { DownloadCtaSection } from '@/domain/landing/components/DownloadCtaSection';
import { HeroSection } from '@/domain/landing/components/HeroSection';
import { LandingFooter } from '@/domain/landing/components/LandingFooter';
import { LandingHeader } from '@/domain/landing/components/LandingHeader';
import { StepsSection } from '@/domain/landing/components/StepsSection';

export function LandingPage() {
  return (
    <main className={styles.page}>
      <LandingHeader />
      <HeroSection />
      <ChatCompareSection />
      <StepsSection />
      <DownloadCtaSection />
      <LandingFooter />
    </main>
  );
}
