'use client';
import React, {useEffect, useRef} from "react";
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';

type Benefit = {
    id: number;
    title: string;
    description: string;
    image?: string;
};

const benefitsData: Benefit[] = [
    {
        id: 1,
        title: 'Prototype in 24 hrs',
        description:
            'Commodo senectus massa est urna mi. Mattis dis arcu aenean libero viverra gravida id. Imperdiet elit integer elit.',
    },
    {
        id: 2,
        title: 'MVP within two weeks',
        description:
            'Purus netus eget facilisis morbi pellentesque. Fermentum mi sit a mi ebentot pellentesque.',
    },
    {
        id: 3,
        title: 'Kickstart development',
        description:
            'Purus netus eget facilisis morbi pellentesque. Fermentum mi sit a mi ebentot pellentesque.',
    },
    {
        id: 4,
        title: '24/7 Tech support',
        description:
            'Commodo senectus massa est urna mi. Mattis dis arcu aenean libero viverra gravida id. Imperdiet elit integer elit.',
    }
];

// Register GSAP plugins
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const Benefits = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const wavesRef = useRef<HTMLDivElement>(null);
    const spanRef = useRef<HTMLSpanElement>(null); // Ref for the "benefits" word

    useEffect(() => {
        // GSAP Animation for "benefits" word only
        if (spanRef.current) {
            const spanText = spanRef.current;

            gsap.fromTo(spanText,
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
                        trigger: spanText,
                        start: "top 80%",
                        end: "top 20%",
                        scrub: 1,
                        markers: false,
                    }
                }
            );
        }

        // Tech wave lines animation
        const container = wavesRef.current;
        if (!container) return;

        const createWaveLine = () => {
            const wave = document.createElement('div');
            wave.className = 'tech-wave-line';

            // Random properties
            const width = Math.random() * 200 + 50;
            const height = Math.random() * 4 + 1;
            const left = Math.random() * 100;
            const top = Math.random() * 100;
            const opacity = Math.random() * 0.2 + 0.05;
            const duration = Math.random() * 20 + 10;
            const delay = Math.random() * 5;

            wave.style.cssText = `
                position: absolute;
                width: ${width}px;
                height: ${height}px;
                left: ${left}%;
                top: ${top}%;
                background: linear-gradient(90deg, 
                    transparent 0%, 
                    #8b5cf6 20%, 
                    #ec4899 50%, 
                    #8b5cf6 80%, 
                    transparent 100%);
                opacity: ${opacity};
                border-radius: 2px;
                filter: blur(1px);
                animation: waveMove ${duration}s linear infinite ${delay}s;
                z-index: 0;
            `;

            container.appendChild(wave);

            // Remove after animation completes
            setTimeout(() => {
                if (wave.parentNode === container) {
                    container.removeChild(wave);
                }
            }, (duration + delay) * 1000);
        };

        // Create initial waves
        for (let i = 0; i < 15; i++) {
            setTimeout(createWaveLine, i * 500);
        }

        // Continue creating waves
        const interval = setInterval(createWaveLine, 1000);

        return () => {
            clearInterval(interval);
            if (container) {
                container.innerHTML = '';
            }
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section className="section-wrapper">
            {/* Static Background Gradient */}
            <div className="static-bg"/>

            {/* Tech Wave Lines Container */}
            <div ref={wavesRef} className="tech-waves-container"/>

            {/* Header with GSAP animation on "benefits" word */}
            <div className="section-info">
                <h1>Our <span ref={spanRef} className="text-gradient-primary">benefits</span></h1>
                <p className="subtitle">Why choose our solutions</p>
            </div>

            {/* Cards in Single Row */}
            <div className="cards-row">
                {benefitsData.map((benefit) => (
                    <div className="card-container" key={benefit.id}>
                        <div className="card">
                            <div className="card-content">
                                <h1>{benefit.title}</h1>
                                <p>{benefit.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <style jsx>{`
                .section-wrapper {
                    padding: 5rem 2rem;
                    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
                    position: relative;
                    overflow: hidden;
                }

                /* Static Background Gradient */
                .static-bg {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(135deg, 
                        #1a0b2e 0%, 
                        #2d1b69 30%, 
                        #6d28d9 60%, 
                        #db2777 90%);
                    z-index: 0;
                }

                /* Tech Wave Lines Container */
                .tech-waves-container {
                    position: absolute;
                    inset: 0;
                    z-index: 1;
                    overflow: hidden;
                }

                /* Section Info */
                .section-info {
                    text-align: center;
                    margin-bottom: 4rem;
                    padding: 0 1rem;
                    position: relative;
                    z-index: 2;
                }

                .section-info h1 {
                    font-size: 3.5em;
                    margin: 0 0 0.5rem 0;
                    font-weight: 700;
                    color: white;
                }

                /* Text gradient with animation - SAME AS YOUR EXAMPLES */
                .highlight {
                    background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
                    background-size: 200% 200%;
                    background-position: 100% 0%;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    display: inline-block;
                }

                .section-info .subtitle {
                    font-size: 1.2em;
                    color: rgba(255, 255, 255, 0.7);
                    max-width: 500px;
                    margin: 0 auto;
                    font-weight: 300;
                }

                /* Single Row Cards Container */
                .cards-row {
                    display: flex;
                    justify-content: center;
                    align-items: stretch;
                    gap: 2rem;
                    padding: 2rem;
                    max-width: 1400px;
                    margin: 0 auto;
                    position: relative;
                    z-index: 2;
                    flex-wrap: nowrap;
                }

                /* Card Container */
                .card-container {
                    position: relative;
                    flex: 1;
                    min-width: 280px;
                    max-width: 320px;
                    z-index: 2;
                }

                /* Card Base Style */
                .card {
                    position: relative;
                    height: 230px;
                    width: 100%;
                    color: white;
                    border-radius: 16px;
                    padding: 2rem;
                    display: flex;
                    align-items: flex-end;
                    overflow: hidden;
                    background: rgba(255, 255, 255, 0.03);
                    backdrop-filter: blur(15px);
                    -webkit-backdrop-filter: blur(15px);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    box-shadow: 
                        0 8px 32px rgba(0, 0, 0, 0.2),
                        inset 0 1px 0 rgba(255, 255, 255, 0.05);
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }

                /* Morphic Effect Base */
                .card::before,
                .card::after {
                    content: '';
                    position: absolute;
                    border-radius: 50%;
                    background: linear-gradient(45deg, 
                        rgba(139, 92, 246, 0.2), 
                        rgba(236, 72, 153, 0.2));
                    filter: blur(40px);
                    z-index: -1;
                    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
                }

                /* Top Left Morph */
                .card::before {
                    width: 150px;
                    height: 150px;
                    top: -50px;
                    left: -50px;
                    opacity: 0.3;
                }

                /* Bottom Right Morph */
                .card::after {
                    width: 200px;
                    height: 200px;
                    bottom: -80px;
                    right: -80px;
                    opacity: 0.2;
                }

                /* Hover Morphic Effect */
                .card:hover {
                    transform: translateY(-10px);
                    backdrop-filter: blur(25px);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    box-shadow: 
                        0 20px 40px rgba(0, 0, 0, 0.4),
                        inset 0 1px 0 rgba(255, 255, 255, 0.1);
                }

                .card:hover::before {
                    width: 300px;
                    height: 300px;
                    top: -100px;
                    left: -100px;
                    opacity: 0.5;
                    transform: rotate(45deg);
                }

                .card:hover::after {
                    width: 350px;
                    height: 350px;
                    bottom: -150px;
                    right: -150px;
                    opacity: 0.4;
                    transform: rotate(-45deg);
                }

                /* Additional floating morphs on hover */
                .card:hover .card-content::before,
                .card:hover .card-content::after {
                    content: '';
                    position: absolute;
                    width: 100px;
                    height: 100px;
                    border-radius: 50%;
                    background: linear-gradient(45deg, 
                        rgba(139, 92, 246, 0.15), 
                        rgba(236, 72, 153, 0.15));
                    filter: blur(30px);
                    z-index: -1;
                    animation: float 3s ease-in-out infinite;
                }

                .card:hover .card-content::before {
                    top: 50%;
                    left: -30px;
                    animation-delay: 0s;
                }

                .card:hover .card-content::after {
                    bottom: 50%;
                    right: -30px;
                    animation-delay: 1.5s;
                }

                /* Card Content */
                .card-content {
                    position: relative;
                    z-index: 2;
                    width: 100%;
                }

                .card-content h1 {
                    margin: 0 0 1rem 0;
                    font-size: 1.4em;
                    line-height: 1.3;
                    font-weight: 600;
                    color: white;
                    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
                }

                .card-content p {
                    font-size: 0.95em;
                    line-height: 1.6;
                    color: rgba(255, 255, 255, 0.85);
                    margin-bottom: 1.5rem;
                    font-weight: 300;
                }

                /* Animations */
                @keyframes waveMove {
                    0% {
                        transform: translateX(-100%) translateY(0) rotate(0deg);
                    }
                    100% {
                        transform: translateX(200vw) translateY(20px) rotate(180deg);
                    }
                }

                @keyframes float {
                    0%, 100% {
                        transform: translateY(0) scale(1);
                        opacity: 0.15;
                    }
                    50% {
                        transform: translateY(-20px) scale(1.1);
                        opacity: 0.25;
                    }
                }

                /* Responsive */
                @media screen and (max-width: 1200px) {
                    .cards-row {
                        flex-wrap: wrap;
                        justify-content: center;
                    }
                    
                    .card-container {
                        flex: 0 0 calc(50% - 2rem);
                        max-width: calc(50% - 2rem);
                    }
                }

                @media screen and (max-width: 768px) {
                    .section-wrapper {
                        padding: 3rem 1rem;
                    }
                    
                    .section-info h1 {
                        font-size: 2.5em;
                    }
                    
                    .cards-row {
                        flex-direction: column;
                        align-items: center;
                        gap: 2rem;
                        padding: 1rem;
                    }
                    
                    .card-container {
                        flex: 0 0 100%;
                        max-width: 100%;
                        min-width: unset;
                    }
                    
                    .card {
                        max-width: 400px;
                        margin: 0 auto;
                    }
                }

                @media screen and (max-width: 480px) {
                    .card {
                        padding: 1.5rem;
                    }
                    
                    .section-info h1 {
                        font-size: 2em;
                    }
                    
                    .section-info .subtitle {
                        font-size: 1em;
                    }
                }
            `}</style>
        </section>
    );
};

export default Benefits;