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

            if (!el) return;
            const rect = el.getBoundingClientRect();
            const startX = rect.left;

            const windowCenter = window.innerWidth / 2;
            const elementCenter = startX + (rect.width / 2);


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
                y: 200,
                x: xOffset,
                width: "100vw",
                height: "100vh",
                maxHeight: "400px",
                borderRadius: "0px",
                transformOrigin: "center center",
                ease: "power2.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 70%",
                    end: "top 10%",
                    scrub: true,
                    pin: false,
                    // markers: true,
                },
            }
        );
    }, []);

    return (
        <div className="container mx-auto bg-white min-h-screen p-6 flex flex-col relative">
            <div className="w-full mt-12 z-10">
                <div className="w-full mb-8 md:mb-0">
                    <h1 className="text-8xl font-normal leading-tight items-center text-center">
                        Beyond Visions
                    </h1>
                    <h1 className="text-8xl font-normal leading-tight">
                        Within Reach
                    </h1>
                </div>


                <div className="bg-white min-h-screen p-6 flex flex-col relative overflow-hidden">
                    <div className="w-full mt-12 z-10 px-4 md:px-12 flex flex-col md:flex-row justify-between items-start gap-10">

                        <div className="w-full md:w-1/2 mt-44 flex justify-center">
                            <div
                                ref={imageWrapperRef}
                                className="relative overflow-hidden"
                                style={{
                                    maxWidth: "100%",
                                    zIndex: 50,
                                    willChange: "transform",
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
            </div>
        </div>
    );
}
