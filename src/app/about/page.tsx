import React from 'react';

export default function About() {
    const events = [
        { year: '1998', title: 'The Beginning', desc: 'Lindenwood Rx Center opens its doors as a small, family-owned neighborhood pharmacy in Brooklyn.' },
        { year: '2005', title: 'Expanding Services', desc: 'Introduced home delivery and compounding services to better serve our growing patient community.' },
        { year: '2015', title: 'Clinical Care Focus', desc: 'Launched our dedicated Medication Therapy Management (MTM) and immunization programs.' },
        { year: '2023', title: 'Digital Transformation', desc: 'Unveiled our new digital platform for easier patient communication and streamlined prescription refills.' },
        { year: 'Today', title: 'Trusted Community Partner', desc: 'Continuing our legacy of personalized care with modern convenience for families across New York.' }
    ];

    return (
        <>
            {/* Hero Banner */}
            <div className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] py-20 animate-fade-in relative overflow-hidden">
                <i className="ph-fill ph-pill text-[200px] text-white/5 absolute -top-[50px] -right-[50px] -rotate-12 z-0"></i>
                <div className="w-full max-w-[1280px] mx-auto px-4 text-center text-white relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 tracking-tight">Our Story</h1>
                    <p className="text-lg opacity-90 max-w-[600px] mx-auto">
                        For over two decades, LiRx has been more than just a place to get medication; we are your partners in comprehensive, personalized healthcare.
                    </p>
                </div>
            </div>

            <div className="w-full max-w-[1280px] mx-auto px-4 py-16 animate-fade-in">

                {/* Value Props */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-[var(--color-border)] text-center transition-all hover:-translate-y-1 hover:shadow-md">
                        <i className="ph ph-heart text-5xl text-[var(--color-primary)] mb-4"></i>
                        <h3 className="text-xl font-bold font-heading text-[var(--color-primary-dark)] mb-3">Family Owned</h3>
                        <p className="text-[var(--color-text-light)] text-sm leading-relaxed">We treat every patient like family. Our independence allows us to focus entirely on your quality of care, not corporate quotas.</p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-[var(--color-border)] text-center transition-all hover:-translate-y-1 hover:shadow-md">
                        <i className="ph ph-shield-check text-5xl text-[var(--color-primary)] mb-4"></i>
                        <h3 className="text-xl font-bold font-heading text-[var(--color-primary-dark)] mb-3">Trusted Experts</h3>
                        <p className="text-[var(--color-text-light)] text-sm leading-relaxed">Our pharmacists are highly trained clinical specialists dedicated to ensuring your medications are safe, effective, and affordable.</p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-[var(--color-border)] text-center transition-all hover:-translate-y-1 hover:shadow-md">
                        <i className="ph ph-rocket-launch text-5xl text-[var(--color-primary)] mb-4"></i>
                        <h3 className="text-xl font-bold font-heading text-[var(--color-primary-dark)] mb-3">Modern Approach</h3>
                        <p className="text-[var(--color-text-light)] text-sm leading-relaxed">We pair old-fashioned customer service with state-of-the-art technology to make managing your health seamless.</p>
                    </div>
                </div>

                {/* The Timeline Component */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold font-heading text-[var(--color-primary-dark)] mb-4">A History of Care</h2>
                </div>

                <div className="relative max-w-[800px] mx-auto mb-20 before:content-[''] before:absolute before:w-1 before:bg-[var(--color-primary-light)] before:top-0 before:bottom-0 before:left-[24px] md:before:left-1/2 md:before:-ml-[2px] before:rounded-full">
                    {events.map((event, index) => {
                        const isEven = index % 2 !== 0; // matching HTML nth-child(even) logic
                        return (
                            <div key={index} className={`relative py-4 md:py-[10px] pl-[60px] md:pl-0 md:px-10 flex items-center mb-8 ${isEven ? 'md:w-1/2 md:ml-auto md:flex-row-reverse' : 'md:w-1/2 md:flex-row'}`}>
                                {/* Timeline Dot */}
                                <div className={`absolute w-10 h-10 md:w-12 md:h-12 rounded-full font-bold font-heading flex items-center justify-center text-white bg-[var(--color-primary)] border-4 border-white shadow-md z-10 left-[4px] ${isEven ? 'md:-left-[24px]' : 'md:-right-[24px] md:left-auto'} top-1/2 -translate-y-1/2 text-sm md:text-base tracking-tight`}>
                                    {event.year === 'Today' ? <i className="ph-fill ph-star"></i> : event.year.substring(2)}
                                </div>

                                {/* Timeline Content */}
                                <div className={`bg-white p-6 rounded-2xl shadow-md border border-[var(--color-border)] w-full transition-transform hover:-translate-y-1 hover:shadow-lg relative before:content-[''] before:absolute md:before:visible before:invisible before:top-1/2 before:-translate-y-1/2 before:border-[10px] before:border-transparent ${isEven ? 'md:before:right-full md:before:border-r-white' : 'md:before:left-full md:before:border-l-white'} `}>
                                    <div className="text-xs font-bold text-[var(--color-primary)] uppercase tracking-wider mb-2">{event.year}</div>
                                    <h3 className="text-xl font-bold font-heading text-[var(--color-text-main)] mb-2">{event.title}</h3>
                                    <p className="text-[var(--color-text-light)] text-sm leading-relaxed">{event.desc}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
