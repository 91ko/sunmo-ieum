"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronDown,
  Menu,
  Stethoscope,
  Brain,
  Heart,
  Eye,
  Activity,
  FileText,
  Clock,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function ExamPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const examTypes = [
    {
      icon: Brain,
      title: "종합심리검사 (Full Battery)",
      description: "지능, 정서 상태, 성격, 사고 방식, 지각 기능 등 여러 심리 영역을 다각도로 평가하는 정밀검사",
      details: [
        "정신건강임상심리사 1급 자격 전문가 직접 진행",
        "정신건강의학과 전문의가 결과 상세 설명",
        "정확한 진단 및 치료 방향 설정",
        "상담 및 약물치료 여부 결정의 중요 자료",
        "보다 깊은 심리적 이해가 필요한 경우 활용"
      ],
      note: "검사 후 정신건강의학과 전문의가 결과를 자세히 설명해드립니다"
    },
    {
      icon: Brain,
      title: "인지기능검사",
      description: "경도인지장애나 치매 등 인지기능 저하를 평가하는 검사",
      details: [
        "기분장애에 의한 가성치매와의 감별",
        "정서 평가도 함께 실시",
        "보호자 면담 병행으로 정확한 병력 파악",
        "중·노년층 환자분들의 인지 변화 평가",
        "치매 조기 발견 및 예방"
      ],
      note: "중·노년층 환자분들의 인지 변화가 우려되는 경우 필수적으로 권유되는 검사입니다"
    },
    {
      icon: Activity,
      title: "주의집중력 검사 (CAT)",
      description: "집중력, 충동조절 능력, 과제 수행 지속력 등을 객관적으로 측정",
      details: [
        "ADHD나 학습 관련 문제 진단",
        "소아청소년에게 효과적으로 활용",
        "일정 간격으로 재검사 가능",
        "치료 효과 확인 및 모니터링",
        "객관적이고 정확한 측정"
      ],
      note: "특히 ADHD나 학습 관련 문제로 어려움을 겪는 소아청소년에게 효과적으로 활용됩니다"
    },
    {
      icon: Heart,
      title: "스트레스 검사 (HRV)",
      description: "심박변이도를 통한 자율신경계의 균형 상태 평가",
      details: [
        "심장 박동 간격의 미세한 변화 측정",
        "자율신경계 기능 저하 확인",
        "만성 피로, 수면장애, 불안 증상 평가",
        "회복 전략 수립에 도움",
        "객관적인 스트레스 수준 측정"
      ],
      note: "스트레스가 심하거나 만성 피로, 수면장애, 불안 증상을 호소하는 경우에 유용합니다"
    },
    {
      icon: Eye,
      title: "정량 뇌파검사 (QEEG)",
      description: "뇌파를 정량적으로 분석하여 뇌의 활동 패턴을 수치와 시각 자료로 확인",
      details: [
        "뇌의 기능적 특성 이해",
        "주의력 저하, 불안, 우울, 수면장애 평가",
        "개인 맞춤형 약물 및 치료법 결정",
        "치료 보조 자료로 활용",
        "과학적이고 객관적인 뇌 기능 분석"
      ],
      note: "개인 맞춤형 약물 및 치료법 결정에 보조 자료로 활용됩니다"
    }
  ];

  const treatmentMethods = [
    {
      icon: Heart,
      title: "심리상담치료",
      description: "개인의 감정, 사고, 행동, 관계의 어려움 등을 정신건강의학과 전문의와 함께 탐색하며, 삶의 어려움에 대한 이해와 건강한 대처방식을 함께 찾아가는 과정",
      benefits: ["감정 조절 능력 향상", "문제 해결 능력 개발", "삶의 균형 회복", "자기 이해 증진"],
      details: [
        "개인의 감정, 사고, 행동, 관계의 어려움 탐색",
        "정신건강의학과 전문의와 함께 진행",
        "삶의 어려움에 대한 이해와 건강한 대처방식 모색",
        "스스로를 이해하고 감정 조절 능력 향상",
        "문제 해결 능력을 키우며 삶의 균형 회복"
      ]
    },
    {
      icon: Shield,
      title: "약물치료",
      description: "각 개인의 증상과 신체적 특성을 고려하여 적절한 약물을 신중하게 선택하고, 치료 경과를 지속적으로 관찰하며 조절하는 방식",
      benefits: ["우울증", "불안장애", "ADHD", "수면장애"],
      details: [
        "개인의 증상과 신체적 특성 고려한 약물 선택",
        "항우울제, 항불안제 등을 통한 신경전달물질 조절",
        "증상 완화 및 재발 예방",
        "부작용 최소화를 위한 적은 용량으로 시작",
        "증상 변화에 따른 점진적 조절"
      ]
    },
    {
      icon: Activity,
      title: "tDCS (경두개직류자극치료)",
      description: "미세한 직류 전류를 뇌의 특정 부위에 전달하여 뇌신경의 활동을 조절하는 비침습적 치료 방법",
      benefits: ["우울증", "불안", "주의력 저하", "인지 기능 저하"],
      details: [
        "미세한 직류 전류를 뇌의 특정 부위에 전달",
        "뇌신경의 활동을 조절하는 비침습적 치료",
        "안전성과 효과가 과학적으로 입증",
        "약물 치료 대체 또는 보완 치료",
        "상담이나 약물치료와 병행 시 효과 증대"
      ]
    },
    {
      icon: Brain,
      title: "부모교육",
      description: "아이의 문제 행동이나 정서적 어려움에 대한 가정 내 양육 환경과의 관련성을 이해하고, 긍정적 상호작용을 늘릴 수 있는 구체적인 방법들을 찾아가는 과정",
      benefits: ["자녀 심리 상태 이해", "적절한 양육 태도 개발", "긍정적 상호작용 증진", "문제 행동 개선"],
      details: [
        "자녀의 심리 상태를 이해하는 과정",
        "상황에 맞는 반응과 양육 태도 개발",
        "자녀의 행동 이면에 숨겨진 감정과 욕구 파악",
        "긍정적 상호작용을 늘릴 수 있는 구체적인 방법 모색",
        "의료진과 함께 찾아가는 양육 개선 과정"
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
                <a href="/" className="block font-medium text-slate-900 hover:text-teal-600">
                  Home
                </a>
                
                <div>
                  <div className="font-medium text-slate-900 mb-2">성모이음 소개</div>
                  <div className="pl-4 space-y-2">
                    <a href="/about/doctors" className="block text-sm text-slate-600 hover:text-teal-600">의료진 소개</a>
                    <a href="/about/gallery" className="block text-sm text-slate-600 hover:text-teal-600">병원 내부</a>
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
          <Link href="/">
            <Button variant="ghost" className="flex items-center gap-2 text-slate-600 hover:text-teal-600">
              <ChevronLeft className="h-4 w-4" />
              홈으로 돌아가기
            </Button>
          </Link>
        </div>

        {/* 페이지 제목 */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">검사 및 치료</h1>
          <p className="text-lg text-slate-600">정확한 진단과 효과적인 치료를 위한 전문적인 검사와 치료법</p>
        </div>

        {/* 검사 종류 */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">심리검사</h2>
            <p className="text-slate-600">다양한 심리검사를 통한 정확한 진단</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {examTypes.map((exam, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-teal-100 p-2 rounded-lg">
                        <exam.icon className="h-6 w-6 text-teal-600" />
                      </div>
                      <CardTitle className="text-xl">{exam.title}</CardTitle>
                    </div>
                    <p className="text-slate-600">{exam.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium text-slate-900 mb-2">주요 특징:</h4>
                        <ul className="space-y-1">
                          {exam.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-2"></div>
                              <span className="text-sm text-slate-600">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {exam.note && (
                        <div className="bg-teal-50 p-3 rounded-lg">
                          <p className="text-sm text-teal-800">{exam.note}</p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 치료 방법 */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">치료 방법</h2>
            <p className="text-slate-600">개인별 맞춤형 치료 프로그램</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {treatmentMethods.map((treatment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-blue-100 p-2 rounded-lg">
                        <treatment.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <CardTitle className="text-xl">{treatment.title}</CardTitle>
                    </div>
                    <p className="text-slate-600">{treatment.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium text-slate-900 mb-2">주요 효과:</h4>
                        <div className="flex flex-wrap gap-2">
                          {treatment.benefits.map((benefit, idx) => (
                            <Badge key={idx} variant="outline" className="text-blue-700 border-blue-200">
                              {benefit}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-900 mb-2">치료 과정:</h4>
                        <ul className="space-y-1">
                          {treatment.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></div>
                              <span className="text-sm text-slate-600">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 치료 과정 */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">치료 과정</h2>
            <p className="text-slate-600">체계적이고 단계적인 치료 과정</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FileText className="h-8 w-8 text-teal-600" />
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2">1단계</h3>
                    <p className="text-sm text-slate-600">상담 및<br />초기 평가</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Stethoscope className="h-8 w-8 text-teal-600" />
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2">2단계</h3>
                    <p className="text-sm text-slate-600">심리검사 및<br />진단</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Brain className="h-8 w-8 text-teal-600" />
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2">3단계</h3>
                    <p className="text-sm text-slate-600">치료 계획<br />수립</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="h-8 w-8 text-teal-600" />
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2">4단계</h3>
                    <p className="text-sm text-slate-600">치료 진행 및<br />경과 관리</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 상담 예약 CTA */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-teal-50 border-teal-200">
            <CardContent className="py-8 text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">전문적인 검사와 치료를 받아보세요</h3>
              <p className="text-slate-600 mb-6">정확한 진단과 효과적인 치료로 건강한 마음을 되찾으세요</p>
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
