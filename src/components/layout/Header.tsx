'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Nunito } from 'next/font/google';

const nunito = Nunito({ subsets: ['latin'], weight: ['700', '800'] });

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="bg-[var(--color-primary)] text-white sticky md:relative top-0 z-[100] shadow-md">
            <div className="bg-[#3b4241] py-2 text-sm">
                <div className="w-full max-w-[1280px] mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0 text-center">
                    <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-6 opacity-90">
                        <span className="flex items-center gap-1"><i className="ph ph-map-pin"></i> 1380 Loring Ave, Brooklyn, NY 11208</span>
                        <span className="flex items-center gap-1"><i className="ph ph-phone"></i> 718-277-0898</span>
                    </div>
                    <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-6 items-center">
                        <Link href="/dashboard" className="text-white flex items-center gap-2 hover:text-[var(--color-brand-glow)] transition-colors">
                            <i className="ph ph-user-circle"></i> Welcome, David
                        </Link>
                        <Link href="/cart" className="text-white flex items-center gap-2 hover:text-[var(--color-brand-glow)] transition-colors">
                            <i className="ph ph-shopping-cart"></i> Cart: 3 items
                        </Link>
                    </div>
                </div>
            </div>

            <div className="py-4">
                <div className="w-full max-w-[1280px] mx-auto px-4 flex flex-wrap md:flex-row justify-between items-center">
                    <Link href="/" className="flex items-center gap-2 md:gap-4 text-white hover:scale-[1.02] hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.4)] transition-transform duration-150">
                        <div className={`${nunito.className} font-bold text-[2.75rem] md:text-[4rem] tracking-tight relative flex items-center pr-1`}>
                            L
                            <div className="relative inline-flex flex-col items-center justify-end w-[0.4em] mx-[0.06em] h-[1em]">
                                {/* Dotless 'i' stem custom drawn to perfectly match rounded caps */}
                                <span className="absolute bottom-[0.17em] w-[0.18em] h-[0.51em] bg-white rounded-full"></span>
                                {/* The 4-cluster astroid sparkles mathematically positioned */}
                                <svg className="absolute top-[0.02em] left-1/2 -translate-x-1/2 w-[0.7em] h-[0.7em] text-white" viewBox="0 0 100 100" fill="currentColor">
                                    {/* Top biggest star */}
                                    <path d="M 50,0 C 50,15 55,20 70,20 C 55,20 50,25 50,40 C 50,25 45,20 30,20 C 45,20 50,15 50,0 Z" />
                                    {/* Left smaller star */}
                                    <path d="M 28,25 C 28,33 32,37 40,37 C 32,37 28,41 28,49 C 28,41 24,37 16,37 C 24,37 28,33 28,25 Z" className="animate-pulse" />
                                    {/* Right smaller star */}
                                    <path d="M 72,25 C 72,33 76,37 84,37 C 76,37 72,41 72,49 C 72,41 68,37 60,37 C 68,37 72,33 72,25 Z" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                                    {/* Bottom downward star */}
                                    <path d="M 50,45 C 50,53 54,57 62,57 C 54,57 50,61 50,69 C 50,61 46,57 38,57 C 46,57 50,53 50,45 Z" className="animate-pulse" style={{ animationDelay: '1s' }} />
                                </svg>
                            </div>
                            Rx
                        </div>
                        <div className="font-sans text-sm md:text-base font-semibold leading-[1.2] border-l md:border-l-[3px] md:border-white/40 pl-3 md:pl-5 text-white/90">
                            Lindenwood<br className="hidden md:block" />Rx Center, Inc.
                        </div>
                    </Link>

                    <button
                        className="md:hidden flex text-3xl text-white ml-auto bg-transparent border-none cursor-pointer"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <i className="ph ph-list"></i>
                    </button>

                    <nav className={`${isMobileMenuOpen ? 'flex animate-[fadeIn_0.3s_ease-in-out]' : 'hidden'} md:flex w-full lg:w-auto flex-col lg:flex-row items-center gap-4 lg:gap-8 bg-[var(--color-primary-dark)] md:bg-transparent mt-4 md:mt-0 py-4 md:py-0 rounded-md md:rounded-none shadow-inner md:shadow-none mx-auto lg:mx-0 lg:ml-auto`}>
                        <Link href="/prescriptions" className="text-white/80 font-medium text-sm xl:text-base relative py-2 hover:text-[var(--color-brand-glow)] transition-colors group">
                            Prescriptions
                            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[var(--color-brand-glow)] transition-all duration-150 group-hover:w-full"></span>
                        </Link>
                        <Link href="/shop" className="text-white/80 font-medium text-sm xl:text-base relative py-2 hover:text-[var(--color-brand-glow)] transition-colors group">
                            Shop Products
                            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[var(--color-brand-glow)] transition-all duration-150 group-hover:w-full"></span>
                        </Link>
                        <Link href="/health" className="text-white/80 font-medium text-sm xl:text-base relative py-2 hover:text-[var(--color-brand-glow)] transition-colors group">
                            Health & Wellness
                            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[var(--color-brand-glow)] transition-all duration-150 group-hover:w-full"></span>
                        </Link>
                        <Link href="/about" className="text-white/80 font-medium text-sm xl:text-base relative py-2 hover:text-[var(--color-brand-glow)] transition-colors group">
                            About Us
                            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[var(--color-brand-glow)] transition-all duration-150 group-hover:w-full"></span>
                        </Link>
                        <Link href="/contact" className="text-white/80 font-medium text-sm xl:text-base relative py-2 hover:text-[var(--color-brand-glow)] transition-colors group">
                            Contact Us
                            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[var(--color-brand-glow)] transition-all duration-150 group-hover:w-full"></span>
                        </Link>
                    </nav>

                    <div className={`w-full md:w-auto mt-4 md:mt-0 flex items-center bg-white/10 rounded-full px-4 py-1 border border-white/20 transition-colors focus-within:bg-white group`}>
                        <input
                            type="text"
                            placeholder="Search LiRx..."
                            className="bg-transparent border-none outline-none text-white w-full md:w-[150px] transition-all duration-300 focus:text-[var(--color-text-main)] focus:w-full md:focus:w-[200px] placeholder:text-white/60 focus:placeholder-[var(--color-text-light)]"
                        />
                        <button className="bg-[var(--color-brand-glow)] text-[var(--color-primary-dark)] w-8 h-8 rounded-full flex items-center justify-center transition-transform hover:scale-105 group-focus-within:text-[var(--color-surface)]">
                            <i className="ph ph-magnifying-glass"></i>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
