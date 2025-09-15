import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "성모이음 정신건강의학과",
  description: "성모이음 정신건강의학과는 환자 중심의 맞춤형 치료를 제공하는 정신건강의학과 전문 클리닉입니다.",
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/images/logo/logo.png', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    shortcut: '/favicon.ico'
  },
  openGraph: {
    title: "성모이음 정신건강의학과",
    description: "사람과 사람 마음과 마음을 이음 - 성모이음 정신건강의학과",
    images: [
      {
        url: '/images/logo/logo.png',
        width: 1200,
        height: 630,
        alt: '성모이음 정신건강의학과',
      }
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "성모이음 정신건강의학과",
    description: "사람과 사람 마음과 마음을 이음 - 성모이음 정신건강의학과",
    images: ['/images/logo/logo.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.variable}>
        {children}
      </body>
    </html>
  );
}