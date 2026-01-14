import { MessageCircle, Sparkles } from 'lucide-react';

const whatsappNumber = '6292973923929';
const ctaWhatsappMessage = encodeURIComponent('Halo Laundryku! Saya tertarik dengan promo pelanggan baru. Bisa dijemput hari ini?');

export default function CTA() {
    return (
        <section className="section-padding">
            <div className="container-custom">
                <div className="relative bg-[var(--accent)] rounded-3xl p-8 md:p-12 overflow-hidden">
                    {/* Background Decorations */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

                    <div className="relative z-10 text-center max-w-2xl mx-auto">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Sparkles size={16} />
                            Diskon 15% pelanggan baru
                        </div>

                        {/* Headline */}
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Ada Cucian Numpuk?
                        </h2>

                        {/* Subheadline */}
                        <p className="text-white/90 text-lg mb-8 max-w-lg mx-auto">
                            Jangan ditunda-tunda. Chat sekarang, besok udah wangi dan rapi lagi.
                        </p>

                        {/* CTA Button */}
                        <a
                            href={`https://wa.me/${whatsappNumber}?text=${ctaWhatsappMessage}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-white text-[var(--accent)] px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
                            aria-label="Hubungi Laundryku via WhatsApp untuk order sekarang"
                        >
                            <MessageCircle size={22} />
                            Chat Sekarang
                        </a>

                        {/* Small note */}
                        <p className="text-white/70 text-sm mt-6">
                            Balas cepat • Buka 08.00–20.00 WIB
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
