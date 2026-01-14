import { MapPin, Clock, MessageCircle } from 'lucide-react';

const whatsappNumber = '6292973923929';
const areaWhatsappMessage = encodeURIComponent('Halo, saya mau cek apakah area saya masuk jangkauan Laundryku. Lokasi saya di...');

const areas = [
    { name: 'Condongcatur', popular: true },
    { name: 'Seturan', popular: true },
    { name: 'Gejayan', popular: true },
    { name: 'Babarsari', popular: false },
    { name: 'Pogung', popular: false },
    { name: 'Kotabaru', popular: false },
    { name: 'Sleman Kota', popular: false },
    { name: 'Maguwoharjo', popular: false },
    { name: 'Demangan', popular: false },
    { name: 'Kaliurang Bawah', popular: false },
];

export default function Coverage() {
    return (
        <section id="area" className="section-padding bg-white">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div>
                        <span className="badge badge-highlight mb-4">Area Layanan</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
                            Jangkauan Kami di Jogja
                        </h2>
                        <p className="text-[var(--text-muted)] mb-6">
                            Basecamp kami ada di sekitar Seturan. Antar-jemput gratis untuk radius 5 km.
                            Kalau lebih jauh, tetap bisa kok—cuma ada tambahan ongkir dikit.
                        </p>

                        {/* Service Info Cards */}
                        <div className="grid sm:grid-cols-2 gap-4 mb-8">
                            <div className="flex items-start gap-3 bg-[var(--accent-light)] p-4 rounded-2xl">
                                <div className="w-10 h-10 bg-[var(--accent)] text-white rounded-xl flex items-center justify-center flex-shrink-0">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-[var(--foreground)] text-sm">Radius Gratis</h4>
                                    <p className="text-[var(--text-muted)] text-sm">5 km dari Seturan</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-2xl">
                                <div className="w-10 h-10 bg-blue-500 text-white rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Clock size={20} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-[var(--foreground)] text-sm">Jam Operasional</h4>
                                    <p className="text-[var(--text-muted)] text-sm">08.00 – 20.00 WIB</p>
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <a
                            href={`https://wa.me/${whatsappNumber}?text=${areaWhatsappMessage}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                            aria-label="Cek apakah area saya masuk jangkauan via WhatsApp"
                        >
                            <MessageCircle size={18} />
                            Cek Area Saya via WhatsApp
                        </a>
                    </div>

                    {/* Right - Area Pills */}
                    <div className="bg-[var(--background)] rounded-3xl p-6 md:p-8">
                        <h3 className="font-semibold text-[var(--foreground)] mb-4">
                            Area yang sering kami layani:
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {areas.map((area, index) => (
                                <span
                                    key={index}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${area.popular
                                            ? 'bg-[var(--accent)] text-white'
                                            : 'bg-white text-[var(--foreground)] border border-gray-200 hover:border-[var(--accent)] hover:text-[var(--accent)]'
                                        }`}
                                >
                                    {area.name}
                                </span>
                            ))}
                        </div>
                        <p className="text-sm text-[var(--text-muted)] mt-6">
                            Area kamu nggak ada di list? Tenang, chat aja dulu. Kalau masih masuk jangkauan,
                            kita tetap bisa jemput.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
