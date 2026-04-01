'use client';

import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[var(--color-background)] to-[#e8f5f3] py-12 md:py-24 flex items-center min-h-[500px]">
        {/* Background Blob Animation */}
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[150%] bg-[var(--color-primary-light)] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] opacity-10 animate-[blobBounce_20s_infinite_alternate] z-0 hidden md:block"></div>

        <div className="w-full max-w-[1280px] mx-auto px-4 flex flex-col md:flex-row items-center relative z-10">
          <div className="max-w-[600px] text-center md:text-left mb-8 md:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-[3.5rem] leading-tight font-bold text-[var(--color-primary-dark)] mb-4 font-heading">
              Trusted Care,<br />Simplified.
            </h1>
            <p className="text-lg text-[var(--color-text-light)] mb-8">
              Experience seamless prescription management, wellness products, and expert clinical care. Lindenwood Rx Center brings the pharmacy to you.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Link href="/dashboard" className="inline-flex items-center justify-center px-6 py-3 font-semibold rounded-full text-white bg-[var(--color-primary-light)] hover:bg-[var(--color-primary)] hover:-translate-y-0.5 shadow-md hover:shadow-lg hover:shadow-[var(--color-primary-light)]/40 transition-all duration-300">
                Refill Prescriptions
              </Link>
              <Link href="/prescriptions" className="inline-flex items-center justify-center px-6 py-3 font-semibold rounded-full text-[var(--color-primary)] bg-transparent border-2 border-[var(--color-primary)] hover:bg-[var(--color-surface-hover)] hover:-translate-y-0.5 transition-all duration-300">
                Transfer Today
              </Link>
            </div>
          </div>
          <div className="flex-1 w-full flex justify-center md:justify-end animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="w-full max-w-[400px] h-[350px] rounded-[20px] shadow-lg border-8 border-white bg-[url('https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=800')] bg-center bg-cover"></div>
          </div>
        </div>
      </section>

      {/* Service Tiles */}
      <section className="w-full max-w-[1280px] mx-auto px-4 relative z-20 -mt-12 animate-fade-in">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { href: '/dashboard', icon: 'ph-pill', title: 'Refill Prescriptions', desc: 'Fast, easy refills directly from your dashboard.' },
            { href: '/prescriptions', icon: 'ph-arrows-left-right', title: 'Transfer to LiRx', desc: 'We make switching pharmacies completely seamless.' },
            { href: '/dashboard', icon: 'ph-package', title: 'Order Status', desc: 'Track your medication from prep to delivery.' },
            { href: '#locations', icon: 'ph-map-pin', title: 'Find a Location', desc: 'Visit us in Brooklyn for in-person care.' },
          ].map((tile, i) => (
            <Link key={i} href={tile.href} className="bg-[var(--color-primary)] text-white p-8 rounded-2xl shadow-md text-center flex flex-col items-center gap-4 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_15px_-3px_rgba(27,194,170,0.4)] hover:bg-[var(--color-primary-light)] group">
              <i className={`ph ${tile.icon} text-5xl text-[var(--color-brand-glow)] mb-2 group-hover:scale-110 transition-transform`}></i>
              <h3 className="text-xl font-bold m-0 font-heading text-white">{tile.title}</h3>
              <p className="text-sm opacity-90">{tile.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Meet Our Pharmacists */}
      <section className="py-24 w-full max-w-[1280px] mx-auto px-4 animate-fade-in">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-heading text-[var(--color-primary-dark)] mb-4">Meet Our Pharmacy Team</h2>
          <p className="text-[var(--color-text-light)] max-w-[600px] mx-auto">Expert care starts with expert people. Our dedicated team is here for your health.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { name: 'Dr. Jenny, PharmD', role: 'Lead Clinical Pharmacist', desc: 'Specializes in compounding and chronic care management.' },
            { name: 'Dr. Kyryl, RPh', role: 'Pharmacy Manager', desc: 'Expert in immunization and wellness consulting.' }
          ].map((member, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-md transition-transform duration-500 hover:-translate-y-1 hover:shadow-lg flex flex-col sm:flex-row items-center text-center sm:text-left p-8 gap-6 border border-[var(--color-border)]">
              <div className="w-[100px] h-[100px] rounded-full bg-[var(--color-primary-light)] shrink-0 flex items-center justify-center text-white text-5xl shadow-inner">
                <i className="ph-bold ph-user"></i>
              </div>
              <div>
                <h4 className="text-2xl font-bold font-heading text-[var(--color-primary-dark)] mb-1">{member.name}</h4>
                <p className="text-[var(--color-primary)] font-medium text-sm uppercase tracking-wide mb-2">{member.role}</p>
                <p className="text-sm text-[var(--color-text-light)] leading-relaxed">{member.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Transfer Form Section */}
      <section className="pb-32 w-full max-w-[1280px] mx-auto px-4 animate-fade-in">
        <div className="bg-[var(--color-surface)] rounded-[2rem] shadow-lg p-8 md:p-12 flex flex-col lg:flex-row gap-12 items-center border border-[var(--color-border)]">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl md:text-[2.5rem] font-bold font-heading text-[var(--color-primary-dark)] mb-6 leading-tight">
              Transfer to LiRx — It&apos;s Easy.
            </h2>
            <p className="text-[var(--color-text-light)] mb-10 text-lg leading-relaxed">
              Fill out this quick form, and we&apos;ll handle the rest. We will contact your old pharmacy and take care of everything behind the scenes.
            </p>
            <ul className="flex flex-col gap-5 text-[var(--color-text-main)] text-left max-w-sm mx-auto lg:mx-0">
              <li className="flex items-center gap-4"><i className="ph-fill ph-check-circle text-[var(--color-success)] text-2xl"></i> <span className="font-medium text-lg">No phone calls required</span></li>
              <li className="flex items-center gap-4"><i className="ph-fill ph-check-circle text-[var(--color-success)] text-2xl"></i> <span className="font-medium text-lg">Free home delivery</span></li>
              <li className="flex items-center gap-4"><i className="ph-fill ph-check-circle text-[var(--color-success)] text-2xl"></i> <span className="font-medium text-lg">Automatic refill coordination</span></li>
            </ul>
          </div>
          <div className="flex-[0.8] w-full bg-[var(--color-background)] p-8 md:p-10 rounded-[1.5rem] shadow-inner border border-white">
            <form onSubmit={(e) => { e.preventDefault(); alert('Transfer Request Submitted!'); }} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2 text-left">
                <label className="text-sm font-semibold text-[var(--color-text-main)]">Full Name</label>
                <input type="text" className="px-4 py-3.5 border border-[var(--color-border)] rounded-xl font-sans text-base transition-all duration-150 focus:outline-none focus:border-[var(--color-primary-light)] focus:ring-[3px] focus:ring-[var(--color-primary-light)]/20 bg-white" placeholder="John Doe" required />
              </div>
              <div className="flex flex-col gap-2 text-left">
                <label className="text-sm font-semibold text-[var(--color-text-main)]">Current Pharmacy Phone #</label>
                <input type="tel" className="px-4 py-3.5 border border-[var(--color-border)] rounded-xl font-sans text-base transition-all duration-150 focus:outline-none focus:border-[var(--color-primary-light)] focus:ring-[3px] focus:ring-[var(--color-primary-light)]/20 bg-white" placeholder="(555) 123-4567" required />
              </div>
              <button type="submit" className="w-full flex items-center justify-center px-6 py-4 font-bold rounded-full text-white bg-[var(--color-primary-light)] hover:bg-[var(--color-primary)] shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 mt-2 text-lg">
                Start Transfer Now
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
