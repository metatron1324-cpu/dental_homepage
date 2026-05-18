import type { Metadata } from "next";
import { Noto_Sans_KR, Gaegu, Playfair_Display, Noto_Serif_KR } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RightSidebar from "@/components/RightSidebar";
import StructuredData from "@/components/StructuredData";
import { CLINIC } from "@/lib/clinic";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

const notoKr = Noto_Sans_KR({
  variable: "--font-noto-kr",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const gaegu = Gaegu({
  variable: "--font-gaegu",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
});

const notoSerif = Noto_Serif_KR({
  variable: "--font-noto-serif-kr",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${CLINIC.name} - 친근한 우리 동네 치과`,
    template: `%s | ${CLINIC.name}`,
  },
  description: `${CLINIC.name}은(는) ${CLINIC.address}에 위치한 치과입니다. ${CLINIC.doctor.title} ${CLINIC.doctor.name}이 환자분께 친근하고 쉽게 다가가는 진료를 약속드립니다.`,
  keywords: [
    CLINIC.name,
    "천안 치과",
    "불당동 치과",
    "임플란트",
    "치아교정",
    "충치치료",
    "스케일링",
    "어린이치과",
    "예방치과",
  ],
  authors: [{ name: CLINIC.doctor.name }],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: CLINIC.name,
    title: `${CLINIC.name} - 친근한 우리 동네 치과`,
    description: CLINIC.tagline,
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: CLINIC.name,
    description: CLINIC.tagline,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${notoKr.variable} ${gaegu.variable} ${playfair.variable} ${notoSerif.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-cream-50 text-warm">
        <StructuredData />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <RightSidebar />
      </body>
    </html>
  );
}
