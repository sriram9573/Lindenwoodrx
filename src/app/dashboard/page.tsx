'use client';

import React from 'react';
import Link from 'next/link';

export default function Dashboard() {
    return (
        <div className="w-full max-w-[1280px] mx-auto px-4 z-10 w-full animate-fade-in relative">
            <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-8 py-6 lg:py-12 min-h-[calc(100vh-400px)]">

                {/* Sidebar Profile */}
                <aside className="animate-fade-in order-2 lg:order-1">
                    <div className="bg-[var(--color-surface)] rounded-2xl shadow-md p-6 lg:p-8 mb-8 text-center border border-[var(--color-border)]">
                        <div className="w-[80px] h-[80px] lg:w-[120px] lg:h-[120px] rounded-full bg-[var(--color-primary-light)] text-white text-[2rem] lg:text-[3rem] flex items-center justify-center mx-auto mb-6 shadow-md">
                            <i className="ph ph-user"></i>
                        </div>
                        <h3 className="text-2xl font-bold font-heading text-[var(--color-primary-dark)]">Sri Ram Smith</h3>
                        <p className="text-[var(--color-text-light)] text-sm mt-1">Patient ID: 9482749</p>

                        <nav className="flex flex-col gap-2 text-left mt-8">
                            <Link href="#prescriptions" className="px-4 py-3 rounded-lg text-[var(--color-primary)] font-medium bg-[var(--color-surface-hover)] border-l-4 border-[var(--color-primary)] flex items-center gap-3 transition-colors">
                                <i className="ph ph-pill text-xl"></i> My Prescriptions
                            </Link>
                            <Link href="#history" className="px-4 py-3 rounded-lg text-[var(--color-text-main)] font-medium hover:bg-[var(--color-surface-hover)] hover:text-[var(--color-primary)] flex items-center gap-3 transition-colors">
                                <i className="ph ph-clock-counter-clockwise text-xl"></i> Refill History & Status
                            </Link>
                            <Link href="#orders" className="px-4 py-3 rounded-lg text-[var(--color-text-main)] font-medium hover:bg-[var(--color-surface-hover)] hover:text-[var(--color-primary)] flex items-center gap-3 transition-colors">
                                <i className="ph ph-package text-xl"></i> My Orders
                            </Link>
                            <Link href="/health" className="px-4 py-3 rounded-lg text-[var(--color-text-main)] font-medium hover:bg-[var(--color-surface-hover)] hover:text-[var(--color-primary)] flex items-center gap-3 transition-colors">
                                <i className="ph ph-heartbeat text-xl"></i> My Health
                            </Link>
                            <Link href="#account" className="px-4 py-3 rounded-lg text-[var(--color-text-main)] font-medium hover:bg-[var(--color-surface-hover)] hover:text-[var(--color-primary)] flex items-center gap-3 transition-colors">
                                <i className="ph ph-gear text-xl"></i> Manage Account
                            </Link>
                        </nav>
                    </div>
                </aside>

                {/* Main Content Area */}
                <div className="order-1 lg:order-2 animate-fade-in" style={{ animationDelay: '0.1s' }}>

                    {/* Active Prescriptions Table Panel */}
                    <div className="bg-[var(--color-surface)] rounded-2xl shadow-md p-6 lg:p-8 mb-8 border border-[var(--color-border)]" id="prescriptions">
                        <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-6 pb-4 border-b border-[var(--color-border)] gap-4">
                            <h2 className="text-xl lg:text-2xl font-bold font-heading text-[var(--color-primary-dark)] flex items-center justify-start gap-2">
                                <i className="ph ph-pill"></i> Active Prescriptions
                            </h2>
                            <Link href="/prescriptions" className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold rounded-full text-[var(--color-primary)] border-2 border-[var(--color-primary)] hover:bg-[var(--color-surface-hover)] hover:-translate-y-0.5 transition-all w-full sm:w-auto self-start">
                                <i className="ph ph-plus"></i> Transfer Prescription
                            </Link>
                        </div>
                        <div className="overflow-x-auto w-full">
                            <table className="w-full text-left border-collapse min-w-[600px]">
                                <thead>
                                    <tr>
                                        <th className="py-4 px-4 font-semibold text-[var(--color-text-light)] uppercase text-xs tracking-wider border-b border-[var(--color-border)]">Drug Name</th>
                                        <th className="py-4 px-4 font-semibold text-[var(--color-text-light)] uppercase text-xs tracking-wider border-b border-[var(--color-border)]">RX Number</th>
                                        <th className="py-4 px-4 font-semibold text-[var(--color-text-light)] uppercase text-xs tracking-wider border-b border-[var(--color-border)]">Refills Left</th>
                                        <th className="py-4 px-4 font-semibold text-[var(--color-text-light)] uppercase text-xs tracking-wider border-b border-[var(--color-border)]">Status</th>
                                        <th className="py-4 px-4 font-semibold text-[var(--color-text-light)] uppercase text-xs tracking-wider border-b border-[var(--color-border)]">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm">
                                    <tr>
                                        <td className="py-4 px-4 border-b border-[var(--color-border)]">
                                            <strong className="block text-base text-[var(--color-text-main)] font-semibold">Lisinopril 10mg</strong>
                                            <span className="text-xs text-[var(--color-text-light)]">Take 1 tablet daily</span>
                                        </td>
                                        <td className="py-4 px-4 border-b border-[var(--color-border)] font-medium">RX-849204</td>
                                        <td className="py-4 px-4 border-b border-[var(--color-border)] font-semibold text-lg">3</td>
                                        <td className="py-4 px-4 border-b border-[var(--color-border)] whitespace-nowrap">
                                            <span className="inline-block px-3 py-1 bg-[#e6ffed] text-[var(--color-success)] rounded-full text-xs font-bold font-heading">Active</span>
                                        </td>
                                        <td className="py-4 px-4 border-b border-[var(--color-border)]">
                                            <button className="inline-block px-4 py-2 bg-[var(--color-primary-light)] text-white rounded-full font-semibold hover:bg-[var(--color-primary)] hover:-translate-y-[1px] transition-all shadow-sm" onClick={() => alert('Refill Request Sent!')}>
                                                Refill Now
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 px-4 border-b border-[var(--color-border)]">
                                            <strong className="block text-base text-[var(--color-text-main)] font-semibold">Atorvastatin 20mg</strong>
                                            <span className="text-xs text-[var(--color-text-light)]">Take 1 tablet at bedtime</span>
                                        </td>
                                        <td className="py-4 px-4 border-b border-[var(--color-border)] font-medium">RX-849205</td>
                                        <td className="py-4 px-4 border-b border-[var(--color-border)] font-semibold text-lg">1</td>
                                        <td className="py-4 px-4 border-b border-[var(--color-border)] whitespace-nowrap">
                                            <span className="inline-block px-3 py-1 bg-[#fff4e6] text-[var(--color-warning)] rounded-full text-xs font-bold font-heading">Low Refills</span>
                                        </td>
                                        <td className="py-4 px-4 border-b border-[var(--color-border)]">
                                            <button className="inline-block px-4 py-2 bg-[var(--color-primary-light)] text-white rounded-full font-semibold hover:bg-[var(--color-primary)] hover:-translate-y-[1px] transition-all shadow-sm" onClick={() => alert('Refill Request Sent!')}>
                                                Refill Now
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 px-4">
                                            <strong className="block text-base text-[var(--color-text-main)] font-semibold">Metformin 500mg</strong>
                                            <span className="text-xs text-[var(--color-text-light)]">Take 1 tablet twice daily with meals</span>
                                        </td>
                                        <td className="py-4 px-4 font-medium">RX-811902</td>
                                        <td className="py-4 px-4 font-semibold text-lg text-red-500">0</td>
                                        <td className="py-4 px-4 whitespace-nowrap">
                                            <span className="inline-block px-3 py-1 bg-[#f1f5f9] text-[#64748b] rounded-full text-xs font-bold font-heading">Needs Renewal</span>
                                        </td>
                                        <td className="py-4 px-4">
                                            <button className="inline-block px-4 py-2 bg-transparent border-2 border-[var(--color-primary)] text-[var(--color-primary)] rounded-full font-semibold hover:bg-[var(--color-surface-hover)] hover:-translate-y-[1px] transition-all shadow-sm">
                                                Contact Dr.
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Live Refill Status Timeline */}
                    <div className="bg-[var(--color-surface)] rounded-2xl shadow-md p-6 lg:p-8 mb-8 border border-[var(--color-border)]" id="history">
                        <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-6 pb-4 border-b border-[var(--color-border)] gap-4">
                            <h2 className="text-xl lg:text-2xl font-bold font-heading text-[var(--color-primary-dark)] flex items-center gap-2">
                                <i className="ph ph-truck"></i> Track Order: RX-849204
                            </h2>
                            <span className="inline-block px-4 py-1.5 bg-[var(--color-primary-light)] text-white rounded-full text-sm font-bold font-heading whitespace-nowrap self-start">
                                In Progress
                            </span>
                        </div>

                        <div className="relative pl-8 flex flex-col gap-8 py-2 before:content-[''] before:absolute before:left-[7px] before:top-4 before:bottom-4 before:w-[2px] before:bg-[var(--color-border)]">

                            <div className="relative">
                                <div className="absolute -left-[32px] top-1 w-4 h-4 rounded-full bg-[var(--color-primary)] border-[3px] border-[var(--color-primary-light)] shadow-[0_0_0_4px_rgba(27,194,170,0.2)] z-10 box-content"></div>
                                <div className="pl-4">
                                    <h4 className="text-lg font-bold text-[var(--color-text-main)] mb-1 font-heading leading-none">Order Received</h4>
                                    <p className="text-sm text-[var(--color-text-light)] leading-relaxed">We&apos;ve received your refill request for Lisinopril 10mg.</p>
                                    <div className="text-xs font-semibold text-[var(--color-text-light)] mt-2">Today, 9:02 AM</div>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="absolute -left-[32px] top-1 w-4 h-4 rounded-full bg-[var(--color-primary)] border-[3px] border-[var(--color-primary-light)] shadow-[0_0_0_4px_rgba(27,194,170,0.2)] z-10 box-content"></div>
                                <div className="pl-4">
                                    <h4 className="text-lg font-bold text-[var(--color-text-main)] mb-1 font-heading leading-none">Pharmacist Review</h4>
                                    <p className="text-sm text-[var(--color-text-light)] leading-relaxed">Dr. Jenny is reviewing your prescription for safety.</p>
                                    <div className="text-xs font-semibold text-[var(--color-text-light)] mt-2">Today, 9:45 AM</div>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="absolute -left-[32px] top-1 w-4 h-4 rounded-full bg-[var(--color-warning)] border-[3px] border-[var(--color-warning)] shadow-[0_0_0_4px_rgba(236,201,75,0.2)] animate-timeline-pulse z-10 box-content"></div>
                                <div className="pl-4">
                                    <h4 className="text-lg font-bold text-[var(--color-text-main)] mb-1 font-heading leading-none">Preparing</h4>
                                    <p className="text-sm text-[var(--color-text-light)] leading-relaxed">Your medication is being counted and securely bottled.</p>
                                    <div className="text-xs font-semibold text-[var(--color-text-light)] mt-2">Today, 10:15 AM</div>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="absolute -left-[32px] top-1 w-4 h-4 rounded-full bg-[var(--color-surface)] border-[3px] border-[var(--color-border)] z-10 box-content"></div>
                                <div className="pl-4 pb-2 opacity-60">
                                    <h4 className="text-lg font-bold text-[var(--color-text-main)] mb-1 font-heading leading-none">Ready for Delivery / Pickup</h4>
                                    <p className="text-sm text-[var(--color-text-light)] leading-relaxed">Pending confirmation...</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}
