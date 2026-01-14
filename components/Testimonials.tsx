import { Star, Quote } from 'lucide-react';

import { siteConfig } from '@/config/site';

const testimonials = siteConfig.testimonials;

export default function Testimonials() {
    return (
        <section id="testimoni" className="section-padding">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <span className="badge badge-highlight mb-4">Testimoni</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
                        Kata Mereka yang Udah Coba
                    </h2>
                    <p className="text-[var(--text-muted)] max-w-xl mx-auto">
                        Bukan testimoni fiktif. Ini dari pelanggan beneran di sekitar Jogja.
                    </p>
                </div>

                {/* Testimonial Cards */}
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="card p-6 relative">
                            {/* Quote Icon */}
                            <Quote
                                size={32}
                                className="absolute top-4 right-4 text-[var(--accent-light)]"
                                fill="currentColor"
                            />

                            {/* Rating */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={16}
                                        className={
                                            i < testimonial.rating
                                                ? 'text-amber-400'
                                                : 'text-gray-200'
                                        }
                                        fill={i < testimonial.rating ? 'currentColor' : 'none'}
                                    />
                                ))}
                            </div>

                            {/* Text */}
                            <p className="text-[var(--foreground)] mb-6 leading-relaxed">
                                "{testimonial.text}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-[var(--accent)] text-white rounded-full flex items-center justify-center font-semibold text-sm">
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <p className="font-semibold text-[var(--foreground)] text-sm">
                                        {testimonial.name}
                                    </p>
                                    <p className="text-[var(--text-muted)] text-xs">
                                        {testimonial.location}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
