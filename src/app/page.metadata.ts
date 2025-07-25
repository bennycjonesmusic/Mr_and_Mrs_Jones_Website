import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Sarah and Ben Duo | Suffolk Based Live Music",
    template: "%s | Sarah and Ben Duo"
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
    "Sarah and Ben Duo",
    "live acoustic music"
  ],
  openGraph: {
    title: "Sarah and Ben Duo | Suffolk Based Live Music",
    description:
      "Live acoustic duo for weddings, parties, and events in Suffolk and beyond. Two guitars, two voices, no backing tracks.",
    url: "https://sarahandbenduo.com",
    siteName: "Sarah and Ben Duo",
    images: [
      {
        url: "/promo_new.jpg",
        width: 1200,
        height: 630,
        alt: "Sarah and Ben Duo Promo"
      }
    ],
    locale: "en_GB",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarah and Ben Duo | Suffolk Based Live Music",
    description:
      "Live acoustic duo for weddings, parties, and events in Suffolk and beyond. Two guitars, two voices, no backing tracks.",
    images: ["/promo_new.jpg"]
  },
  icons: {
    icon: "/favicon.ico"
  }
};
