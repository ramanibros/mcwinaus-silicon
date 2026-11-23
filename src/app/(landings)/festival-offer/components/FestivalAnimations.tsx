'use client';

import {useEffect} from 'react';

type RevealGroup = {
    selector: string;
    direction?: 'up' | 'left' | 'right' | 'scale';
    stagger?: number;
    startDelay?: number;
};

const revealGroups: RevealGroup[] = [
    {selector: '.ss-section > .container > .text-center'},
    {selector: '.ss-card', stagger: 110},
    {selector: '.hww-section .container > .text-center'},
    {selector: '.hww-card', stagger: 90},
    {selector: '.nc-notes .container > .text-center'},
    {selector: '.nc-note-card', stagger: 70},
    {selector: '.nc-cta .row > div', stagger: 140},
];

const FestivalAnimations = () => {
    useEffect(() => {
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
        if (reducedMotion.matches) return;

        const animatedElements: HTMLElement[] = [];
        const cleanupTimers: number[] = [];

        revealGroups.forEach(({selector, direction = 'up', stagger = 0, startDelay = 0}) => {
            document.querySelectorAll<HTMLElement>(selector).forEach((element, index) => {
                element.classList.add('festival-reveal', `festival-reveal--${direction}`);
                element.style.setProperty('--festival-reveal-delay', `${startDelay + index * stagger}ms`);
                animatedElements.push(element);
            });
        });

        document.documentElement.classList.add('festival-motion-ready');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    const element = entry.target as HTMLElement;
                    const delay = Number.parseInt(
                        element.style.getPropertyValue('--festival-reveal-delay'),
                        10
                    ) || 0;

                    element.classList.add('festival-reveal--visible');
                    observer.unobserve(element);

                    cleanupTimers.push(window.setTimeout(() => {
                        element.classList.remove(
                            'festival-reveal',
                            'festival-reveal--up',
                            'festival-reveal--left',
                            'festival-reveal--right',
                            'festival-reveal--scale',
                            'festival-reveal--visible'
                        );
                        element.style.removeProperty('--festival-reveal-delay');
                    }, delay + 800));
                });
            },
            {threshold: 0.12, rootMargin: '0px 0px -8% 0px'}
        );

        animatedElements.forEach((element) => observer.observe(element));

        return () => {
            observer.disconnect();
            cleanupTimers.forEach((timer) => window.clearTimeout(timer));
            document.documentElement.classList.remove('festival-motion-ready');
            animatedElements.forEach((element) => {
                element.classList.remove(
                    'festival-reveal',
                    'festival-reveal--up',
                    'festival-reveal--left',
                    'festival-reveal--right',
                    'festival-reveal--scale',
                    'festival-reveal--visible'
                );
                element.style.removeProperty('--festival-reveal-delay');
            });
        };
    }, []);

    return (
        <style jsx global>{`
            .festival-motion-ready .festival-reveal {
                opacity: 0;
                transition:
                    opacity .72s cubic-bezier(.22, 1, .36, 1),
                    transform .72s cubic-bezier(.22, 1, .36, 1);
                transition-delay: var(--festival-reveal-delay, 0ms);
                will-change: opacity, transform;
            }

            .festival-motion-ready .festival-reveal--up { transform: translate3d(0, 34px, 0); }
            .festival-motion-ready .festival-reveal--left { transform: translate3d(-34px, 0, 0); }
            .festival-motion-ready .festival-reveal--right { transform: translate3d(42px, 0, 0); }
            .festival-motion-ready .festival-reveal--scale { transform: scale(.94); }

            .festival-motion-ready .festival-reveal--visible {
                opacity: 1;
                transform: translate3d(0, 0, 0) scale(1);
            }

            .festival-santa__image {
                animation: festival-santa-float 5.5s ease-in-out infinite;
                transform-origin: 50% 100%;
            }

            .festival-santa__discount {
                animation: festival-discount-float 4.2s ease-in-out infinite;
            }

            .festival-santa__deal--website {
                animation: festival-chip-float 4.8s ease-in-out infinite;
            }

            .festival-santa__deal--social {
                animation: festival-chip-float 4.8s ease-in-out -2.4s infinite;
            }

            .festival-santa__sparkle {
                animation: festival-sparkle 2.4s ease-in-out infinite;
            }

            .festival-santa__sparkle--two { animation-delay: -.8s; }
            .festival-santa__sparkle--three { animation-delay: -1.6s; }

            .festival-hero__primary-btn svg {
                animation: festival-arrow-bounce 1.8s ease-in-out infinite;
            }

            .hww-orb-1,
            .nc-cta-orb-1 {
                animation: festival-orb-drift 9s ease-in-out infinite alternate;
            }

            .hww-orb-2,
            .nc-cta-orb-2 {
                animation: festival-orb-drift 11s ease-in-out -3s infinite alternate-reverse;
            }

            @keyframes festival-santa-float {
                0%, 100% { transform: translate3d(0, 0, 0) rotate(-.35deg); }
                50% { transform: translate3d(0, -10px, 0) rotate(.35deg); }
            }

            @keyframes festival-discount-float {
                0%, 100% { transform: translate3d(0, 0, 0) rotate(7deg); }
                50% { transform: translate3d(0, -9px, 0) rotate(4deg); }
            }

            @keyframes festival-chip-float {
                0%, 100% { transform: translate3d(0, 0, 0); }
                50% { transform: translate3d(0, -7px, 0); }
            }

            @keyframes festival-sparkle {
                0%, 100% { opacity: .4; transform: scale(.75) rotate(0); }
                50% { opacity: 1; transform: scale(1.2) rotate(18deg); }
            }

            @keyframes festival-arrow-bounce {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(4px); }
            }

            @keyframes festival-orb-drift {
                from { translate: -12px -8px; scale: .96; }
                to { translate: 18px 12px; scale: 1.06; }
            }

            @media (prefers-reduced-motion: reduce) {
                .festival-reveal {
                    opacity: 1 !important;
                    transform: none !important;
                    transition: none !important;
                }

                .festival-santa__image,
                .festival-santa__discount,
                .festival-santa__deal,
                .festival-santa__sparkle,
                .festival-hero__primary-btn svg,
                .hww-orb,
                .nc-cta-orb {
                    animation: none !important;
                }
            }
        `}</style>
    );
};

export default FestivalAnimations;
