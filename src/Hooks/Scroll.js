import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useScrollFadeIn = ({
  yOffset = 40,
  direction = 'y',
  duration = 1.5,
  delay = 0.4,
  ease = 'power3.out',
  triggerStart = 'top 90%',
  once = false,
  fadeOnly = false,
} = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const fromVars = fadeOnly ? { opacity: 0 } : { opacity: 0 };
    const toVars = fadeOnly
      ? { opacity: 1, duration, delay, ease }
      : { opacity: 1, duration, delay, ease };

    if (!fadeOnly) {
      const directionAxis = direction[0];
      let effectiveOffset = yOffset;

      if (direction === 'x+') effectiveOffset = -yOffset;
      if (direction === 'x-') effectiveOffset = yOffset;
      if (direction === 'y+') effectiveOffset = -yOffset;
      if (direction === 'y-') effectiveOffset = yOffset;

      if (directionAxis === 'x') {
        fromVars.x = effectiveOffset;
        fromVars.y = 0;
        toVars.x = 0;
        toVars.y = 0;
      } else {
        fromVars.y = effectiveOffset;
        fromVars.x = 0;
        toVars.y = 0;
        toVars.x = 0;
      }
    }

    toVars.scrollTrigger = {
      trigger: ref.current,
      start: triggerStart,
      toggleActions: once ? 'play none none none' : 'play none none reverse',
    };

    gsap.fromTo(ref.current, fromVars, toVars);
  }, [yOffset, direction, duration, delay, ease, triggerStart, once, fadeOnly]);

  return ref;
};

export default useScrollFadeIn;