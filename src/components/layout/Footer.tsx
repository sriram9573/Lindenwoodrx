import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-[var(--color-primary)] text-white pt-16 pb-8 mt-16">
            <div className="w-full max-w-[1280px] mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12 text-center md:text-left">

                    <div className="lg:col-span-2 min-w-[300px]">
                        <Link href="/" className="inline-flex items-center gap-4 text-white hover:scale-[1.02] hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.4)] transition-transform duration-150 mb-4">
                            <div className="font-heading text-4xl font-semibold tracking-tight relative flex items-center">
                                L<span className="relative inline-block animate-sparkle-1 before:content-['✦'] before:absolute before:-top-3 before:left-1/2 before:-translate-x-1/2 before:text-2xl before:text-white after:content-['✦'] after:absolute after:-top-5 after:left-[30%] after:text-sm after:text-white/80 animate-sparkle-2">i</span>Rx
                            </div>
                            <div className="font-sans text-sm font-medium leading-[1.2] border-l-2 border-white/30 pl-4 text-white/90 text-left">
                                Lindenwood<br />Rx Center, Inc.
                            </div>
                        </Link>
                        <p className="text-white/70 mb-6 max-w-[300px] mx-auto md:mx-0">
                            Lindenwood Rx Center, Inc.<br />
                            Providing trusted, personalized care and delivery to all of New York.
                        </p>
                        <div className="flex gap-4 justify-center md:justify-start">
                            <Link href="#" aria-label="Facebook" className="text-white text-2xl hover:text-white/80 transition-colors">
                                <i className="ph-fill ph-facebook-logo"></i>
                            </Link>
                            <Link href="#" aria-label="Instagram" className="text-white text-2xl hover:text-white/80 transition-colors">
                                <i className="ph-fill ph-instagram-logo"></i>
                            </Link>
                            <Link href="#" aria-label="Twitter" className="text-white text-2xl hover:text-white/80 transition-colors">
                                <i className="ph-fill ph-twitter-logo"></i>
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-[var(--color-brand-glow)] text-lg mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-1/2 md:after:left-0 after:-translate-x-1/2 md:after:translate-x-0 after:w-[30px] after:h-[2px] after:bg-[var(--color-brand-glow)] font-heading">Our Services</h4>
                        <ul className="flex flex-col gap-2">
                            <li><Link href="/dashboard" className="text-white/70 hover:text-white hover:pl-1 transition-all duration-150 block">Refill Prescriptions</Link></li>
                            <li><Link href="/prescriptions" className="text-white/70 hover:text-white hover:pl-1 transition-all duration-150 block">Transfer to Us</Link></li>
                            <li><Link href="/dashboard" className="text-white/70 hover:text-white hover:pl-1 transition-all duration-150 block">Order Status</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[var(--color-brand-glow)] text-lg mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-1/2 md:after:left-0 after:-translate-x-1/2 md:after:translate-x-0 after:w-[30px] after:h-[2px] after:bg-[var(--color-brand-glow)] font-heading">Shop Categories</h4>
                        <ul className="flex flex-col gap-2">
                            <li><Link href="/shop" className="text-white/70 hover:text-white hover:pl-1 transition-all duration-150 block">Vitamins & Supplements</Link></li>
                            <li><Link href="/shop" className="text-white/70 hover:text-white hover:pl-1 transition-all duration-150 block">Over-the-Counter</Link></li>
                            <li><Link href="/shop" className="text-white/70 hover:text-white hover:pl-1 transition-all duration-150 block">First Aid</Link></li>
                            <li><Link href="/shop" className="text-white/70 hover:text-white hover:pl-1 transition-all duration-150 block">Personal Care</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[var(--color-brand-glow)] text-lg mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-1/2 md:after:left-0 after:-translate-x-1/2 md:after:translate-x-0 after:w-[30px] after:h-[2px] after:bg-[var(--color-brand-glow)] font-heading">Visit Us</h4>
                        <ul className="flex flex-col gap-3 text-white/80 text-sm">
                            <li className="flex items-start gap-2 justify-center md:justify-start">
                                <i className="ph ph-map-pin mt-1"></i>
                                <span>1380 Loring Ave,<br />Brooklyn, NY 11208</span>
                            </li>
                            <li className="flex items-center gap-2 justify-center md:justify-start">
                                <i className="ph ph-phone"></i>
                                <span>718-277-0898</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="text-center pt-8 border-t border-white/10 text-white/50 text-sm flex flex-col gap-2">
                    <p>&copy; 2026 Lindenwood Rx Center, Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
