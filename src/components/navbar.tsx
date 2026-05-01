import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import logo from "../assets/img/logo.png"
import { useState } from "react"

interface Component {
    title: string
    href: string
}

const components: Component[] = [
    {
        title: "Home",
        href: "/",
    },
    {
        title: "Compete",
        href: "/howtocompete",
    },
    {
        title: "Resources",
        href: "/resources",
    },
    {
        title: "Organizers",
        href: "/organizers",
    },
    {
        title: "IOI 2026",
        href: "https://ioi2026.uz/",
    },
    {
        title: "Register Now",
        href: "https://docs.google.com/forms/d/e/1FAIpQLScqNMAtWQ5DnkdVuBuWxnqgMQvZCchHe0hLdxAtfVZhYXx3lQ/viewform",
    },
]

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className="fixed top-0 left-0 w-full z-[100] transition-all duration-300 bg-brand-navy/30 backdrop-blur-lg border-b border-white/10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    {/* Logo */}
                    <div className="flex flex-shrink-0 items-center">
                        <Link href="/" className="flex items-center gap-2 group">
                            <Image
                                src={logo}
                                alt="NOI Logo"
                                width={40}
                                height={40}
                                className="group-hover:scale-110 transition-transform duration-300"
                            />
                            <span className="text-brand-light font-bold tracking-tighter text-xl hidden sm:block">NOI</span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="flex items-center space-x-8">
                            {components.map((component, index) => (
                                <Link
                                    key={index}
                                    href={component.href}
                                    target={component.title === "IOI 2026" || component.title === "Register Now" ? "_blank" : "_self"}
                                    rel={component.title === "IOI 2026" || component.title === "Register Now" ? "noopener noreferrer" : ""}
                                    className={`text-sm font-medium tracking-widest uppercase transition-all duration-300 ${
                                        component.title === "Register Now" 
                                        ? "bg-brand-peach text-brand-black px-5 py-2.5 rounded-full hover:bg-brand-orange" 
                                        : "text-brand-light/70 hover:text-brand-peach"
                                    }`}
                                >
                                    {component.title}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-brand-light p-2"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden transition-all duration-300 ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
                <div className="px-4 pt-2 pb-6 space-y-4 bg-brand-navy/60 backdrop-blur-2xl border-b border-white/10">
                    {components.map((component, index) => (
                        <Link
                            key={index}
                            href={component.href}
                            onClick={() => setIsOpen(false)}
                            className="block text-brand-light/80 hover:text-brand-peach text-base font-medium tracking-widest uppercase py-2"
                        >
                            {component.title}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
