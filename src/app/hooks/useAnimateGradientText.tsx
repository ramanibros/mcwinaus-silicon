'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// This is for gradient text animation (like Your Growth Partner)
export default function useAnimateGradientText() {
  const textRef = useRef<HTMLSpanElement>(null);  // Changed this line

  useEffect(() => {
    if (typeof window === 'undefined' || !textRef.current) return;

    const element = textRef.current;

    // Apply gradient styles - TypeScript now knows element is HTMLSpanElement
    element.style.backgroundSize = "200% 200%";
    element.style.backgroundPosition = "100% 0%";

    // The EXACT same gradient animation from your Features component
    gsap.fromTo(element,
      {
        opacity: 0,
        scale: 0.8,
        backgroundSize: "200% 200%",
        backgroundPosition: "100% 0%"
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "back.out(1.7)",
        backgroundPosition: "0% 100%",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
          markers: false,
        }
      }
    );

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === element) trigger.kill();
      });
    };
  }, []);

  return textRef;
}