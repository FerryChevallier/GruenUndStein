import { useEffect } from 'react';

export function useCounterAnimation() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          const endValue = parseInt(target.getAttribute('data-counter') || '0', 10);
          const duration = 1500;
          const frameDuration = 1000 / 60;
          const totalFrames = Math.round(duration / frameDuration);
          let frame = 0;

          const easeOutQuad = (t: number) => t * (2 - t);

          const counter = setInterval(() => {
            frame++;
            const progress = easeOutQuad(frame / totalFrames);
            const currentCount = Math.round(endValue * progress);

            if (parseInt(target.innerText, 10) !== currentCount) {
              target.innerText = currentCount.toString();
            }

            if (frame === totalFrames) {
              clearInterval(counter);
              target.innerText = endValue.toString();
            }
          }, frameDuration);

          observer.unobserve(target);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('[data-counter]');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
}
