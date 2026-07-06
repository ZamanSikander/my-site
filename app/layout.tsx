import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { GoogleAnalytics } from '@/components/google-analytics';
import { site, socialLinks } from '@/lib/content';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap'
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap'
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'Zaman Sikander | Full-Stack Web Developer',
    template: '%s | Zaman Sikander'
  },
  description: site.description,
  keywords: [
    'Zaman Sikander',
    'full-stack web developer',
    'front-end developer',
    'React developer',
    'Next.js developer',
    'Tailwind CSS',
    'WordPress',
    'responsive web design',
    'portfolio'
  ],
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'Zaman Sikander | Full-Stack Web Developer',
    description: site.description,
    url: site.url,
    siteName: 'Zaman Sikander Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/assets/portfolio-website.webp',
        width: 1200,
        height: 1500,
        alt: 'Zaman Sikander portfolio project preview'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zaman Sikander | Full-Stack Web Developer',
    description: site.description,
    images: ['/assets/portfolio-website.webp']
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/android_facicon.png'
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Person', 'ProfessionalService'],
  name: site.name,
  jobTitle: site.title,
  description: site.description,
  url: site.url,
  email: `mailto:${site.email}`,
  telephone: site.phone,
  areaServed: 'Worldwide',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'PK'
  },
  sameAs: socialLinks.map((link) => link.href),
  knowsAbout: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Framer Motion', 'WordPress']
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} bg-paper text-ink antialiased dark:bg-ink dark:text-paper`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
