import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Health() {
    const articles = [
        { title: 'Understanding Your Blood Pressure Medications', category: 'Medications', readTime: '5 min read', img: 'https://images.unsplash.com/photo-1584308666744-24d5e1b213b3?auto=format&fit=crop&q=80&w=600' },
        { title: 'Top 10 Immune-Boosting Foods for Winter', category: 'Nutrition', readTime: '4 min read', img: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&q=80&w=600' },
        { title: 'Managing Stress: A Pharmacist\'s Perspective', category: 'Mental Health', readTime: '6 min read', img: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&q=80&w=600' },
        { title: 'The Importance of Vitamin D Supplements', category: 'Supplements', readTime: '5 min read', img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600' },
        { title: 'A Guide to Safe Over-the-Counter Pain Relief', category: 'Medications', readTime: '7 min read', img: 'https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&q=80&w=600' },
        { title: 'How to Build a Sustainable Workout Routine', category: 'Fitness', readTime: '5 min read', img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=600' }
    ];

    return (
        <div className="w-full max-w-[1280px] mx-auto px-4 py-12 md:py-20 animate-fade-in">

            {/* Header */}
            <div className="text-center max-w-[800px] mx-auto mb-16">
                <h1 className="text-4xl md:text-5xl font-bold font-heading text-[var(--color-primary-dark)] mb-6 leading-tight">Expert Advice for a Healthier You</h1>
                <p className="text-lg text-[var(--color-text-light)]">Explore our curated collection of articles, pharmacological insights, and wellness tips from the LiRx clinical team.</p>
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16">
                {['All Articles', 'Medications', 'Nutrition', 'Mental Health', 'Fitness', 'Supplements'].map((cat, i) => (
                    <button key={i} className={`px-5 py-2.5 rounded-full font-medium text-sm md:text-base border transition-colors shadow-sm hover:-translate-y-0.5 ${i === 0 ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)] shadow-[var(--color-primary-light)]/30' : 'bg-white text-[var(--color-text-main)] border-[var(--color-border)] hover:border-[var(--color-primary-light)] hover:text-[var(--color-primary)]'}`}>
                        {cat}
                    </button>
                ))}
            </div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article, i) => (
                    <Link href="#" key={i} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 border border-[var(--color-border)] transition-all duration-300 flex flex-col hover:border-[var(--color-primary-light)]">
                        <div className="relative w-full h-[240px] overflow-hidden">
                            <Image src={article.img} alt={article.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-[var(--color-primary)] uppercase tracking-wider shadow-sm border border-white/20">
                                {article.category}
                            </div>
                        </div>
                        <div className="p-6 md:p-8 flex flex-col flex-1">
                            <div className="flex items-center gap-2 text-xs font-semibold text-[var(--color-text-light)] mb-3 uppercase tracking-wider">
                                <i className="ph ph-clock"></i> {article.readTime}
                            </div>
                            <h3 className="text-xl font-bold font-heading text-[var(--color-text-main)] group-hover:text-[var(--color-primary)] transition-colors line-clamp-2 leading-snug mb-4">
                                {article.title}
                            </h3>
                            <div className="mt-auto flex items-center text-[var(--color-primary)] font-bold text-sm group-hover:gap-2 transition-all">
                                Read Article <i className="ph-bold ph-arrow-right ml-1 relative group-hover:translate-x-1 transition-transform"></i>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="mt-16 text-center">
                <button className="inline-flex items-center justify-center px-8 py-3.5 font-bold rounded-full text-[var(--color-primary)] bg-transparent border-2 border-[var(--color-primary)] hover:bg-[var(--color-surface-hover)] hover:-translate-y-0.5 transition-all duration-300 shadow-sm">
                    Load More Articles
                </button>
            </div>
        </div>
    );
}
