'use client';

import { MessageCircle } from 'lucide-react';

const whatsappNumber = '6292973923929';
const stickyWhatsappMessage = encodeURIComponent('Halo Laundryku, saya mau order laundry. Bisa dijemput hari ini?');

export default function StickyWhatsApp() {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-gray-200 p-3 shadow-lg">
            <a
                href={`https://wa.me/${whatsappNumber}?text=${stickyWhatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary w-full py-4 text-base"
                aria-label="Order laundry via WhatsApp sekarang"
            >
                <MessageCircle size={20} />
                Chat WhatsApp Sekarang
            </a>
        </div>
    );
}
