'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// This is needed for GSAP
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// This is your reusable animation hook
export default function useAnimateText() {
  const textRef = useRef<HTMLHeadingElement>(null);  // Changed this line

  useEffect(() => {
    // Don't run on server
    if (typeof window === 'undefined' || !textRef.current) return;

    const element = textRef.current;

    // The EXACT same animation from your Features component
    gsap.fromTo(element,
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
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