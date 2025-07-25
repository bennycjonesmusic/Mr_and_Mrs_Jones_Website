import type { Metadata } from "next";

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
    "live acoustic music"
  ],
  openGraph: {
    title: "Mr and Mrs Jones Duo | Suffolk Based Live Music",
    description:
      "Live acoustic duo for weddings, parties, and events in Suffolk and beyond. Two guitars, two voices, no backing tracks.",
    url: "https://mrandmrsjonesduo.co.uk",
    siteName: "Mr and Mrs Jones Duo",
    images: [
      {
        url: "/promo_new.jpg",
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
    images: ["/promo_new.jpg"]
  },
  icons: {
    icon: "/favicon.ico"
  }
};
