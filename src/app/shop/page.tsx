'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function Shop() {
    const [price, setPrice] = useState(100);
    const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

    const products = [
        {
            id: 1,
            name: 'LiRx Premium Vitamin C 1000mg',
            price: '$9.99',
            oldPrice: '$12.99',
            rating: 4.5,
            reviews: 124,
            image: '/images/vitamin_c_bottle_1775010159000.png',
            badge: 'Sale',
            badgeStyles: 'bg-[var(--color-danger)] text-white'
        },
        {
            id: 2,
            name: 'Ibuprofen 200mg Pain Reliever',
            price: '$6.49',
            rating: 5,
            reviews: 89,
            image: '/images/ibuprofen_bottle_1775010168892.png'
        },
        {
            id: 3,
            name: 'Waterproof Flexible Bandages, 30 ct',
            price: '$4.29',
            rating: 4,
            reviews: 45,
            image: '/images/bandages_box_1775010182358.png'
        },
        {
            id: 4,
            name: 'Daily Multivitamin for Adults, 120 ct',
            price: '$18.99',
            rating: 5,
            reviews: 210,
            image: '/images/multivitamins_bottle_1775010199153.png',
            badge: 'Bestseller',
            badgeStyles: 'bg-[var(--color-warning)] text-[#333]'
        }
    ];

    return (
        <div className="w-full max-w-[1280px] mx-auto px-4 py-12 min-h-[calc(100vh-400px)]">

            {/* Mobile Filter Toggle Button */}
            <button
                className="w-full mb-8 flex justify-center items-center gap-2 bg-transparent text-[var(--color-primary)] border-2 border-[var(--color-primary)] font-semibold py-3 px-6 rounded-full md:hidden hover:bg-[var(--color-surface-hover)] transition-colors"
                onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
            >
                <i className="ph ph-sliders"></i> Filter Categories
            </button>

            <div className="flex flex-col md:grid md:grid-cols-[250px_1fr] gap-8">

                {/* Sidebar Filters */}
                <aside className={`${isMobileFilterOpen ? 'block animate-[fadeIn_0.3s_ease-in-out]' : 'hidden'} md:block order-2 md:order-1 bg-white rounded-2xl p-6 shadow-sm border border-[var(--color-border)] h-fit`}>
                    <div className="mb-8">
                        <h3 className="font-heading text-lg mb-4 text-[var(--color-primary-dark)] border-b border-[var(--color-border)] pb-2">Categories</h3>
                        <div className="flex flex-col gap-3">
                            <label className="flex items-center gap-2 text-[var(--color-primary)] font-medium cursor-pointer transition-colors"><input type="radio" name="cat" className="accent-[var(--color-primary)]" defaultChecked /> All Products</label>
                            <label className="flex items-center gap-2 text-[var(--color-text-main)] hover:text-[var(--color-primary)] hover:font-medium cursor-pointer transition-colors"><input type="radio" name="cat" className="accent-[var(--color-primary)]" /> Vitamins & Supplements</label>
                            <label className="flex items-center gap-2 text-[var(--color-text-main)] hover:text-[var(--color-primary)] hover:font-medium cursor-pointer transition-colors"><input type="radio" name="cat" className="accent-[var(--color-primary)]" /> Over-the-Counter</label>
                            <label className="flex items-center gap-2 text-[var(--color-text-main)] hover:text-[var(--color-primary)] hover:font-medium cursor-pointer transition-colors"><input type="radio" name="cat" className="accent-[var(--color-primary)]" /> First Aid</label>
                            <label className="flex items-center gap-2 text-[var(--color-text-main)] hover:text-[var(--color-primary)] hover:font-medium cursor-pointer transition-colors"><input type="radio" name="cat" className="accent-[var(--color-primary)]" /> Baby & Mother</label>
                            <label className="flex items-center gap-2 text-[var(--color-text-main)] hover:text-[var(--color-primary)] hover:font-medium cursor-pointer transition-colors"><input type="radio" name="cat" className="accent-[var(--color-primary)]" /> Personal Care</label>
                            <label className="flex items-center gap-2 text-[var(--color-text-main)] hover:text-[var(--color-primary)] hover:font-medium cursor-pointer transition-colors"><input type="radio" name="cat" className="accent-[var(--color-primary)]" /> Home Health Care</label>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h3 className="font-heading text-lg mb-4 text-[var(--color-primary-dark)] border-b border-[var(--color-border)] pb-2 flex justify-between items-center">
                            Price Range
                            <span className="font-bold text-[1.1rem]">${price}</span>
                        </h3>
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={price}
                            onChange={(e) => setPrice(Number(e.target.value))}
                            className="w-full mt-4 mb-2 accent-[var(--color-primary)]"
                        />
                        <div className="flex justify-between text-sm text-[var(--color-text-light)]">
                            <span>$0</span>
                            <span>$100+</span>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h3 className="font-heading text-lg mb-4 text-[var(--color-primary-dark)] border-b border-[var(--color-border)] pb-2">Brands</h3>
                        <div className="flex flex-col gap-3">
                            <label className="flex items-center gap-2 text-[var(--color-text-main)] cursor-pointer"><input type="checkbox" className="accent-[var(--color-primary)]" /> LiRx Store Brand</label>
                            <label className="flex items-center gap-2 text-[var(--color-text-main)] cursor-pointer"><input type="checkbox" className="accent-[var(--color-primary)]" /> Tylenol</label>
                            <label className="flex items-center gap-2 text-[var(--color-text-main)] cursor-pointer"><input type="checkbox" className="accent-[var(--color-primary)]" /> Centrum</label>
                            <label className="flex items-center gap-2 text-[var(--color-text-main)] cursor-pointer"><input type="checkbox" className="accent-[var(--color-primary)]" /> Band-Aid</label>
                        </div>
                    </div>

                    <button
                        className="w-full bg-[var(--color-primary-light)] text-white hover:bg-[var(--color-primary)] hover:-translate-y-0.5 transition-all shadow-md py-3 font-semibold rounded-full mt-4 flex justify-center items-center"
                        onClick={() => setIsMobileFilterOpen(false)}
                    >
                        Apply Filters
                    </button>
                </aside>

                {/* Main Shop Content */}
                <div className="order-1 md:order-2 flex flex-col gap-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>

                    {/* Deals Banner */}
                    <div className="bg-gradient-to-br from-[var(--color-primary)] to-[#1dbb91] text-white rounded-2xl p-6 md:p-10 flex flex-col md:flex-row justify-between items-center shadow-md relative overflow-hidden">
                        <div className="z-10 text-center md:text-left mb-6 md:mb-0">
                            <h2 className="text-3xl font-bold font-heading mb-2">Deals of the Week</h2>
                            <p className="opacity-90 mb-6 text-lg">Stock up on immune support. Get 20% off all LiRx Store Brand Vitamins.</p>
                            <button className="bg-white text-[var(--color-primary)] font-semibold py-3 px-8 rounded-full hover:-translate-y-1 shadow-md hover:shadow-lg transition-all">Shop Sale</button>
                        </div>
                        <i className="ph-fill ph-pill text-[128px] text-white/20 z-0"></i>
                    </div>

                    {/* Product Grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        {products.map((product) => (
                            <div key={product.id} className="bg-white border border-[var(--color-border)] rounded-xl p-4 md:p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[var(--color-primary-light)] flex flex-col relative group">
                                {product.badge && (
                                    <span className={`absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full z-10 ${product.badgeStyles}`}>
                                        {product.badge}
                                    </span>
                                )}
                                <div className="w-full h-[150px] relative mb-4">
                                    <Image src={product.image} alt={product.name} fill className="object-contain group-hover:scale-105 transition-transform duration-300" sizes="(max-width: 768px) 50vw, 33vw" />
                                </div>
                                <div className="font-semibold text-[var(--color-text-main)] mb-1 text-sm md:text-base line-clamp-2 h-11 md:h-12 leading-tight">
                                    {product.name}
                                </div>
                                <div className="text-[var(--color-warning)] text-sm mb-2 flex items-center justify-center gap-1">
                                    <i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i>
                                    {product.rating === 5 ? <i className="ph-fill ph-star"></i> : <i className={product.rating % 1 === 0 ? "ph ph-star" : "ph-fill ph-star-half"}></i>}
                                    <span className="text-[var(--color-text-light)] ml-1 font-normal">({product.reviews})</span>
                                </div>
                                <div className="text-xl font-bold text-[var(--color-primary-dark)] mb-4 mt-auto">
                                    {product.price} {product.oldPrice && <span className="text-sm font-normal text-[var(--color-text-light)] line-through ml-1">{product.oldPrice}</span>}
                                </div>
                                <button
                                    className="w-full bg-transparent text-[var(--color-primary)] border-2 border-[var(--color-primary)] hover:bg-[var(--color-surface-hover)] hover:-translate-y-0.5 transition-all py-2 rounded-full font-semibold text-sm shadow-sm"
                                    onClick={() => alert('Added to Cart!')}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Load More */}
                    <div className="text-center mt-8">
                        <button className="inline-flex items-center gap-2 bg-white text-[var(--color-primary-dark)] border border-[var(--color-border)] hover:bg-gray-50 transition-colors shadow-sm py-3 px-8 rounded-full font-semibold">
                            <i className="ph-bold ph-spinner animate-spin"></i> Load More Products
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}
