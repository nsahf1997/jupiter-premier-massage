import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const heading = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Jupiter Premier Massage & Bodywork | Jupiter, FL",
    template: "%s | Jupiter Premier Massage & Bodywork",
  },
  description:
    "Premium relaxation massage and pain relief bodywork in Jupiter, Florida. Customized 60- and 90-minute therapeutic sessions with Licensed Massage Therapist Nick Sahf.",
  keywords: [
    "massage Jupiter FL",
    "therapeutic massage Jupiter Florida",
    "sports massage Jupiter",
    "pain relief bodywork",
    "relaxation massage",
  ],
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
    images: [{ url: "/og.png", width: 1733, height: 907, alt: "Jupiter Premier Massage & Bodywork" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jupiter Premier Massage & Bodywork",
    description: "Relax. Recover. Recharge. Premium therapeutic massage in Jupiter, Florida.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${heading.variable} ${body.variable}`}>{children}</body>
    </html>
  );
}
