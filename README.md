# Laundryku - Template Landing Page Laundry UMKM

Template landing page premium dengan performa tinggi yang dirancang khusus untuk bisnis laundry. Dibangun dengan **Next.js 15**, **React 19**, **Tailwind CSS 4**, dan **TypeScript**.

![Preview Laundryku](/public/images/hero-laundry.jpg)

## Fitur

- ⚡ **Performa Tinggi**: Dibangun di atas Next.js 15 (App Router) untuk waktu muat yang super cepat.
- 📱 **Mobile First**: Desain responsif sepenuhnya yang terlihat bagus di semua perangkat.
- 🎨 **Desain Modern**: UI bersih dan profesional dengan animasi halus.
- 🛠 **Konfigurasi Mudah**: File konfigurasi terpusat (`config/site.ts`) untuk mengelola konten.
- 🔍 **Optimasi SEO**: Manajemen metadata bawaan untuk visibilitas mesin pencari yang lebih baik.
- 📞 **Fokus Konversi**: Call-to-action WhatsApp yang terintegrasi.

## Cara Memulai

### Prasyarat

- Node.js 18+ terinstal di komputer Anda.

### Instalasi

1. Clone repositori:
   ```bash
   git clone https://github.com/usernameanda/laundryku.git
   cd laundryku
   ```

2. Instal dependensi:
   ```bash
   npm install
   ```

3. Jalankan server pengembangan:
   ```bash
   npm run dev
   ```

4. Buka [http://localhost:3000](http://localhost:3000) untuk melihat situs.

## Konfigurasi

Template ini dirancang agar mudah disesuaikan tanpa menyentuh kode inti.

**File Konfigurasi Utama**: [`config/site.ts`](config/site.ts)

Di sini Anda dapat mengedit:
- **Info Bisnis**: Nama, Telepon, Alamat, Pesan WhatsApp.
- **Harga**: Tambah/Edit/Hapus paket laundry.
- **Navigasi**: Ubah link menu.
- **Metadata**: Perbarui judul dan deskripsi SEO.

Contoh `config/site.ts`:

```typescript
export const siteConfig = {
    name: "Laundryku",
    business: {
        phone: "628123456789",
        address: "Jl. Merdeka No. 10",
        // ...
    },
    // ...
};
```

## Deployment

Cara termudah untuk deploy adalah menggunakan [Vercel](https://vercel.com):

1. Push kode Anda ke GitHub.
2. Impor proyek di Vercel.
3. Deploy!

## Lisensi

Proyek ini dilisensikan di bawah Lisensi MIT - lihat file [LICENSE](LICENSE) untuk detailnya.
