"use client";

import React from "react";
import {
  ChevronLeft,
  ChevronDown,
  Brain,
  User,
  Activity,
  Zap,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function ExamPage() {
  
  const examTypes = [
    {
      icon: Brain,
      title: "종합심리검사",
      description: "지능, 사고 및 지각, 정서, 기질, 양육 태도 등 여러 영역을 다각도로 평가하는 검사",
      features: [
        "정신건강임상심리사 1급 임상심리사 직접 진행",
        "정신건강의학과 전문의가 결과 설명",
        "정확한 진단 및 치료 방향 설정",
        "보다 깊은 심리적 이해가 필요한 경우 활용"
      ],
      image: "/images/exam/psychology-test.jpg" // 사진 넣을 자리
    },
    {
      icon: User,
      title: "노인인지기능 검사",
      description: "경도인지장애나 치매 등 인지기능 저하를 평가하는 검사",
      features: [
        "기분장애에 의한 가성치매와 감별",
        "필요시 기분장애에 대한 평가도 함께 실시",
        "보호자 면담 병행으로 정확한 병력 파악",
        "치매 조기 발견 및 예방"
      ],
      image: "/images/exam/cognitive-test.jpg" // 사진 넣을 자리
    },
    {
      icon: Activity,
      title: "주의집중력 검사 (CAT)",
      description: "주의력, 충동조절 능력, 과제 수행 지속력 등을 객관적으로 평가",
      features: [
        "ADHD 진단",
        "치료 효과 모니터링",
        "객관적인 주의력 평가"
      ],
      image: "/images/exam/attention-test.jpg" // 사진 넣을 자리
    },
    {
      icon: Zap,
      title: "정량뇌파검사(QEEG)",
      description: "뇌파를 정량적으로 분석하여 뇌의 기능을 객관적으로 평가하는 검사",
      features: [
        "과학적이고 객관적인 뇌의 기능 분석 및 특성 이해",
        "주의력 저하, 불안, 우울, 수면장애 평가",
        "치료 보조 자료로 활용"
      ],
      image: "/images/exam/eeg-test.jpg" // 사진 넣을 자리
    }
  ];

  const treatmentMethods = [
    {
      icon: Heart,
      title: "심리상담치료",
      description: "개인의 심리적 어려움을 탐색하고 건강한 대처방식을 모색하는 치료",
      process: [
        "개인의 감정, 사고, 행동, 관계의 어려움 탐색",
        "삶의 어려움에 대한 이해와 건강한 대처방식 모색",
        "스스로를 이해하고 감정 조절 능력 향상",
        "문제 해결 능력을 키우며 삶의 균형 회복"
      ],
      image: "/images/exam/counseling.jpg" // 사진 넣을 자리
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
                  <Link href="/about/doctors" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">
                    의료진 소개
                  </Link>
                  <Link href="/about/gallery" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">
                    병원 둘러보기
                  </Link>
                  <Link href="/about/location" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">
                    진료시간 및 오시는길
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <a className="hover:text-teal-600 transition flex items-center gap-1" href="/treatment/subjects">
                진료내용
                <ChevronDown className="h-4 w-4" />
              </a>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-slate-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link href="/treatment/subjects" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">
                    진료과목
                  </Link>
                  <Link href="/treatment/exam" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">
                    검사안내
                  </Link>
                  <Link href="/treatment/nonbenefit" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">
                    비급여 진료
                  </Link>
                </div>
              </div>
            </div>
            
            <Link href="/notice" className="hover:text-teal-600 transition">
              공지사항
            </Link>
          </div>
          
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
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">치료 및 검사</h1>
          <p className="text-lg text-slate-600">전문적인 검사와 치료로 마음을 치료합니다</p>
        </div>

        {/* 검사 안내 */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">검사 안내</h2>
          <div className="grid grid-cols-1 gap-8">
            {examTypes.map((exam, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <div className="flex flex-col lg:flex-row">
                  {/* 사진 넣을 자리 */}
                  <div className="lg:w-1/2 h-64 lg:h-auto bg-slate-100 flex items-center justify-center">
                    <div className="text-slate-400 text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-slate-200 rounded-lg flex items-center justify-center">
                        <exam.icon className="h-8 w-8" />
                      </div>
                      <p className="text-sm">사진 넣을 자리</p>
                      <p className="text-xs">{exam.image}</p>
                    </div>
                  </div>
                  
                  <div className="lg:w-1/2 p-6">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-xl font-bold text-slate-900 mb-2">{exam.title}</CardTitle>
                      <p className="text-slate-600 text-sm">{exam.description}</p>
                    </CardHeader>
                    
                    <CardContent className="p-0">
                      <div className="space-y-2">
                        {exam.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-slate-700 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* 치료 방법 */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">치료 방법</h2>
          <div className="grid grid-cols-1 gap-8">
            {treatmentMethods.map((treatment, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <div className="flex flex-col lg:flex-row">
                  {/* 사진 넣을 자리 */}
                  <div className="lg:w-1/2 h-64 lg:h-auto bg-slate-100 flex items-center justify-center">
                    <div className="text-slate-400 text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-slate-200 rounded-lg flex items-center justify-center">
                        <treatment.icon className="h-8 w-8" />
                      </div>
                      <p className="text-sm">사진 넣을 자리</p>
                      <p className="text-xs">{treatment.image}</p>
                    </div>
                  </div>
                  
                  <div className="lg:w-1/2 p-6">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-xl font-bold text-slate-900 mb-2">{treatment.title}</CardTitle>
                      <p className="text-slate-600 text-sm">{treatment.description}</p>
                    </CardHeader>
                    
                    <CardContent className="p-0">
                      <div className="space-y-2">
                        {treatment.process.map((step, stepIndex) => (
                          <div key={stepIndex} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-slate-700 text-sm">{step}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* 예약 안내 */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-teal-50 to-blue-50 border-teal-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">검사 및 치료 예약 안내</h3>
              <p className="text-slate-600 mb-6">
                전문의가 직접 검사하고 치료하며, 개인별 맞춤 치료를 제공합니다.<br />
                예약은 전화 또는 카카오톡으로 문의해주세요.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-teal-600 hover:bg-teal-700 text-white">
                  <a href="tel:02-2138-1568">
                    <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    전화 예약
                  </a>
                </Button>
                <Button asChild className="bg-yellow-400 hover:bg-yellow-500 text-black border-0">
                  <a href="https://pf.kakao.com/_ynxoXn" target="_blank" rel="noopener noreferrer">
                    <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 3C6.5 3 2 6.58 2 11c0 2.13 1.05 4.07 2.75 5.48L4 21l4.75-1.5c1.25.5 2.58.75 4 .75 5.5 0 10-3.58 10-8S17.5 3 12 3z"/>
                    </svg>
                    카카오톡 상담
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* 푸터 */}
      <footer className="border-t bg-white/70">
        <div className="mx-auto max-w-7xl px-2 sm:px-4 md:px-6 lg:px-8 py-8">
          <div className="text-center text-slate-600">
            <p className="mb-2">성모이음 정신건강의학과</p>
            <p className="text-sm">서울 은평구 진관동 72 드림스퀘어 4층 | 02-2138-1568</p>
          </div>
        </div>
      </footer>
    </div>
  );
}