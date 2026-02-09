'use client';

import {useEffect, useRef, useState} from 'react';
import {FiArrowUp} from 'react-icons/fi';

const BackToTop = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const calculateScrollProgress = () => {
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;
            const docHeight = document.documentElement.scrollHeight;

            const totalScroll = docHeight - windowHeight;
            const progress = totalScroll > 0 ? scrollTop / totalScroll : 0;

            setScrollProgress(Math.min(progress, 1));
            setIsVisible(scrollTop > 600);
        };

        // Throttle the scroll event
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    calculateScrollProgress();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, {passive: true});
        calculateScrollProgress();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const circumference = 2 * Math.PI * 20;
    const strokeDashoffset = circumference - scrollProgress * circumference;

    return (
        <>
            {isVisible && (
                <button
                    ref={buttonRef}
                    className="back-to-top-btn"
                    onClick={scrollToTop}
                    aria-label="Back to top"
                    style={{
                        opacity: isVisible ? 1 : 0,
                        transform: `scale(${isVisible ? 1 : 0})`,
                        pointerEvents: isVisible ? 'auto' : 'none'
                    }}
                >
                    <svg className="progress-svg" viewBox="0 0 44 44">
                        <circle
                            className="progress-bg"
                            cx="22"
                            cy="22"
                            r="20"
                        />
                        <circle
                            className="progress-fill"
                            cx="22"
                            cy="22"
                            r="20"
                            strokeDasharray={circumference}
                            strokeDashoffset={strokeDashoffset}
                        />
                    </svg>

                    <FiArrowUp className="arrow-icon"/>
                </button>
            )}

            <style jsx>{`
        .back-to-top-btn {
          position: fixed;
          bottom: 1.5rem;
          right: 1.5rem;
          width: 3.5rem;
          height: 3.5rem;
          border-radius: 50%;
          background: white;
          border: 1px solid #e5e7eb;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          cursor: pointer;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
          padding: 0;
          margin: 0;
        }

        .back-to-top-btn:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 8px 24px rgba(79, 70, 229, 0.2);
          border-color: #a5b4fc;
        }

        .back-to-top-btn:active {
          transform: translateY(-1px) scale(0.98);
        }

        .progress-svg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          transform: rotate(-90deg);
        }

        .progress-bg {
          fill: none;
          stroke: #e5e7eb;
          stroke-width: 2;
        }

        .progress-fill {
          fill: none;
          stroke: #4f46e5;
          stroke-width: 2;
          stroke-linecap: round;
          transition: stroke-dashoffset 0.15s ease-out;
        }

        .back-to-top-btn:hover .progress-fill {
          stroke: #7c3aed;
          stroke-width: 2.5;
        }

        .arrow-icon {
          position: relative;
          z-index: 2;
          width: 1.25rem;
          height: 1.25rem;
          color: #4f46e5;
          transition: all 0.3s ease;
        }

        .back-to-top-btn:hover .arrow-icon {
          color: #7c3aed;
          transform: translateY(-1px);
        }

        /* Glow effect */
        .back-to-top-btn::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(79, 70, 229, 0.1), rgba(124, 58, 237, 0.1));
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .back-to-top-btn:hover::after {
          opacity: 1;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .back-to-top-btn {
            bottom: 1rem;
            right: 1rem;
            width: 3rem;
            height: 3rem;
          }

          .arrow-icon {
            width: 1rem;
            height: 1rem;
          }
        }
      `}</style>
        </>
    );
};

export default BackToTop;