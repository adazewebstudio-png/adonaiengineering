"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Capabilities", href: "/capabilities" },
    { name: "Experience", href: "/experience" },
    { name: "Insights", href: "/insights" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b bg-background border-border py-3 md:py-4 overflow-hidden",
                    isScrolled && "shadow-md bg-background/95 backdrop-blur-sm"
                )}
            >
                <div className="container mx-auto px-3 sm:px-4 flex items-center justify-between gap-2">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 sm:gap-3 relative z-50 flex-1 min-w-0">
                        <div className="relative h-10 w-10 overflow-hidden sm:h-14 sm:w-14 md:h-16 md:w-16 shrink-0">
                            <Image
                                src="/logo.jpg"
                                alt="Adonai Engineering Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        <div className="flex flex-col leading-none min-w-0">
                            <span className="text-[11px] sm:text-sm md:text-base font-black tracking-tight uppercase text-primary truncate">
                                Adonai Engineering
                            </span>
                            <span className="text-[8px] sm:text-[10px] md:text-xs font-bold tracking-widest uppercase text-zinc-600 dark:text-zinc-400">
                                & Construction Ltd
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors",
                                    pathname === link.href ? "text-primary font-bold" : "text-zinc-700 dark:text-zinc-300"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden md:block">
                        <Button variant="secondary" size="sm" href="/contact">
                            Request Proposal
                        </Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden relative z-50 text-foreground shrink-0 ml-2"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="h-7 w-7 sm:h-8 sm:w-8" /> : <Menu className="h-7 w-7 sm:h-8 sm:w-8" />}
                    </button>
                </div>
            </header>

            {/* Mobile Nav Overlay Backgroud */}
            <div
                className={cn(
                    "fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 md:hidden",
                    isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}
                onClick={() => setIsOpen(false)}
            />

            {/* Mobile Nav Drawer */}
            <div
                className={cn(
                    "fixed top-0 right-0 bottom-0 w-[75%] bg-background z-50 flex flex-col p-8 pt-24 gap-8 transition-transform duration-300 ease-in-out md:hidden shadow-2xl border-l border-border",
                    isOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                <nav className="flex flex-col gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "text-xl font-bold uppercase tracking-widest hover:text-primary transition-colors",
                                pathname === link.href ? "text-primary" : "text-foreground"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
                <Button variant="secondary" size="lg" className="mt-4 w-full" href="/contact">
                    Request Proposal
                </Button>
            </div>
        </>
    );
}
