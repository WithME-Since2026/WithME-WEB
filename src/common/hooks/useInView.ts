import { useEffect, useRef, useState } from 'react';

type UseInViewOptions = {
  threshold?: number;
  once?: boolean;
};

// 요소가 화면에 들어오면 true (스크롤 등장 애니메이션용)
// once가 false면 화면 밖으로 완전히 나갔을 때 false로 돌아가 다시 들어올 때마다 재생됨
export function useInView<T extends Element>({
  threshold = 0.2,
  once = true,
}: UseInViewOptions = {}) {
  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    if (typeof IntersectionObserver === 'undefined') {
      setIsInView(true);
      return;
    }

    // 0을 함께 관찰해 threshold 경계에서 깜빡이지 않고, 완전히 벗어났을 때만 초기화
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= threshold) {
          setIsInView(true);

          if (once) {
            observer.disconnect();
          }
          return;
        }

        if (!once && !entry.isIntersecting) {
          setIsInView(false);
        }
      },
      { threshold: [0, threshold] },
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
    };
  }, [threshold, once]);

  return { ref, isInView };
}
