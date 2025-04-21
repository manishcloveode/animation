'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function LusionComponent() {
    const imageWrapperRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const el = imageWrapperRef.current;

        const calculateXOffset = () => {
            if (!el) return 0;
            const rect = el.getBoundingClientRect();
            const startX = rect.left;

            const windowCenter = window.innerWidth / 2;
            const elementCenter = startX + rect.width / 2;

            return windowCenter - elementCenter;
        };

        const xOffset = calculateXOffset();

        gsap.fromTo(
            el,
            {
                scale: 1,
                y: 0,
                x: 0,
                width: "450px",
                height: "300px",
                borderRadius: "24px",
            },
            {
                scale: 1.5,
                y: 0,
                x: xOffset,
                width: "100vw",
                height: "100vh",
                borderRadius: "0px",
                transformOrigin: "center center",
                ease: "power2.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top center",
                    end: "+=150",
                    scrub: true,
                    pin: true,
                    pinSpacing: false,
                    markers: false, // optional: remove in production
                },
            }
        );
    }, []);

    return (
        <div className=" container mx-auto w-full bg-white min-h-screen p-6 pb-[30vh] flex flex-col relative">
            {/* Headings */}
            <div className="w-full mb-8 text-center z-10">
                <h1 className="text-6xl font-normal leading-tight">Beyond Visions</h1>
                <h1 className="text-6xl font-normal leading-tight">Within Reach</h1>
            </div>

            {/* Image and Text Row */}
            <div className="w-full px-4 md:px-12 flex flex-col md:flex-row justify-between items-start gap-10">
                {/* Image */}
                <div className="w-full md:w-1/2 mt-44 flex justify-center">
                    <div
                        ref={imageWrapperRef}
                        className="relative z-50"
                        style={{
                            maxWidth: "100%",
                            willChange: "transform",
                            overflow: "visible",
                            borderRadius: "24px",
                        }}
                    >
                        <div className="absolute inset-0 bg-blue-600 opacity-40 z-10 rounded-3xl"></div>
                        <img
                            src="https://static-00.iconduck.com/assets.00/nextjs-icon-2048x1234-pqycciiu.png"
                            alt="video placeholder"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Text */}
                <div className="w-full md:w-1/2 text-start pr-8">
                    <p className="text-lg md:text-xl text-black leading-relaxed">
                        Lusion is a digital production studio that brings your ideas to life
                        through visually captivating designs and interactive experiences...
                    </p>

                    <div className="mt-10 flex justify-start">
                        <button className="px-8 py-3 bg-white shadow-lg rounded-full flex items-center gap-2 font-medium hover:shadow-xl transition-all duration-300">
                            <span className="w-2 h-2 bg-black rounded-full"></span>
                            ABOUT US
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
