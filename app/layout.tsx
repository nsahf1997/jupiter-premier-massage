import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://jupiter-premier-massage.ambermwomack.chatgpt.site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Massage Therapy in Jupiter, FL | Jupiter Premier Massage",
    template: "%s | Jupiter Premier Massage & Bodywork",
  },
  description:
    "Personalized massage therapy in Jupiter, FL for relaxation, pain relief, mobility, and athletic recovery. Explore 60- and 90-minute sessions.",
  keywords: [
    "massage Jupiter FL",
    "therapeutic massage Jupiter Florida",
    "sports massage Jupiter",
    "pain relief massage",
    "relaxation massage",
    "deep tissue massage Jupiter FL",
    "massage therapist near Jupiter FL",
    "massage near Tequesta FL",
    "massage Palm Beach Gardens",
  ],
  alternates: { canonical: "/" },
  category: "health and wellness",
  creator: "Jupiter Premier Massage & Bodywork",
  publisher: "Jupiter Premier Massage & Bodywork",
  icons: {
    icon: "/images/jupiter-premier-logo-dark.png",
    apple: "/images/jupiter-premier-logo-dark.png",
  },
  openGraph: {
    title: "Jupiter Premier Massage & Bodywork",
    description: "Relax. Recover. Recharge. Premium therapeutic massage tailored to your goals in Jupiter, Florida.",
    type: "website",
    locale: "en_US",
    siteName: "Jupiter Premier Massage & Bodywork",
    url: "/",
    images: [{ url: "/og.png", width: 1733, height: 907, alt: "Jupiter Premier Massage & Bodywork" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jupiter Premier Massage & Bodywork",
    description: "Relax. Recover. Recharge. Premium therapeutic massage in Jupiter, Florida.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
