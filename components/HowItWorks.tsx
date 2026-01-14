import { MessageCircle, Truck, Sparkles } from 'lucide-react';

const steps = [
    {
        number: '1',
        icon: MessageCircle,
        title: 'Chat via WhatsApp',
        description: 'Kabarin alamat dan waktu jemput yang kamu mau. Konfirmasi biasanya 5 menit aja.',
        time: '~5 menit konfirmasi',
        color: 'bg-blue-100 text-blue-600',
    },
    {
        number: '2',
        icon: Truck,
        title: 'Kurir Jemput Cucian',
        description: 'Kurir kami datang ke lokasi sesuai jadwal. Tinggal serahin, kami yang timbang.',
        time: '30-90 menit (tergantung area)',
        color: 'bg-amber-100 text-amber-600',
    },
    {
        number: '3',
        icon: Sparkles,
        title: 'Bersih & Diantar Balik',
        description: 'Cucian selesai sesuai paket yang dipilih. Langsung kami antar, notif via WA.',
        time: 'Sesuai paket (3 hari, 24/6 jam)',
        color: 'bg-green-100 text-green-600',
    },
];

export default function HowItWorks() {
    return (
        <section id="cara-order" className="section-padding bg-white">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <span className="badge badge-highlight mb-4">Gampang Banget</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
                        Cara Ordernya
                    </h2>
                    <p className="text-[var(--text-muted)] max-w-xl mx-auto">
                        Tiga langkah aja, dari chat sampai cucian balik lagi ke kamu.
                    </p>
                </div>

                {/* Stepper */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Connection Line - visible on md+ */}
                    <div className="hidden md:block absolute top-24 left-[calc(16.67%-0.5rem)] right-[calc(16.67%-0.5rem)] h-1 bg-gray-200 rounded-full">
                        <div className="absolute inset-y-0 left-0 w-1/2 bg-[var(--accent)] rounded-full" />
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {steps.map((step, index) => (
                            <div key={index} className="relative">
                                {/* Mobile connection line */}
                                {index < steps.length - 1 && (
                                    <div className="md:hidden absolute left-8 top-20 bottom-0 w-0.5 bg-gray-200" />
                                )}

                                <div className="card p-6 relative z-10 h-full border border-green-200">
                                    {/* Step number badge */}
                                    <div className="absolute -top-4 left-6 w-8 h-8 bg-[var(--accent)] text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md">
                                        {step.number}
                                    </div>

                                    {/* Icon */}
                                    <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mb-4 mt-2`}>
                                        <step.icon size={28} />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-lg font-bold text-[var(--foreground)] mb-2">
                                        {step.title}
                                    </h3>
                                    <p className="text-[var(--text-muted)] text-sm mb-3">
                                        {step.description}
                                    </p>

                                    {/* Time estimate chip */}
                                    <div className="inline-flex items-center gap-1 text-xs font-medium text-[var(--accent)] bg-[var(--accent-light)] px-3 py-1 rounded-full">
                                        ⏱️ {step.time}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
