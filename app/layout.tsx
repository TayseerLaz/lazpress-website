import type { Metadata, Viewport } from "next";
import { Manrope, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lazpress.example.com"),
  title: {
    default: "LAZ Press",
    template: "%s · LAZ Press",
  },
  description:
    "LAZ Press — print, packaging, branding, web and social, fully handled. 10+ years, 1,000+ brands, 700+ secure-paper clients across Lebanon, UAE, KSA and Qatar.",
  applicationName: "LAZ Press",
  keywords: [
    "offset printing",
    "digital printing",
    "3D printing",
    "secure printing",
    "packaging",
    "branding",
    "Beirut print shop",
    "Lebanon",
  ],
  openGraph: {
    title: "LAZ Press",
    description: "Your brand, fully handled. Create · Share · Print · Own.",
    type: "website",
    siteName: "LAZ Press",
  },
  twitter: {
    card: "summary_large_image",
    title: "LAZ Press",
    description: "Your brand, fully handled.",
  },
  icons: {
    icon: "/lazpress.png",
    apple: "/lazpress.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
