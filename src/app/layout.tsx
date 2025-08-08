import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Dancing_Script, Great_Vibes } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: "400",
});


export const metadata: Metadata = {
  title: {
    default: "Mr and Mrs Jones Duo | Suffolk Based Live Music",
    template: "%s | Mr and Mrs Jones Duo"
  },
  description:
    "Live acoustic duo for weddings, parties, and events in Suffolk and beyond. Two guitars, two voices, no backing tracks. Book an acoustic duo for your event.",
  keywords: [
    "acoustic duo uk",
    "country duo",
    "country duo suffolk",
    "book acoustic duo",
    "live music suffolk",
    "wedding music suffolk",
    "party music suffolk",
    "Mr and Mrs Jones Duo",
    "Sarah and Ben Duo",
    "live acoustic music"
  ],
  alternates: {
    canonical: "https://mrandmrsjonesduo.co.uk"
  },
  themeColor: "#dfb722",
  robots: "index, follow",
  authors: [{ name: "Mr and Mrs Jones Duo", url: "https://mrandmrsjonesduo.co.uk" }],
  publisher: "Mr and Mrs Jones Duo",
  openGraph: {
    title: "Mr and Mrs Jones Duo | Suffolk Based Live Music",
    description:
      "Live acoustic duo for weddings, parties, and events in Suffolk and beyond. Two guitars, two voices, no backing tracks.",
    url: "https://mrandmrsjonesduo.co.uk",
    siteName: "Mr and Mrs Jones Duo",
    images: [
      {
        url: "https://mrandmrsjonesduo.co.uk/promo_new.jpg",
        width: 1200,
        height: 630,
        alt: "Mr and Mrs Jones Duo Promo"
      }
    ],
    locale: "en_GB",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Mr and Mrs Jones Duo | Suffolk Based Live Music",
    description:
      "Live acoustic duo for weddings, parties, and events in Suffolk and beyond. Two guitars, two voices, no backing tracks.",
    images: ["https://mrandmrsjonesduo.co.uk/promo_new.jpg"]
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${dancingScript.variable} ${greatVibes.variable} antialiased bg-black`}
      >
        {children}
      </body>
    </html>
  );
}
