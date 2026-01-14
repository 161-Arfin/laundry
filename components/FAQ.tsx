'use client';

import { useState } from 'react';
import { ChevronDown, Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: 'Minimal order berapa kg?',
        answer: 'Untuk paket Reguler minimal 1 kg, sedangkan Express dan Super Express minimal 3 kg. Kalau kurang dari itu, tetap dihitung sesuai minimal ya.',
    },
    {
        question: 'Layanan express tersedia setiap hari?',
        answer: 'Iya, Express dan Super Express tersedia setiap hari termasuk weekend. Tapi untuk Super Express, lebih baik order sebelum jam 12 siang biar bisa selesai di hari yang sama.',
    },
    {
        question: 'Pewangi bisa pilih sendiri?',
        answer: 'Untuk paket Reguler pakai pewangi standar kami (fresh floral). Paket Express ke atas bisa request pewangi—ada pilihan lavender, ocean breeze, dan baby powder. Tinggal bilang pas order.',
    },
    {
        question: 'Kalau ada barang hilang atau rusak gimana?',
        answer: 'Sebelum dijemput, kurir akan foto dan catat kondisi cucian. Kalau ada masalah, kami ganti rugi sesuai kesepakatan. Selama 2 tahun operasi, alhamdulillah belum pernah ada kasus serius.',
    },
    {
        question: 'Bayarnya pakai apa aja?',
        answer: 'Cash waktu diantar, atau transfer (BCA, Mandiri, BRI). Bisa juga pakai QRIS, OVO, GoPay, dan ShopeePay. Pilih yang paling gampang buat kamu.',
    },
    {
        question: 'Jadwal jemput bisa kapan aja?',
        answer: 'Jam operasional kami 08.00-20.00 WIB. Tinggal bilang mau dijemput jam berapa, kami usahakan datang sesuai waktu. Kalau mendadak, minimal kabarin 30 menit sebelumnya.',
    },
    {
        question: 'Bisa cuci selimut/bed cover nggak?',
        answer: 'Bisa pastinya. Selimut, bed cover, sprei—semua kami terima. Tapi dihitung per barang. Kalau barang gede banget kayak karpet, chat dulu ya biar kami kasih estimasi.',
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="section-padding bg-white">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <span className="badge badge-highlight mb-4">FAQ</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
                        Pertanyaan yang Sering Ditanya
                    </h2>
                    <p className="text-[var(--text-muted)] max-w-xl mx-auto">
                        Kalau pertanyaanmu nggak ada di sini, langsung chat aja.
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="card border border-gray-100 overflow-hidden"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                                aria-expanded={openIndex === index}
                                aria-controls={`faq-answer-${index}`}
                            >
                                <span className="font-semibold text-[var(--foreground)] pr-4">
                                    {faq.question}
                                </span>
                                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--accent-light)] flex items-center justify-center">
                                    {openIndex === index ? (
                                        <Minus size={18} className="text-[var(--accent)]" />
                                    ) : (
                                        <Plus size={18} className="text-[var(--accent)]" />
                                    )}
                                </span>
                            </button>
                            <div
                                id={`faq-answer-${index}`}
                                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'
                                    }`}
                            >
                                <p className="px-5 pb-5 text-[var(--text-muted)] leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
