import type { CSSProperties, ReactNode } from 'react';

import { useInView } from '@/common/hooks/useInView';

import styles from './Reveal.module.css';

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

// 스크롤로 화면에 들어올 때 아래에서 떠오르며 나타남
export function Reveal({ children, delay = 0, className = '' }: RevealProps) {
  const { ref, isInView } = useInView<HTMLDivElement>();
  const style = { '--reveal-delay': `${delay}ms` } as CSSProperties;

  return (
    <div
      ref={ref}
      className={`${styles.reveal} ${isInView ? styles.visible : ''} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
