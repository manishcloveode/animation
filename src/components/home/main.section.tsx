'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Register ScrollTrigger
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const CardDeck = () => {
    const sectionRef = useRef(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);

    const cards = [
        {
            type: 'STRATEGY',
            icon: 'S',
            services: ['Experience Strategy', 'Technology Strategy', 'Creative Direction', 'Discovery', 'Research']
        },
        {
            type: 'CREATIVE',
            icon: 'C',
            services: ['Art Direction', 'UX/UI Design', 'Motion Design', 'Game Design', 'Illustration']
        },
        {
            type: 'TECH',
            icon: 'T',
            services: ['WebGL Development', 'Web Development', 'Unity/Unreal', 'Interactive Installations', 'VR/AR']
        },
        {
            type: 'PRODUCTION',
            icon: 'P',
            services: ['Procedural Modeling', '3D Asset Creation', '3D Asset Optimization', 'Animation', '3D Pipeline']
        }
    ];

    useEffect(() => {
        if (!sectionRef.current || cardsRef.current.length === 0) return;

        const section = sectionRef.current;
        const cardElements = cardsRef.current;

        cardElements.forEach((card: HTMLDivElement) => {
            const frontBack = card.querySelectorAll('.card-face');
            frontBack.forEach(face => {
                gsap.set(face, {
                    backfaceVisibility: 'hidden',
                });
            });

            gsap.set(card, {
                transformStyle: 'preserve-3d',
                transformPerspective: 1000
            });

            gsap.set(card.querySelector('.card-inner'), {
                transformStyle: 'preserve-3d'
            });
        });

        // Initial overlapping position
        gsap.set(cardElements, {
            rotationY: 0,
            x: 0,
            y: 0,
            zIndex: 5
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top 0%",
                scrub: false,
                markers: false, // for debuging the  aniations
            }
        });

        // Fan out cards from center
        tl.to(cardElements, {
            x: (i) => {
                const offset = (i - (cardElements.length - 1) / 2) * 320;
                return offset;
            },
            zIndex: 1, // Equal z-index to prevent overlap
            stagger: 0.1,
            ease: "power2.out",
            duration: 1
        });

        // Flip cards
        tl.to(cardElements, {
            rotationY: 180,
            stagger: 0.05,
            ease: "power1.inOut",
            duration: 1
        }, "+=0.5");

        // Animate services on each card
        cardElements.forEach((card) => {
            const services = card.querySelectorAll('.service-item');
            gsap.set(services, { opacity: 0, y: 20 });

            tl.to(services, {
                opacity: 1,
                y: 0,
                stagger: 0.05,
                duration: 0.5
            }, `>-${0.3}`);
        });

        return () => {
            if (tl.scrollTrigger) {
                tl.scrollTrigger.kill();
            }
            tl.kill();
        };
    }, []);

    return (
        <div className="min-h-[100vh] bg-gray-400 relative overflow-hidden" ref={sectionRef}>
            <div className="sticky top-1/2 flex justify-center items-center transform -translate-y-1/2">
                {cards.map((card, index) => (
                    <div
                        key={card.type}
                        className="absolute w-[280px] h-[380px] transition-transform duration-300"
                        ref={(el) => {
                            if (el) cardsRef.current[index] = el;
                        }}
                    >
                        <div className="card-inner relative w-full h-full transition-transform duration-600">
                            {/* Front */}
                            <div className="card-face absolute w-full h-full rounded-2xl flex flex-col justify-center items-center shadow-lg bg-black border-2 border-white text-white">
                                <div className="text-6xl font-bold">{card.icon}</div>
                            </div>

                            {/* Back */}
                            <div
                                className="card-face gap-4 w-full h-full rounded-2xl flex flex-col justify-start p-5 shadow-lg bg-white text-black border-2 border-black animated-backface"
                                style={{ transform: 'rotateY(180deg)' }}
                            >
                                <h2 className="text-2xl font-bold mb-6 self-start">{card.type}</h2>
                                <div className="w-full">
                                    {card.services.map((service, i) => (
                                        <div
                                            key={i}
                                            className="service-item text-base mb-3 pb-2 border-b border-dashed border-gray-200"
                                        >
                                            {service}
                                        </div>
                                    ))}
                                </div>
                                <div
                                    className="bottom-5 right-5 text-2xl font-bold"
                                    style={{ transform: 'rotate(0deg)' }}
                                >
                                    {card.icon}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CardDeck;
