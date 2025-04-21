"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { ArrowRight } from "lucide-react"
interface Project {
    id: number
    image: string
    title: string
    category: string
}

const PROJECTS: Project[] = [
    {
        id: 1,
        title: "Devin Ai",
        category: "WEB. DESIGN.DEVLOPMENT.3D",
        image: "/home/home.webp",
    },
    {
        id: 2,
        title: "Porshe: Dream Manchine",
        category: "concept.3D illustration .Mogragh Vedio",
        image: "/home/home (1).webp",
    },
    {
        id: 3,
        title: "Synthatic Human",
        category: "Web . Design .Development.3D",
        image: "/home/home (2).webp",
    },
    {
        id: 4,
        title: "Mete: Spatiol Fusion",
        category: "Web. Design . Devlopment .3D",
        image: "/home/home (3).webp",
    },
    {
        id: 5,
        title: "Space - NFT Marketplace",
        category: "Web .Design.Devlopment .3D .Web3",
        image: "/home/home (4).webp",
    },
    {
        id: 6,
        title: "PDD 2024",
        category: "Web.Design.Devlopment.3D",
        image: "/home/home (5).webp",
    },
    {
        id: 7,
        title: "CHO CHO World",
        category: "Concept.web.Game Design .3D",
        image: "/home/home (6).webp",
    },
    {
        id: 8,
        title: "Soda Experience",
        category: "Web .Design.Devlopment.3D",
        image: "/home/home (7).webp",
    },
]

gsap.registerPlugin(ScrollTrigger)

export default function ProjectsSection() {
    const projectsRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (projectsRef.current) {
            gsap.fromTo(
                projectsRef.current.children,
                {
                    opacity: 0,
                    y: 50,
                    scale: 0.9,
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: projectsRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                }
            )
        }
    }, [])

    return (
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {PROJECTS.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    )
}

function ProjectCard({ project }: { project: Project }) {
    const cardRef = useRef<HTMLDivElement>(null)
    const imageRef = useRef<HTMLImageElement>(null)

    const animateCard = (scale: number, shadow: string, ease: string) => {
        if (!cardRef.current || !imageRef.current) return
        gsap.to(cardRef.current, {
            scale,
            boxShadow: shadow,
            duration: 0.3,
            ease,
        })
        gsap.to(imageRef.current, {
            scale: scale === 1 ? 1 : 1.1,
            duration: 0.3,
            ease,
        })
    }

    return (
        <div
            ref={cardRef}
            className="group flex flex-col transform transition-transform rounded-3xl duration-300"
            onMouseEnter={() => animateCard(1.03, "0 10px 25px )", "power2.out")}
            onMouseLeave={() => animateCard(1, "none", "power2.in")}
        >

            <div className="relative rounded-3xl overflow-hidden bg-gray-50 mb-4">
                <Link href="#" className="block relative aspect-[4/3]">
                    <Image
                        ref={imageRef}
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-opacity duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/10 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center" />
                </Link>
            </div>
            <div className="px-1">

                <div className="flex items-center justify-between">
                    <span className="text-gray-600 text-sm">{project.category}</span>
                </div>
                <div className="relative flex items-center mt-1">
                    <ArrowRight
                        className="absolute left-0 opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300"
                        size={28}
                    />
                    <h3 className="text-4xl font-normal pl-0 group-hover:pl-8 transition-all duration-300">
                        {project.title}
                    </h3>
                </div>

            </div>
        </div>
    )
}
