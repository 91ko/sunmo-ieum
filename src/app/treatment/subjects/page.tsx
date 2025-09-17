"use client";

import React, { useState } from "react";
import {
  User,
  ChevronLeft,
  ChevronDown,
  Brain,
  Menu,
  Baby,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function TreatmentSubjectsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const subjects = [
    {
      title: "성인 정신건강",
      icon: <User className="h-8 w-8 text-blue-600" />,
      image: "/images/subjects/adult.jpg",
      description: "성인을 대상으로 한 정신건강 진료",
      conditions: [
        "우울증",
        "불안장애",
        "양극성 장애",
        "조현병",
        "강박장애",
        "외상후 스트레스 장애",
        "수면장애",
        "적응장애"
      ]
    },
    {
      title: "소아청소년 정신건강",
      icon: <Baby className="h-8 w-8 text-green-600" />,
      image: "/images/subjects/child.jpg",
      description: "소아청소년을 대상으로 한 정신건강 진료",
      conditions: [
        "ADHD (주의력결핍 과잉행동장애)",
        "자폐스펙트럼 장애",
        "학습장애",
        "틱장애",
        "소아우울증",
        "소아불안장애",
        "행동장애",
        "발달지연"
      ]
    },
    {
      title: "노인 정신건강",
      icon: <Clock className="h-8 w-8 text-purple-600" />,
      image: "/images/subjects/elderly.jpg",
      description: "노인을 대상으로 한 정신건강 진료",
      conditions: [
        "치매",
        "경도인지장애",
        "노인우울증",
        "노인불안장애",
        "수면장애",
        "망상장애",
        "환각장애",
        "인지기능 저하"
      ]
    },
    {
      title: "기타 정신건강",
      icon: <Brain className="h-8 w-8 text-orange-600" />,
      image: "/images/subjects/other.jpg",
      description: "기타 정신건강 관련 진료",
      conditions: [
        "중독",
        "섭식장애",
        "성격장애",
        "신체화장애",
        "해리장애",
        "성기능장애",
        "정신분열증",
        "기분장애"
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
                  <a href="/treatment/exam" className="block px-4 py-2 text-sm hover:bg-teal-50 hover:text-teal-600">검사 및 치료</a>
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
                    <a href="/treatment/exam" className="block text-sm text-slate-600 hover:text-teal-600">검사 및 치료</a>
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
          </div>
        </div>
      </header>

      {/* 메인 콘텐츠 */}
      <main className="mx-auto max-w-7xl px-2 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12">
        {/* 뒤로가기 버튼 */}
        <div className="mb-6">
          <Link href="/">
            <Button variant="ghost" className="flex items-center gap-2 text-slate-600 hover:text-teal-600">
              <ChevronLeft className="h-4 w-4" />
              홈으로 돌아가기
            </Button>
          </Link>
        </div>

        {/* 페이지 제목 */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">진료과목</h1>
          <p className="text-lg text-slate-600">전문적인 정신건강 진료를 제공해드립니다</p>
        </div>

        {/* 진료과목 목록 */}
        <div className="grid md:grid-cols-2 gap-8">
          {subjects.map((subject, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <img
                  src={subject.image}
                  alt={subject.title}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <div className="text-center text-white">
                    {subject.icon}
                    <h3 className="text-xl font-bold mt-2">{subject.title}</h3>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <p className="text-slate-600 mb-4">{subject.description}</p>
                
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">주요 진료 질환</h4>
                  <div className="flex flex-wrap gap-2">
                    {subject.conditions.map((condition, idx) => (
                      <Badge key={idx} variant="outline" className="text-slate-700 border-slate-300">
                        {condition}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 상담 예약 CTA */}
        <div className="max-w-4xl mx-auto mt-12">
          <Card className="bg-teal-50 border-teal-200">
            <CardContent className="py-8 text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">전문 진료를 받아보세요</h3>
              <p className="text-slate-600 mb-6">경험 많은 전문의가 최선의 치료를 제공해드립니다</p>
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
