import { Phone, Clock, MapPin, Instagram } from 'lucide-react';
import Link from 'next/link';

import { siteConfig } from '@/config/site';

const whatsappNumber = siteConfig.business.phone;

const quickLinks = siteConfig.navLinks;

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white">
            <div className="container-custom py-12">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {/* Brand Column */}
                    <div>
                        <Link href="/" className="text-2xl font-bold text-[var(--accent)] mb-4 block">
                            {siteConfig.name}
                        </Link>
                        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                            Laundry kiloan di Yogyakarta. Antar-jemput, tepat waktu, wangi tahan lama.
                            Melayani area Seturan, Gejayan, Condongcatur, dan sekitarnya.
                        </p>
                        {/* Social Links */}
                        <div className="flex gap-3">
                            <a
                                href={`https://wa.me/${whatsappNumber}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-gray-800 hover:bg-[var(--accent)] rounded-xl flex items-center justify-center transition-colors"
                                aria-label="Hubungi via WhatsApp"
                            >
                                <Phone size={18} />
                            </a>
                            <a
                                href={siteConfig.business.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-gray-800 hover:bg-[var(--accent)] rounded-xl flex items-center justify-center transition-colors"
                                aria-label="Follow di Instagram"
                            >
                                <Instagram size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">Menu</h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-white text-sm transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">Kontak</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-sm">
                                <Clock size={18} className="text-[var(--accent)] flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-white">Jam Operasional</p>
                                    <p className="text-gray-400">{siteConfig.business.hours}</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3 text-sm">
                                <MapPin size={18} className="text-[var(--accent)] flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-white">Area Layanan</p>
                                    <p className="text-gray-400">{siteConfig.business.address}</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3 text-sm">
                                <Phone size={18} className="text-[var(--accent)] flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-white">WhatsApp</p>
                                    <a
                                        href={`https://wa.me/${whatsappNumber}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-[var(--accent)] transition-colors"
                                    >
                                        {siteConfig.business.formattedPhone}
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © {currentYear} {siteConfig.name}. Hak cipta dilindungi.
                    </p>
                    <p className="text-gray-500 text-sm">
                        Dibuat dengan 💚 di Yogyakarta
                    </p>
                </div>
            </div>
        </footer>
    );
}
