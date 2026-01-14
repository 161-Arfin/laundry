# Laundryku - SME Laundry Landing Page Template

A premium, high-performance landing page template designed specifically for laundry businesses. Built with **Next.js 15**, **React 19**, **Tailwind CSS 4**, and **TypeScript**.

![Laundryku Preview](/public/images/hero-laundry.jpg)

## Features

- ⚡ **High Performance**: Built on Next.js 15 (App Router) for blazing fast load times.
- 📱 **Mobile First**: Fully responsive design that looks great on all devices.
- 🎨 **Modern Design**: Clean, professional UI with smooth animations.
- 🛠 **Easy Configuration**: Centralized config file (`config/site.ts`) to manage content.
- 🔍 **SEO Optimized**: Built-in metadata management for better search engine visibility.
- 📞 **Conversion Focused**: Integrated WhatsApp call-to-actions.

## Getting Started

### Prerequisites

- Node.js 18+ installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/laundryku.git
   cd laundryku
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the site.

## Configuration

This template is designed to be easily customized without touching the core code. 

**Main Config File**: [`config/site.ts`](config/site.ts)

Here you can edit:
- **Business Info**: Name, Phone, Address, WhatsApp message.
- **Pricing**: Add/Edit/Remove laundry packages.
- **Navigation**: Change menu links.
- **Metadata**: Update SEO titles and descriptions.

Example `config/site.ts`:

```typescript
export const siteConfig = {
    name: "My Laundry",
    business: {
        phone: "628123456789",
        address: "Jl. Merdeka No. 10",
        // ...
    },
    // ...
};
```

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub.
2. Import the project in Vercel.
3. Deploy!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
