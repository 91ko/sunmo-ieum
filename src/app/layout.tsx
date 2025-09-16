import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "성모이음 정신건강의학과 | 서울 은평구 정신건강의학과 전문의",
  description: "서울 은평구 진관동에 위치한 성모이음 정신건강의학과입니다. 대표원장 김태형이 환자 중심의 맞춤형 치료를 제공합니다. 우울증, 불안장애, ADHD, 치매 등 다양한 정신건강 문제를 전문적으로 진료합니다.",
  keywords: "성모이음, 정신건강의학과, 서울, 은평구, 진관동, 김태형, 우울증, 불안장애, ADHD, 치매, 심리상담, 약물치료, tDCS",
  authors: [{ name: "성모이음 정신건강의학과" }],
  creator: "성모이음 정신건강의학과",
  publisher: "성모이음 정신건강의학과",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://sungmo-ieum.com'),
  alternates: {
    canonical: '/',
  },
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml', sizes: 'any' },
      { url: '/favicon.ico', sizes: '16x16 32x32 48x48' },
      { url: '/images/logo/logo.png', type: 'image/png', sizes: '192x192' },
      { url: '/images/logo/logo.png', type: 'image/png', sizes: '512x512' }
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    shortcut: '/favicon.ico'
  },
  openGraph: {
    title: "성모이음 정신건강의학과 | 마음과 마음을 이음",
    description: "서울 은평구 진관동에 위치한 성모이음 정신건강의학과입니다. 대표원장 김태형이 환자 중심의 맞춤형 치료를 제공합니다. 우울증, 불안장애, ADHD, 치매 등 다양한 정신건강 문제를 전문적으로 진료합니다.",
    url: 'https://sungmo-ieum.com',
    siteName: '성모이음 정신건강의학과',
    images: [
      {
        url: '/images/og-image.svg',
        width: 1200,
        height: 630,
        alt: '성모이음 정신건강의학과 - 마음과 마음을 이음',
        type: 'image/svg+xml',
      }
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "성모이음 정신건강의학과 | 마음과 마음을 이음",
    description: "서울 은평구 진관동에 위치한 성모이음 정신건강의학과입니다. 대표원장 김태형이 환자 중심의 맞춤형 치료를 제공합니다.",
    images: ['/images/og-image.svg'],
    creator: '@sungmo_ieum',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '-BrZx7BuXdxd67LM38ko4k79tUrug0mBZJMfZmFzJVA',
    other: {
      'naver-site-verification': 'f12e05ad67123adedf836a5a6043003148dca6f1',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" href="/favicon.ico?v=2" sizes="any" />
        <link rel="icon" href="/favicon.svg?v=2" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-icon.png?v=2" />
      </head>
      <body className={inter.variable}>
        {children}
      </body>
    </html>
  );
}