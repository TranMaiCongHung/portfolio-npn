import type { Metadata } from "next";
import { Bebas_Neue, Lexend, Pinyon_Script, Montserrat, Bevan } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "vietnamese"],
  variable: "--font-montserrat",
  display: "swap",
});

const lexend = Lexend({
  subsets: ["latin", "vietnamese"],
  variable: "--font-sans",
  display: "swap",
});

const pinyonScript = Pinyon_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});

const bevan = Bevan({
  weight: "400",
  subsets: ["latin", "vietnamese"],
  variable: "--font-bevan",
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
      className={`${bebasNeue.variable} ${montserrat.variable} ${lexend.variable} ${pinyonScript.variable} ${bevan.variable} h-full scroll-smooth`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bevan:ital@0;1&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@700;800;900&family=Lexend:wght@100..900&family=Pinyon+Script&display=swap"
          rel="stylesheet"
        />
        <style
          id="custom-cursor-native-killer"
          dangerouslySetInnerHTML={{
            __html: `
html.has-custom-cursor,
html.has-custom-cursor body,
html.has-custom-cursor *,
body.has-custom-cursor,
body.has-custom-cursor * {
  cursor: none !important;
}
html.has-custom-cursor *::before,
html.has-custom-cursor *::after,
body.has-custom-cursor *::before,
body.has-custom-cursor *::after {
  cursor: none !important;
}
html.has-custom-cursor::-webkit-scrollbar,
html.has-custom-cursor *::-webkit-scrollbar,
body.has-custom-cursor::-webkit-scrollbar,
body.has-custom-cursor *::-webkit-scrollbar {
  cursor: none !important;
}
html.has-custom-cursor::-webkit-scrollbar-thumb,
html.has-custom-cursor *::-webkit-scrollbar-thumb,
body.has-custom-cursor::-webkit-scrollbar-thumb,
body.has-custom-cursor *::-webkit-scrollbar-thumb {
  cursor: none !important;
}
html.has-custom-cursor iframe,
html.has-custom-cursor video,
html.has-custom-cursor embed,
html.has-custom-cursor object {
  cursor: none !important;
}
            `,
          }}
        />
      </head>
      <body className="min-h-full bg-[#FFFFFF] text-[#2E2220] font-sans antialiased selection:bg-[#F2C4C4] selection:text-[#2E2220]">
        {children}
      </body>
    </html>
  );
}
