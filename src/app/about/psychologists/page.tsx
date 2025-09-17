"use client";

import React, { useState } from "react";
import {
  User,
  GraduationCap,
  ChevronLeft,
  ChevronDown,
  Brain,
  BookOpen,
  Menu,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function PsychologistsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const psychologists = [
    {
      name: "김민지 임상심리사",
      title: "임상심리사",
      image: "/images/psychologist1.jpg", // 실제 이미지 경로로 변경 필요
      specialties: ["소아청소년 심리치료", "인지행동치료", "가족치료"],
      education: [
        "○○대학교 심리학과 졸업",
        "○○대학교 대학원 임상심리학 석사",
        "임상심리사 1급 자격증",
        "인지행동치료 전문가 과정 수료"
      ],
      experience: [
        "○○병원 정신건강의학과 임상심리사 (5년)",
        "○○아동발달센터 심리치료사 (3년)",
        "○○교육청 WEE센터 상담심리사 (2년)"
      ]
    },
    {
      name: "박서연 임상심리사",
      title: "임상심리사",
      image: "/images/psychologist2.jpg", // 실제 이미지 경로로 변경 필요
      specialties: ["성인 심리치료", "우울·불안 치료", "트라우마 치료"],
      education: [
        "○○대학교 심리학과 졸업",
        "○○대학교 대학원 임상심리학 석사",
        "임상심리사 1급 자격증",
        "트라우마 치료 전문가 과정 수료"
      ],
      experience: [
        "○○병원 정신건강의학과 임상심리사 (4년)",
        "○○심리상담센터 상담심리사 (3년)",
        "○○대학교 학생상담센터 상담원 (2년)"
      ]
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
          
          <div className="hidden md:flex items-center gap-8 text-sm">
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
                  <a href="
                  <a href="/about/location" className="block px-4 py-2 text-sm hover:bg-teal-50 hover:text-teal-600">오시는길</a>
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
                  <a href="/treatment/exam" className="block px-4 py-2 text-sm hover:bg-teal-50 hover:text-teal-600">검사 및 치료</a>
                  <a href="/treatment/nonbenefit" className="block px-4 py-2 text-sm hover:bg-teal-50 hover:text-teal-600">비급여 내용</a>
                </div>
              </div>
            </div>
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
                    <a href="
                    <a href="/about/location" className="block text-sm text-slate-600 hover:text-teal-600">오시는길</a>
                  </div>
                </div>
                
                <div>
                  <div className="font-medium text-slate-900 mb-2">진료내용</div>
                  <div className="pl-4 space-y-2">
                    <a href="/treatment/exam" className="block text-sm text-slate-600 hover:text-teal-600">검사 및 치료</a>
                    <a href="/treatment/nonbenefit" className="block text-sm text-slate-600 hover:text-teal-600">비급여 내용</a>
                  </div>
                </div>
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
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">임상심리사 소개</h1>
          <p className="text-lg text-slate-600">전문적인 심리치료와 상담을 제공해드립니다</p>
        </div>

        {/* 임상심리사 목록 */}
        <div className="space-y-12">
          {psychologists.map((psychologist, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8 p-8">
                {/* 임상심리사 사진 */}
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="w-80 h-96 bg-slate-100 rounded-2xl shadow-lg flex items-center justify-center">
                      <User className="h-24 w-24 text-slate-400" />
                    </div>
                    <div className="absolute -bottom-4 -right-4 bg-blue-100 p-3 rounded-full">
                      <Brain className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                </div>

                {/* 임상심리사 정보 */}
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-blue-100 text-blue-700">임상심리사</Badge>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">{psychologist.name}</h2>
                    <div className="space-y-1 text-slate-600">
                      <p className="font-medium">{psychologist.title}</p>
                    </div>
                  </div>

                  {/* 전문 분야 */}
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
                      <Star className="h-5 w-5 text-blue-600" />
                      전문 분야
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {psychologist.specialties.map((specialty, idx) => (
                        <Badge key={idx} variant="outline" className="text-blue-700 border-blue-200">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* 학력 */}
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-blue-600" />
                      학력 및 자격
                    </h3>
                    <ul className="space-y-2 text-sm text-slate-600">
                      {psychologist.education.map((edu, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-blue-600 mt-1">•</span>
                          <span>{edu}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 경력 */}
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-blue-600" />
                      주요 경력
                    </h3>
                    <ul className="space-y-2 text-sm text-slate-600">
                      {psychologist.experience.map((exp, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-blue-600 mt-1">•</span>
                          <span>{exp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* 상담 예약 CTA */}
        <div className="max-w-4xl mx-auto mt-12">
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="py-8 text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">전문 심리상담을 받아보세요</h3>
              <p className="text-slate-600 mb-6">경험 많은 임상심리사가 최선의 심리치료를 제공해드립니다</p>
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
