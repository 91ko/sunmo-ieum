"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronDown,
  Menu,
  Image as ImageIcon,
  MapPin,
  Clock,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function GalleryPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const galleryImages = [
    {
      id: 1,
      src: "/images/gallery/gallery1-exterior.jpg",
      title: "외관",
      description: "깔끔하고 현대적인 병원 외관"
    },
    {
      id: 2,
      src: "/images/gallery/gallery2-waiting.jpg",
      title: "대기실",
      description: "편안하고 쾌적한 대기 공간"
    },
    {
      id: 3,
      src: "/images/gallery/gallery3-treatment.jpg",
      title: "진료실",
      description: "전문적이고 안전한 진료 환경"
    },
    {
      id: 4,
      src: "/images/gallery/gallery4-counseling.jpg",
      title: "상담실",
      description: "사생활이 보호되는 상담 공간"
    },
    {
      id: 5,
      src: "/images/gallery/gallery5-examination.jpg",
      title: "검사실",
      description: "정확한 진단을 위한 검사 시설"
    },
    {
      id: 6,
      src: "/images/gallery/gallery6-rest.jpg",
      title: "휴게실",
      description: "편안한 휴식 공간"
    },
    {
      id: 7,
      src: "/images/gallery/gallery7-corridor.jpg",
      title: "복도",
      description: "깔끔하고 넓은 병원 내부"
    },
    {
      id: 8,
      src: "/images/gallery/gallery8-reception.jpg",
      title: "접수처",
      description: "친절한 안내 서비스"
    },
    {
      id: 9,
      src: "/images/gallery/gallery9-overview.jpg",
      title: "전체 전경",
      description: "성모이음 정신건강의학과 전체 모습"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f6f8fb] to-white text-slate-900">
      {/* 헤더 */}
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-slate-200/60 relative">
        <div className="mx-auto max-w-7xl px-2 sm:px-4 md:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/">
              <img 
                src="/images/logo/logo.png" 
                alt="성모이음 로고" 
                className="h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64 rounded-2xl object-contain cursor-pointer"
              />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-base font-medium">
            <Link href="/" className="hover:text-teal-600 transition">
              Home
            </Link>
            
            <div className="relative group">
              <a className="hover:text-teal-600 transition flex items-center gap-1" href="/about/doctors">
                성모이음 소개
                <ChevronDown className="h-4 w-4" />
              </a>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-slate-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <a href="/about/doctors" className="block px-4 py-2 text-sm hover:bg-teal-50 hover:text-teal-600">의료진 소개</a>
                  <a href="/about/gallery" className="block px-4 py-2 text-sm hover:bg-teal-50 hover:text-teal-600">병원 내부</a>
                  <a href="/about/location" className="block px-4 py-2 text-sm hover:bg-teal-50 hover:text-teal-600">진료시간 및 오시는길</a>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <span className="hover:text-teal-600 transition flex items-center gap-1 cursor-pointer">
                진료내용
                <ChevronDown className="h-4 w-4" />
              </span>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-slate-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <a href="/treatment/subjects" className="block px-4 py-2 text-sm hover:bg-teal-50 hover:text-teal-600">진료과목</a>
                  <a href="/treatment/exam" className="block px-4 py-2 text-sm hover:bg-teal-50 hover:text-teal-600">검사및치료</a>
                  <a href="/treatment/nonbenefit" className="block px-4 py-2 text-sm hover:bg-teal-50 hover:text-teal-600">비급여 내용</a>
                </div>
              </div>
            </div>

            <a href="/notice" className="hover:text-teal-600 transition">
              공지사항
            </a>
          </div>
          
          {/* 모바일 햄버거 메뉴 */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="sm" 
              className="p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
          
          {/* 모바일 메뉴 */}
          {mobileMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-white border-t border-slate-200 shadow-lg z-50 md:hidden">
              <div className="px-4 py-4 space-y-4">
                <Link href="/" className="block font-medium text-slate-900 hover:text-teal-600">
                  Home
                </Link>
                
                <div>
                  <div className="font-medium text-slate-900 mb-2">성모이음 소개</div>
                  <div className="pl-4 space-y-2">
                    <a href="/about/doctors" className="block text-sm text-slate-600 hover:text-teal-600">의료진 소개</a>
                    <a href="/about/gallery" className="block text-sm text-slate-600 hover:text-teal-600">병원 내부</a>
                    <a href="/about/location" className="block text-sm text-slate-600 hover:text-teal-600">진료시간 및 오시는길</a>
                  </div>
                </div>
                
                <div>
                  <div className="font-medium text-slate-900 mb-2">진료내용</div>
                  <div className="pl-4 space-y-2">
                    <a href="/treatment/subjects" className="block text-sm text-slate-600 hover:text-teal-600">진료과목</a>
                    <a href="/treatment/exam" className="block text-sm text-slate-600 hover:text-teal-600">검사및치료</a>
                    <a href="/treatment/nonbenefit" className="block text-sm text-slate-600 hover:text-teal-600">비급여 내용</a>
                  </div>
                </div>

                <a href="/notice" className="block font-medium text-slate-900 hover:text-teal-600">
                  공지사항
                </a>
              </div>
            </div>
          )}
          
          <div className="flex items-center gap-3">
            <Button asChild className="bg-yellow-400 hover:bg-yellow-500 text-black border-0">
              <a href="https://pf.kakao.com/_ynxoXn" target="_blank" rel="noopener noreferrer">
                <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3C6.5 3 2 6.58 2 11c0 2.13 1.05 4.07 2.75 5.48L4 21l4.75-1.5c1.25.5 2.58.75 4 .75 5.5 0 10-3.58 10-8S17.5 3 12 3z"/>
                </svg>
                <span className="hidden sm:inline">카카오톡 상담하기</span>
                <span className="sm:hidden">상담</span>
              </a>
            </Button>
            <Button asChild className="bg-green-500 hover:bg-green-600 text-white border-0">
              <a href="https://blog.naver.com/sungmo-ieum" target="_blank" rel="noopener noreferrer">
                <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span className="hidden sm:inline">네이버 블로그</span>
                <span className="sm:hidden">블로그</span>
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* 메인 콘텐츠 */}
      <main className="mx-auto max-w-7xl px-2 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12">
        {/* 뒤로가기 버튼 */}
        <div className="mb-6">
          <Link href="/about/doctors">
            <Button variant="ghost" className="flex items-center gap-2 text-slate-600 hover:text-teal-600">
              <ChevronLeft className="h-4 w-4" />
              의료진 소개로 돌아가기
            </Button>
          </Link>
        </div>

        {/* 페이지 제목 */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">병원 내부 갤러리</h1>
          <p className="text-lg text-slate-600">깔끔하고 편안한 병원 환경을 미리 확인해보세요</p>
        </div>

        {/* 갤러리 그리드 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-square relative">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <ImageIcon className="h-8 w-8 text-white opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-slate-900 mb-1">{image.title}</h3>
                  <p className="text-sm text-slate-600">{image.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* 병원 정보 */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-teal-50 border-teal-200">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">병원 안내</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-8 w-8 text-teal-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">위치</h3>
                  <p className="text-sm text-slate-600">서울 은평구 진관동 72<br />드림스퀘어 4층</p>
                </div>
                <div className="text-center">
                  <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-teal-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">진료시간</h3>
                  <p className="text-sm text-slate-600">월/화/수/금: 09:00~19:00<br />목요일: 14:00~20:00<br />토요일: 08:30~14:00</p>
                </div>
                <div className="text-center">
                  <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-teal-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">전문진</h3>
                  <p className="text-sm text-slate-600">정신건강의학과 전문의 1명<br />임상심리사 3명</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 상담 예약 CTA */}
        <div className="max-w-4xl mx-auto mt-12">
          <Card className="bg-yellow-50 border-yellow-200">
            <CardContent className="py-8 text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">편안한 병원에서 상담받으세요</h3>
              <p className="text-slate-600 mb-6">깔끔하고 안전한 환경에서 전문적인 치료를 받으실 수 있습니다</p>
              <Button asChild size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black border-0">
                <a href="https://pf.kakao.com/_ynxoXn" target="_blank" rel="noopener noreferrer">
                  <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 3C6.5 3 2 6.58 2 11c0 2.13 1.05 4.07 2.75 5.48L4 21l4.75-1.5c1.25.5 2.58.75 4 .75 5.5 0 10-3.58 10-8S17.5 3 12 3z"/>
                  </svg>
                  카카오톡 상담하기
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* 푸터 */}
      <footer className="border-t bg-white/70 mt-20">
        <div className="mx-auto max-w-7xl px-2 sm:px-4 md:px-6 lg:px-8 py-10 text-sm text-slate-600">
          <div className="flex flex-col sm:flex-row justify-between gap-6">
            <div>
              <div className="font-semibold text-slate-900">성모이음 정신건강의학과</div>
              <div className="mt-1">대표: 김태형 | 사업자등록번호: 772-99-01831</div>
              <div className="mt-1">주소: 서울 은평구 진관동 72 드림스퀘어 4층</div>
              <div className="mt-1">전화: 02-2138-1568 | 이메일: sungmo-ieum@naver.com</div>
            </div>
            <div className="flex items-center gap-3">
              <img 
                src="/images/logo/logo.png" 
                alt="성모이음 로고" 
                className="h-24 w-24 rounded-lg object-contain"
              />
              <div className="text-lg font-semibold text-slate-900">마음과 마음을 이음 성모이음</div>
            </div>
          </div>
          <div className="mt-4">© {new Date().getFullYear()} SeongmoIeum. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
