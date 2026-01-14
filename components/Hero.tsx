import Image from 'next/image';
import { Clock, Truck, Sparkles, MessageCircle, ChevronDown } from 'lucide-react';

const whatsappNumber = '6292973923929';
const heroWhatsappMessage = encodeURIComponent('Halo, saya mau tanya soal layanan laundry Laundryku');

const trustChips = [
    { icon: Truck, text: 'Antar-jemput gratis' },
    { icon: Clock, text: 'Express 6 jam ready' },
    { icon: Sparkles, text: 'Wangi tahan lama' },
];

export default function Hero() {
    return (
        <section id='hero' className="relative min-h-[100svh] flex items-center pt-20 pb-12 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-laundry.jpg"
                    alt="Interior laundry bersih dan modern"
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#F5FBE6]/95 via-[#F5FBE6]/80 to-[#F5FBE6]/60" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#F5FBE6] via-transparent to-transparent" />
            </div>

            <div className="container-custom relative z-10">
                <div className="max-w-2xl">
                    {/* Time Badge */}
                    <div className="inline-flex items-center gap-2 bg-[var(--accent)] text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-pulse-soft">
                        <Clock size={16} />
                        <span>Selesai &lt;24 jam</span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--foreground)] leading-tight mb-4">
                        Cucian Beres,{' '}
                        <span className="text-[var(--accent)]">Kamu Bebas</span>
                    </h1>

                    {/* Subheadline - natural Indonesian, not generic marketing */}
                    <p className="text-lg md:text-xl text-[var(--text-muted)] mb-8 max-w-xl">
                        Laundry kiloan di Jogja yang beneran tepat waktu.
                        Tinggal chat, dijemput, besok udah wangi lagi.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-10">
                        <a
                            href={`https://wa.me/${whatsappNumber}?text=${heroWhatsappMessage}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary text-base px-8 py-4"
                            aria-label="Chat via WhatsApp untuk order laundry"
                        >
                            <MessageCircle size={20} />
                            Chat WhatsApp
                        </a>
                        <a
                            href="#harga"
                            className="btn btn-secondary text-base px-8 py-4"
                            aria-label="Lihat daftar harga paket laundry"
                        >
                            <ChevronDown size={20} />
                            Lihat Paket
                        </a>
                    </div>

                    {/* Trust Chips */}
                    <div className="flex flex-wrap gap-3">
                        {trustChips.map((chip, index) => (
                            <div
                                key={index}
                                className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-[var(--foreground)] shadow-sm"
                            >
                                <chip.icon size={16} className="text-[var(--accent)]" />
                                {chip.text}
                            </div>
                        ))}
                    </div>

                    {/* Promo Badge - micro detail */}
                    <div className="mt-8 inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-xl text-sm animate-fade-in-up">
                        <span className="text-lg">🎉</span>
                        <span className="font-medium">Pelanggan baru: diskon 15% minggu ini!</span>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce hidden md:block">
                <ChevronDown size={32} className="text-[var(--accent)]" />
            </div>
        </section>
    );
}
