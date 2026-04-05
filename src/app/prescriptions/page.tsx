'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export default function Prescriptions() {
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const fullName = `${formData.get('firstName')} ${formData.get('lastName')}`;
        const pharmacyPhone = formData.get('pharmacyPhone');

        try {
            const response = await fetch('/api/transfer', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ fullName, pharmacyPhone })
            });
            const data = await response.json();
            if (data.success) {
                alert(data.message);
                router.push('/dashboard');
            } else {
                alert('Error: ' + data.message);
            }
        } catch (error) {
            alert('Failed to submit transfer request.');
        }
    };

    return (
        <>
            <div className="bg-[var(--color-primary)] py-12 md:py-20 animate-fade-in text-center text-white">
                <div className="w-full max-w-[1280px] mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 tracking-tight">Prescription Transfers</h1>
                    <p className="text-lg opacity-90 max-w-[600px] mx-auto">
                        Switching pharmacies doesn&apos;t have to be a headache. Fill out the form below and let us handle all the paperwork for you.
                    </p>
                </div>
            </div>

            <div className="w-full max-w-[1280px] mx-auto px-4 py-16 -mt-10 animate-fade-in relative z-10 flex flex-col lg:flex-row gap-8 items-start">

                {/* Info Column */}
                <div className="lg:w-[35%] bg-[var(--color-surface)] border border-[var(--color-border)] p-8 rounded-2xl shadow-md w-full">
                    <h3 className="text-2xl font-bold font-heading text-[var(--color-primary-dark)] mb-6 border-b border-[var(--color-border)] pb-4">Why Transfer to LiRx?</h3>
                    <ul className="flex flex-col gap-6">
                        <li className="flex gap-4 items-start">
                            <div className="text-[var(--color-primary)] text-3xl"><i className="ph-fill ph-check-circle"></i></div>
                            <div>
                                <strong className="block text-[var(--color-text-main)] mb-1">Zero Hassle</strong>
                                <span className="text-sm text-[var(--color-text-light)]">We call your old pharmacy and your doctor. You don&apos;t have to do a thing.</span>
                            </div>
                        </li>
                        <li className="flex gap-4 items-start">
                            <div className="text-[var(--color-primary)] text-3xl"><i className="ph-fill ph-house-line"></i></div>
                            <div>
                                <strong className="block text-[var(--color-text-main)] mb-1">Free Next-Day Delivery</strong>
                                <span className="text-sm text-[var(--color-text-light)]">Get your medications delivered straight to your door across Brooklyn and Queens.</span>
                            </div>
                        </li>
                        <li className="flex gap-4 items-start">
                            <div className="text-[var(--color-primary)] text-3xl"><i className="ph-fill ph-wallet"></i></div>
                            <div>
                                <strong className="block text-[var(--color-text-main)] mb-1">Same Co-Pays</strong>
                                <span className="text-sm text-[var(--color-text-light)]">We accept all major insurance plans including Medicare and Medicaid. Your co-pay stays the same.</span>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Form Section */}
                <div className="lg:w-[65%] bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[var(--color-primary)] w-full">
                    <h2 className="text-2xl font-bold font-heading text-[var(--color-primary-dark)] mb-8 text-center">Start Your Transfer</h2>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">

                        <div>
                            <h4 className="text-sm font-bold text-[var(--color-text-light)] uppercase tracking-wider mb-4 border-b border-[var(--color-border)] pb-2 pt-2">Patient Information</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-semibold text-[var(--color-text-main)]">First Name</label>
                                    <input name="firstName" type="text" required className="px-4 py-3 border border-[var(--color-border)] rounded-lg text-base focus:outline-none focus:border-[var(--color-primary-light)] focus:ring-[3px] focus:ring-[var(--color-primary-light)]/20 transition-all bg-[var(--color-surface)]" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-semibold text-[var(--color-text-main)]">Last Name</label>
                                    <input name="lastName" type="text" required className="px-4 py-3 border border-[var(--color-border)] rounded-lg text-base focus:outline-none focus:border-[var(--color-primary-light)] focus:ring-[3px] focus:ring-[var(--color-primary-light)]/20 transition-all bg-[var(--color-surface)]" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-semibold text-[var(--color-text-main)]">Date of Birth</label>
                                    <input name="dob" type="date" required className="px-4 py-3 border border-[var(--color-border)] rounded-lg text-base focus:outline-none focus:border-[var(--color-primary-light)] focus:ring-[3px] focus:ring-[var(--color-primary-light)]/20 transition-all bg-[var(--color-surface)]" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-semibold text-[var(--color-text-main)]">Phone Number</label>
                                    <input name="phone" type="tel" placeholder="(555) 123-4567" required className="px-4 py-3 border border-[var(--color-border)] rounded-lg text-base focus:outline-none focus:border-[var(--color-primary-light)] focus:ring-[3px] focus:ring-[var(--color-primary-light)]/20 transition-all bg-[var(--color-surface)]" />
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-sm font-bold text-[var(--color-text-light)] uppercase tracking-wider mb-4 border-b border-[var(--color-border)] pb-2 pt-2">Old Pharmacy Information</h4>
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-semibold text-[var(--color-text-main)]">Pharmacy Name</label>
                                    <input name="oldPharmacy" type="text" placeholder="e.g. CVS, Walgreens..." required className="px-4 py-3 border border-[var(--color-border)] rounded-lg text-base focus:outline-none focus:border-[var(--color-primary-light)] focus:ring-[3px] focus:ring-[var(--color-primary-light)]/20 transition-all bg-[var(--color-surface)]" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-semibold text-[var(--color-text-main)]">Pharmacy Phone Number</label>
                                    <input name="pharmacyPhone" type="tel" placeholder="(555) 987-6543" required className="px-4 py-3 border border-[var(--color-border)] rounded-lg text-base focus:outline-none focus:border-[var(--color-primary-light)] focus:ring-[3px] focus:ring-[var(--color-primary-light)]/20 transition-all bg-[var(--color-surface)]" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-semibold text-[var(--color-text-main)]">Medication Names (Optional)</label>
                                    <textarea placeholder="List medications to transfer, or just type 'All'" rows={3} className="px-4 py-3 border border-[var(--color-border)] rounded-lg text-base focus:outline-none focus:border-[var(--color-primary-light)] focus:ring-[3px] focus:ring-[var(--color-primary-light)]/20 transition-all bg-[var(--color-surface)] resize-y"></textarea>
                                </div>
                            </div>
                        </div>

                        <button type="submit" className="w-full flex items-center justify-center px-6 py-4 font-bold rounded-full text-white bg-[var(--color-primary-light)] hover:bg-[var(--color-primary)] shadow-md hover:shadow-[0_4px_15px_rgba(27,194,170,0.4)] hover:-translate-y-0.5 transition-all duration-300 mt-4 text-lg">
                            Submit Transfer Request
                        </button>
                        <p className="text-xs text-center text-[var(--color-text-light)] mt-2">
                            By submitting, you authorize LiRx to contact your previous pharmacy on your behalf.
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
}
