"use client";

import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronDown,
  Menu,
  Info,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function NonBenefitPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const documentFees = [
    {
      code: "PDZ120000",
      name: "소견서",
      price: "10,000원",
      note: "-"
    },
    {
      code: "PDZ010000",
      name: "진단서",
      price: "20,000원",
      note: "-"
    },
    {
      code: "PDE010001",
      name: "영문진단서",
      price: "30,000원",
      note: "-"
    },
    {
      code: "PDZ080000",
      name: "병무용진단서",
      price: "20,000원",
      note: "6개월 이상 정기적인 진료 필요"
    },
    {
      code: "PDZ010002",
      name: "근로능력평가용진단서",
      price: "10,000원",
      note: "-"
    },
    {
      code: "PDZ90007",
      name: "진료확인서(진단명 기재 없음)",
      price: "3,000원",
      note: "-"
    },
    {
      code: "PDZ070002",
      name: "장애정도 심사용 진단서",
      price: "40,000원",
      note: "-"
    },
    {
      code: "PDZ110101",
      name: "진료기록사본 (1~5매, 장당)",
      price: "1,000원",
      note: "-"
    },
    {
      code: "PDZ110102",
      name: "진료기록사본 (6매부터, 장당)",
      price: "100원",
      note: "-"
    }
  ];

  const examFees = [
    {
      code: "QZ962",
      name: "tDCS(직류 뇌자극술)",
      price: "20,000원/1회",
      note: "-"
    },
    {
      code: "FY894",
      name: "HRV(스트레스 검사)",
      price: "20,000원",
      note: "-"
    },
    {
      code: "FZ690",
      name: "CAT(주의력 검사)",
      price: "100,000~120,000원",
      note: "내용 및 나이에 따라 비용 달라짐"
    },
    {
      code: "FY739",
      name: "TCI(기질 성격 검사)",
      price: "100,000원",
      note: "-"
    },
    {
      code: "FY705",
      name: "신경증 불안 평가",
      price: "70,000원",
      note: "-"
    },
    {
      code: "FY713",
      name: "신경증 우울 평가",
      price: "70,000원",
      note: "-"
    },
    {
      code: "FY701",
      name: "불안 민감 척도",
      price: "70,000원",
      note: "-"
    }
  ];

  const therapyFees = [
    {
      code: "NZ009",
      name: "기타행동치료 - 신경발달중재치료",
      price: "5,000~200,000원",
      note: "시간과 내용에 따라 비용 달라짐"
    },
    {
      code: "NZ010",
      name: "기타행동치료 - 심리적 재활중재치료",
      price: "5,000~200,000원",
      note: "시간과 내용에 따라 비용 달라짐"
    },
    {
      code: "NZ011",
      name: "정신분석적 정신치료",
      price: "100,000~200,000원",
      note: "시간과 내용에 따라 비용 달라짐"
    },
    {
      code: "FZ692",
      name: "교육진단검사",
      price: "50,000~200,000원",
      note: "시간과 내용에 따라 비용 달라짐"
    },
    {
      code: "FZ111",
      name: "한국판 K-SADS-PL(선별 면담)",
      price: "100,000~200,000원",
      note: "시간과 내용에 따라 비용 달라짐"
    },
    {
      code: "-",
      name: "양육 스트레스 검사",
      price: "35,000~50,000원",
      note: "시간과 내용에 따라 비용 달라짐"
    },
    {
      code: "-",
      name: "부모 양육 태도 검사",
      price: "35,000~50,000원",
      note: "시간과 내용에 따라 비용 달라짐"
    }
  ];

  const medicationFees = [
    {
      name: "하이라제정",
      price: "100원",
      note: "-"
    },
    {
      name: "서카딘정",
      price: "1,200원",
      note: "-"
    },
    {
      name: "슬리나이토 1mg",
      price: "2,000원",
      note: "-"
    },
    {
      name: "슬리나이토 5mg",
      price: "3,000원",
      note: "-"
    },
    {
      name: "트레스탄캡슐",
      price: "500원",
      note: "-"
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
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">비급여 진료</h1>
          <p className="text-lg text-slate-600">건강보험 적용이 되지 않는 전문적인 검사와 치료 서비스</p>
        </div>

        {/* 안내 메시지 */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <Info className="h-6 w-6 text-blue-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">비급여 진료 안내</h3>
                  <p className="text-blue-800 text-sm">
                    비급여 진료는 건강보험에서 보장하지 않는 전문적인 검사와 치료 서비스입니다. 
                    정확한 진단과 효과적인 치료를 위해 필요에 따라 제공되며, 
                    모든 비용은 환자 본인이 부담하셔야 합니다.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 진단서/서류 */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">진단서/서류</h2>
            <p className="text-slate-600">각종 진단서 및 서류 발급 비용</p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-slate-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">코드</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">명칭</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">비용</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">특이사항</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {documentFees.map((doc, index) => (
                        <tr key={index} className="hover:bg-slate-50">
                          <td className="px-4 py-3 text-sm text-slate-600 font-mono">{doc.code}</td>
                          <td className="px-4 py-3 text-sm text-slate-900">{doc.name}</td>
                          <td className="px-4 py-3 text-sm font-semibold text-green-600">{doc.price}</td>
                          <td className="px-4 py-3 text-sm text-slate-600">{doc.note}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 검사 비용 */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">검사 비용</h2>
            <p className="text-slate-600">다양한 심리검사 및 진단 검사 비용</p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-slate-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">코드</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">명칭</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">비용</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">특이사항</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {examFees.map((exam, index) => (
                        <tr key={index} className="hover:bg-slate-50">
                          <td className="px-4 py-3 text-sm text-slate-600 font-mono">{exam.code}</td>
                          <td className="px-4 py-3 text-sm text-slate-900">{exam.name}</td>
                          <td className="px-4 py-3 text-sm font-semibold text-green-600">{exam.price}</td>
                          <td className="px-4 py-3 text-sm text-slate-600">{exam.note}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 심리 치료 및 검사 비용 */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">심리 치료 및 검사 비용</h2>
            <p className="text-slate-600">전문적인 심리치료 및 상담 서비스 비용</p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-slate-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">코드</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">명칭</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">비용</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">특이사항</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {therapyFees.map((therapy, index) => (
                        <tr key={index} className="hover:bg-slate-50">
                          <td className="px-4 py-3 text-sm text-slate-600 font-mono">{therapy.code}</td>
                          <td className="px-4 py-3 text-sm text-slate-900">{therapy.name}</td>
                          <td className="px-4 py-3 text-sm font-semibold text-green-600">{therapy.price}</td>
                          <td className="px-4 py-3 text-sm text-slate-600">{therapy.note}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 약제비 */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">약제비</h2>
            <p className="text-slate-600">처방 약물 비용 안내</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-slate-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">명칭</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">비용</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">특이사항</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {medicationFees.map((med, index) => (
                        <tr key={index} className="hover:bg-slate-50">
                          <td className="px-4 py-3 text-sm text-slate-900">{med.name}</td>
                          <td className="px-4 py-3 text-sm font-semibold text-green-600">{med.price}</td>
                          <td className="px-4 py-3 text-sm text-slate-600">{med.note}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>


        {/* 상담 예약 CTA */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-teal-50 border-teal-200">
            <CardContent className="py-8 text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">비급여 진료 상담</h3>
              <p className="text-slate-600 mb-6">필요한 검사나 치료에 대해 자세히 상담받으세요</p>
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
