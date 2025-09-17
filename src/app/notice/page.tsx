"use client";

import React, { useState } from "react";
import {
  Bell,
  ChevronLeft,
  ChevronDown,
  Calendar,
  Phone,
  Clock,
  Menu,
  AlertCircle,
  Info,
  User,
  FileText,
  CreditCard,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function NoticePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const notices = [
    {
      icon: <Calendar className="h-6 w-6 text-blue-600" />,
      title: "예약제 우선 진료",
      content: [
        "저희 병원은 100% 예약제 진료를 시행합니다.",
        "예약을 하시더라도 진료의 특성상 전 후 상담시간이 길어져 대기 시간이 발생할 수 있으니 양해 부탁드립니다.",
        "사전 예약을 하지 않고 당일 방문하여도 진료가 가능할 수 있으나, 대기 시간이 1시간 이상 걸릴 수 있어 예약 후 방문하시는 것이 좋습니다. 예약은 전화 문의나 카카오톡 채널로 부탁드리겠습니다."
      ],
      color: "bg-blue-50 border-blue-200"
    },
    {
      icon: <User className="h-6 w-6 text-green-600" />,
      title: "초진 시 신분증 확인",
      content: [
        "2024년 5월부터 국민건강보험법 개정으로 초진 및 6개월마다 신분증 확인이 의무화되었습니다. 초진 시 본인이라는 신분을 확인할 수 없으면 진료가 불가능합니다. 만일 신분증을 놓고 온 경우, 모바일 신분증으로 대신할 수 있어 참고하시길 바랍니다.",
        "소아 청소년일 경우 미성년자이므로 신분을 확인할 수 있는 가족관계증명서이나 등본을 지참해주시기 바랍니다."
      ],
      color: "bg-green-50 border-green-200"
    },
    {
      icon: <FileText className="h-6 w-6 text-purple-600" />,
      title: "다른 병원 진료",
      content: [
        "과거에 다른 병원에서 진료 받았던 경험이 있으신 경우, 검사 결과지 및 처방전을 가지고 오시면 향후 치료방향을 설정함에 있어 도움이 많이 됩니다."
      ],
      color: "bg-purple-50 border-purple-200"
    },
    {
      icon: <CreditCard className="h-6 w-6 text-orange-600" />,
      title: "초진 비용 안내",
      content: [
        "초진 시 본인부담금은 대체로 4~5만원 이내입니다.",
        "검사료, 약값 등 개인차는 있으나, 대체로 5만원 이내입니다. 만약 비급여 검사(주의집중력 검사. 자율신경계 스트레스 검사 등)가 필요하면 비용은 추가될 수 있습니다."
      ],
      color: "bg-orange-50 border-orange-200"
    },
    {
      icon: <Clock className="h-6 w-6 text-teal-600" />,
      title: "초진 시 병원 10분 일찍 도착 안내",
      content: [
        "처음 오신 분들의 증상과 어려움을 파악하기 위하여 자가보고평가를 진행하게 됩니다. 진료 전 시행하게 되며 결과를 토대로 현재 겪는 어려움을 보다 정확히 파악하여 치료 방향을 설정하고, 추후 재평가를 통해 증상 개선 등을 확인 할 수 있습니다.",
        "따라서 초진의 경우 예약된 진료시간보다 10 ~20분 일찍 내원하셔야 합니다.",
        "또한 예약 시각보다 늦게 도착하는 경우, 면담 시간이 짧아질 수 있습니다. 이는 다음 예약 환자분의 대기 시간을 줄이기 위함이니 양해 부탁드립니다."
      ],
      color: "bg-teal-50 border-teal-200"
    },
    {
      icon: <AlertCircle className="h-6 w-6 text-red-600" />,
      title: "진단서 발급 안내",
      content: [
        "진료과 특성상 초진 당일 진단명이 나오는 서류 발급은 어렵습니다.",
        "눈에 보이지 않는 심리적 어려움을 다루기 때문에, 환자의 상태를 증명해야 하는 과정과 진단을 위한 객관적인 근거가 필요하기 때문입니다."
      ],
      color: "bg-red-50 border-red-200"
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
                className="h-8 w-8 rounded-lg object-contain cursor-pointer"
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
          <div className="flex items-center justify-center gap-3 mb-4">
            <Bell className="h-8 w-8 text-teal-600" />
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">공지사항</h1>
          </div>
          <p className="text-lg text-slate-600">진료 관련 중요한 안내사항을 확인해주세요</p>
        </div>

        {/* 공지사항 목록 */}
        <div className="max-w-4xl mx-auto space-y-6">
          {notices.map((notice, index) => (
            <Card key={index} className={`${notice.color} border-2 hover:shadow-lg transition-shadow duration-300`}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  {notice.icon}
                  {notice.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {notice.content.map((paragraph, idx) => (
                    <p key={idx} className="text-slate-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 연락처 정보 */}
        <div className="max-w-4xl mx-auto mt-12">
          <Card className="bg-gradient-to-r from-teal-50 to-blue-50 border-teal-200">
            <CardContent className="py-8 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Info className="h-6 w-6 text-teal-600" />
                <h3 className="text-2xl font-bold text-slate-900">문의 및 예약</h3>
              </div>
              <div className="space-y-2 text-slate-600 mb-6">
                <p className="flex items-center justify-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>전화: 02-2138-1568</span>
                </p>
                <p className="flex items-center justify-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>서울 은평구 진관동 72 드림스퀘어 4층</span>
                </p>
              </div>
              <Button asChild size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black border-0">
                <a href="https://pf.kakao.com/_ynxoXn" target="_blank" rel="noopener noreferrer">
                  <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 3C6.5 3 2 6.58 2 11c0 2.13 1.05 4.07 2.75 5.48L4 21l4.75-1.5c1.25.5 2.58.75 4 .75 5.5 0 10-3.58 10-8S17.5 3 12 3z"/>
                  </svg>
                  카카오톡 예약하기
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
