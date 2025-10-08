"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function TreatmentSubjectsPage() {

  const subjects = [
    {
      title: "소아청소년 클리닉",
      image: "/images/subjects/소아청소년.png",
      conditions: [
        "발달지연",
        "지적장애/자폐스펙트럼장애",
        "ADHD",
        "틱/뚜렛장애",
        "불안장애",
        "청소년 우울증",
        "신체화장애",
        "학습 부진",
        "또래 관계 문제",
        "부모자녀 관계 문제"
      ]
    },
    {
      title: "성인클리닉",
      image: "/images/subjects/성인클리닉.png",
      conditions: [
        "우울증",
        "불안장애",
        "수면장애",
        "강박장애",
        "공황장애",
        "성인 ADHD",
        "PTSD",
        "사회공포증",
        "신체화장애",
        "조현병",
        "양극성장애",
        "중독"
      ]
    },
    {
      title: "노인클리닉",
      image: "/images/subjects/노인클리닉.png",
      conditions: [
        "노인 우울증",
        "건망증",
        "경도인지장애",
        "치매"
      ]
    },
    {
      title: "기타진료",
      image: "/images/subjects/기타진료.png",
      conditions: [
        "비만",
        "경두개직류자극치료"
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
          <Link href="/">
            <Button variant="ghost" className="flex items-center gap-2 text-slate-600 hover:text-teal-600">
              <ChevronLeft className="h-4 w-4" />
              홈으로 돌아가기
            </Button>
          </Link>
        </div>

        {/* 페이지 제목 */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">진료과목</h1>
          <p className="text-lg text-slate-600">전문적인 진료로 마음을 치료합니다</p>
        </motion.div>

        {/* 진료과목 그리드 */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {subjects.map((subject, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <div className="relative">
                <img 
                  src={subject.image} 
                  alt={subject.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold mb-2">{subject.title}</h3>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="space-y-3">
                  {subject.conditions.map((condition, conditionIndex) => (
                    <div key={conditionIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-teal-400 rounded-full flex-shrink-0"></div>
                      <span className="text-slate-700">{condition}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* 예약 안내 */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-teal-50 to-blue-50 border-teal-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">진료 예약 안내</h3>
              <p className="text-slate-600 mb-6">
                전문의가 직접 진료하며, 개인별 맞춤 치료를 제공합니다.<br />
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
        </motion.div>
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