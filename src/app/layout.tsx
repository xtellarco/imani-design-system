import type { Metadata, Viewport } from "next";
import { DM_Sans, Quicksand } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

const agency = localFont({
  src: "../../fonts/Agency.woff2",
  variable: "--font-agency",
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["500", "700"],
});

const siteConfig = {
  name: "Imani Design System",
  tagline: "Eco-friendly cleaning, reimagined.",
  description:
    "A technical design system website for building Imani interfaces with Bun, Next.js, TypeScript, and shadcn/ui.",
  url: "https://imani-design-system.vercel.app",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#073C2B" },
  ],
  colorScheme: "light dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    template: `%s | ${siteConfig.name}`,
    default: siteConfig.name,
  },
  description: siteConfig.description,
  keywords: [
    "Imani",
    "design system",
    "shadcn/ui",
    "eco-friendly cleaning",
    "Next.js design system",
    "brand system",
  ],
  authors: [{ name: "Imani" }],
  creator: "Imani",
  publisher: "Imani",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/icons/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: "/og/imani-og.png",
        width: 1200,
        height: 630,
        alt: "Imani Design System",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/og/imani-twitter.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      name: "Imani",
      logo: `${siteConfig.url}/imani-logotype-light.svg`,
    },
    image: `${siteConfig.url}/og/imani-og.png`,
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${agency.variable} ${dmSans.variable} ${quicksand.variable} h-full antialiased`}
    >
      <head>
        <Script
          id="imani-json-ld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
