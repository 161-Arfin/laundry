'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

import { siteConfig } from '@/config/site';

const navLinks = siteConfig.navLinks;

const whatsappNumber = siteConfig.business.phone;
const navWhatsappMessage = siteConfig.business.whatsappMessage;

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);

            // Find active section
            const sections = navLinks.map(link => link.href.replace('#', ''));
            for (const sectionId of sections.reverse()) {
                const element = document.getElementById(sectionId);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100) {
                        setActiveSection(sectionId);
                        return;
                    }
                }
            }
            setActiveSection('');
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent backdrop-blur-sm shadow-sm"

        >
            <nav className="container-custom" aria-label="Main navigation">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link href="#hero">
                        <Image src="/images/logo-laundry.png" alt="Logo" width={150} height={150} />
                    </Link>
                    {/* <Link
                        href="#hero"
                        className="text-xl md:text-2xl font-bold text-[var(--accent)]"
                        aria-label="Laundryku - Kembali ke beranda"
                    >
                        Laundryku
                    </Link> */}

                    {/* Desktop Nav Links */}
                    <ul className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${activeSection === link.href.replace('#', '')
                                        ? 'bg-[var(--accent-light)] text-[var(--accent)] border-1 border-[var(--accent)]'
                                        : 'text-[var(--foreground)] hover:bg-gray-100'
                                        }`}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Desktop CTA */}
                    {/* <a
                        href={`https://wa.me/${whatsappNumber}?text=${navWhatsappMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:inline-flex btn btn-primary text-sm"
                        aria-label="Hubungi kami via WhatsApp"
                    >
                        <Phone size={18} />
                        WhatsApp
                    </a> */}

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors"
                        aria-label={isOpen ? 'Tutup menu' : 'Buka menu'}
                        aria-expanded={isOpen}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
                        <ul className="py-4 px-4 space-y-2">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        onClick={handleLinkClick}
                                        className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${activeSection === link.href.replace('#', '')
                                            ? 'bg-[var(--accent-light)] text-[var(--accent)]'
                                            : 'text-[var(--foreground)] hover:bg-gray-100'
                                            }`}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                            <li className="pt-2">
                                <a
                                    href={`https://wa.me/${whatsappNumber}?text=${navWhatsappMessage}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary w-full"
                                    onClick={handleLinkClick}
                                >
                                    <Phone size={18} />
                                    Chat WhatsApp
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
        </header>
    );
}
