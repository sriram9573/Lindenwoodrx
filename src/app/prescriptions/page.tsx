'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

// Replace with your actual Google Apps Script Web App URL after deployment
const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_SCRIPT_WEB_APP_URL';

export default function Prescriptions() {
    const router = useRouter();

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

    const handleTransferSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        const formData = new FormData(e.currentTarget);
        const data = {
            fullName: `${formData.get('firstName')} ${formData.get('lastName')}`,
            dob: formData.get('dob'),
            phone: formData.get('phone'),
            rxNumber: formData.get('rxNumber'),
            oldPharmacy: formData.get('oldPharmacy'),
            pharmacyPhone: formData.get('pharmacyPhone'),
            medications: formData.get('medications')
        };

        try {
            // Send to Google Sheets via Apps Script
            const response = await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors', // Apps Script requires no-cors for simple redirect-based POSTs
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });

            // Note: with 'no-cors', we can't read the response body, but we assume success if no error is thrown
            setSubmitStatus({ type: 'success', message: 'Transfer Request Submitted Successfully! We will contact you shortly.' });
            e.currentTarget.reset();

            // Optional: redirect after 3 seconds
            setTimeout(() => router.push('/dashboard'), 3000);

        } catch (error) {
            setSubmitStatus({ type: 'error', message: 'Failed to submit transfer request. Please try again or call us directly.' });
        } finally {
            setIsSubmitting(false);
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
                    <form onSubmit={handleTransferSubmit} className="flex flex-col gap-6">

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
                                    <label className="text-sm font-semibold text-[var(--color-text-main)]">Rx Number / Medical ID</label>
                                    <input name="rxNumber" type="text" placeholder="e.g. RX123456" required className="px-4 py-3 border border-[var(--color-border)] rounded-lg text-base focus:outline-none focus:border-[var(--color-primary-light)] focus:ring-[3px] focus:ring-[var(--color-primary-light)]/20 transition-all bg-[var(--color-surface)]" />
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

                        {submitStatus && (
                            <div className={`p-4 rounded-xl text-sm font-medium ${submitStatus.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                                {submitStatus.message}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full flex items-center justify-center px-6 py-4 font-bold rounded-full text-white shadow-md transition-all duration-300 mt-4 text-lg ${isSubmitting
                                    ? 'bg-[var(--color-text-light)] cursor-not-allowed'
                                    : 'bg-[var(--color-primary-light)] hover:bg-[var(--color-primary)] hover:shadow-[0_4px_15px_rgba(27,194,170,0.4)] hover:-translate-y-0.5'
                                }`}
                        >
                            {isSubmitting ? (
                                <>
                                    <i className="ph-bold ph-circle-notch animate-spin mr-2"></i>
                                    Submitting Transfer...
                                </>
                            ) : 'Submit Transfer Request'}
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
