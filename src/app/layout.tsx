import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans, Pinyon_Script } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
});

const pinyonScript = Pinyon_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nguyen Phuong Nguyen — Marketing Portfolio",
  description:
    "Content Marketing · Influencer Marketing · Social Media portfolio of Nguyen Phuong Nguyen, Marketing senior at Ton Duc Thang University.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${dmSans.variable} ${pinyonScript.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full bg-cream text-cocoa font-sans antialiased selection:bg-blush selection:text-cocoa">
        {children}
      </body>
    </html>
  );
}
