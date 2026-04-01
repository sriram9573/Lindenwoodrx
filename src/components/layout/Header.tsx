'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="bg-[#2ba694] text-white relative top-0 z-[100] shadow-md">
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
                        <div className="font-heading text-[2.75rem] md:text-[2.5rem] font-extrabold tracking-tight leading-none text-white">
                            LiRx
                        </div>
                        <div className="font-sans text-sm md:text-lg font-bold leading-[1.1] border-l md:border-l-[3px] border-white/50 pl-4 md:pl-6 text-white">
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
                </div>
            </div>
        </header>
    );
}
