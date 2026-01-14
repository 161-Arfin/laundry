import { Check, Star, MessageCircle } from 'lucide-react';

import { siteConfig } from '@/config/site';

const whatsappNumber = siteConfig.business.phone;

const packages = siteConfig.pricing;

const terms = [
    'Harga sudah termasuk pewangi dan plastik packing',
    'Berat dihitung saat dijemput, pembayaran saat diantar',
    'Jemput gratis untuk radius 5 km dari Seturan',
    'Di luar radius, tambah ongkir Rp 5.000-10.000',
    'Pembayaran: Cash, Transfer, QRIS, OVO, GoPay',
];

export default function Pricing() {
    return (
        <section id="harga" className="section-padding">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <span className="badge badge-highlight mb-4">Transparan</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
                        Pilih Paketnya
                    </h2>
                    <p className="text-[var(--text-muted)] max-w-xl mx-auto">
                        Semua harga udah include cuci, setrika, lipat, sama pewangi. Nggak ada biaya tersembunyi.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
                    {packages.map((pkg, index) => (
                        <div
                            key={index}
                            className={`card p-6 border-2 ${pkg.color} relative ${pkg.popular ? 'md:-mt-4 md:mb-4' : ''
                                }`}
                        >
                            {/* Popular Badge */}
                            {pkg.popular && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-[var(--accent)] text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md">
                                    <Star size={14} fill="currentColor" />
                                    Paling Laris
                                </div>
                            )}

                            {/* Package Header */}
                            <div className="text-center mb-6 pt-2">
                                <h3 className="text-xl font-bold text-[var(--foreground)] mb-1">
                                    {pkg.name}
                                </h3>
                                <p className="text-[var(--accent)] font-semibold text-sm">
                                    {pkg.time}
                                </p>
                            </div>

                            {/* Price */}
                            <div className="text-center mb-6">
                                <div className="flex items-baseline justify-center gap-1">
                                    <span className="text-sm text-[var(--text-muted)]">Rp</span>
                                    <span className="text-4xl font-bold text-[var(--foreground)]">
                                        {pkg.price}
                                    </span>
                                    <span className="text-[var(--text-muted)]">{pkg.priceNote}</span>
                                </div>
                                <p className="text-sm text-[var(--text-muted)] mt-1">{pkg.minWeight}</p>
                            </div>

                            {/* Features */}
                            <ul className="space-y-3 mb-6">
                                {pkg.features.map((feature, fIndex) => (
                                    <li key={fIndex} className="flex items-start gap-2 text-sm">
                                        <Check size={18} className="text-[var(--accent)] flex-shrink-0 mt-0.5" />
                                        <span className="text-[var(--foreground)]">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA */}
                            <a
                                href={`https://wa.me/${whatsappNumber}?text=${pkg.ctaMessage}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`btn w-full ${pkg.popular ? 'btn-primary' : 'btn-secondary'}`}
                                aria-label={`Order paket ${pkg.name} via WhatsApp`}
                            >
                                <MessageCircle size={18} />
                                Pilih {pkg.name}
                            </a>
                        </div>
                    ))}
                </div>

                {/* Terms & Notes - micro detail */}
                <div className="max-w-3xl mx-auto bg-white rounded-2xl p-6 shadow-sm">
                    <h3 className="font-semibold text-[var(--foreground)] mb-4 flex items-center gap-2">
                        📋 Syarat & Ketentuan
                    </h3>
                    <ul className="space-y-2">
                        {terms.map((term, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                                <span className="text-[var(--accent)] mt-1">•</span>
                                {term}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
