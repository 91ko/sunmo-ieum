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