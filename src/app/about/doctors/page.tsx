"use client";

import React, { useState } from "react";
import {
  User,
  Award,
  GraduationCap,
  Users,
  ChevronLeft,
  ChevronDown,
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function DoctorsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('doctor');
  
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
                    <a href="/about/location" className="block text-sm text-slate-600 hover:text-teal-600">진료시간 및 오시는길</a>
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
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">의료진 소개</h1>
          <p className="text-lg text-slate-600">전문적이고 따뜻한 마음으로 치료해드립니다</p>
        </div>

        {/* 탭 메뉴 */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex justify-center">
            <div className="bg-slate-100 p-1 rounded-lg">
              <button
                onClick={() => setActiveTab('doctor')}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                  activeTab === 'doctor'
                    ? 'bg-white text-teal-600 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <User className="inline-block mr-2 h-4 w-4" />
                대표원장
              </button>
                     <button
                       onClick={() => setActiveTab('psychologists')}
                       className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                         activeTab === 'psychologists'
                           ? 'bg-white text-blue-600 shadow-sm'
                           : 'text-slate-600 hover:text-slate-900'
                       }`}
                     >
                       <Users className="inline-block mr-2 h-4 w-4" />
                       임상심리사 3명
                     </button>
            </div>
          </div>
        </div>

        {/* 탭 콘텐츠 */}
        {activeTab === 'doctor' && (
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8 p-8">
                {/* 의료진 사진 */}
                <div className="flex justify-center">
                  <div className="relative">
                    <img 
                      src="/images/doctor.jpg" 
                      alt="김태형 원장" 
                      className="w-60 h-72 object-cover object-top rounded-2xl shadow-lg"
                    />
                    <div className="absolute -bottom-4 -right-4 bg-teal-100 p-3 rounded-full">
                      <User className="h-8 w-8 text-teal-600" />
                    </div>
                  </div>
                </div>

                {/* 의료진 정보 */}
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-teal-100 text-teal-700">정신과전문의</Badge>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">김태형 원장</h2>
                    <div className="space-y-1 text-slate-600">
                      <p className="font-medium">정신건강의학과 전문의</p>
                      <p className="font-medium">소아청소년 정신건강의학과 전문의</p>
                    </div>
                  </div>

                  {/* 주요 약력 */}
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-teal-600" />
                      주요 약력
                    </h3>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li className="flex items-start gap-2">
                        <span className="text-teal-600 mt-1">•</span>
                        <span>가톨릭대학교 의과대학 정신건강의학교실 외래교수</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-600 mt-1">•</span>
                        <span>가톨릭대학교 은평성모병원 정신건강의학과 임상진료조교수</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-600 mt-1">•</span>
                        <span>가톨릭대학교 은평성모병원 정신건강의학과 전임의</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-600 mt-1">•</span>
                        <span>가톨릭중앙의료원 정신건강의학과 레지던트 수료</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-600 mt-1">•</span>
                        <span>가톨릭중앙의료원 인턴 수료</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* 현재 활동 */}
        {activeTab === 'doctor' && (
          <div className="max-w-4xl mx-auto mt-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Users className="h-5 w-5 text-teal-600" />
                  현재 활동
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>현) 대한신경정신의학회 중독특임 간사</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>현) 교육부 응급심리지원 자문의</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>현) 서울특별시 서부교육지원청 WEE센터 자문의</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>현) 마약류 안전사용 전문가 협의체 위원</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>현) 한국도핑방지위원회 재재위원회 위원</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>현) 서대문 아이존 자문의</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        )}

        {/* 학회 및 자격 */}
        {activeTab === 'doctor' && (
          <div className="max-w-4xl mx-auto mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Award className="h-5 w-5 text-teal-600" />
                  학회 및 자격
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>대한신경정신의학회 정회원, 지도전문의</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>한국중독정신의학회 평생회원</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>대한소아청소년정신의학회 정회원</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>대한청소년정신의학회 평생회원</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>한국학교정신건강의학회 평생회원</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>대한아동정신치료의학회 정회원</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>대한아동정신치료의학회 소아청소년 정신치료 심화과정 수료</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>대한불안의학회 불안장애 심층치료 과정 수료</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>치매진료의사 전문화 교육 수료</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>노인장기요양 5등급 의사소견서 발급 교육 수료</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        )}

        {/* 임상심리사 탭 콘텐츠 */}
        {activeTab === 'psychologists' && (
          <div className="space-y-8">
            {/* 정주아 임상심리사 */}
            <div className="max-w-4xl mx-auto">
              <Card className="overflow-hidden">
                <div className="p-8">
                  <div className="text-center mb-8">
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <Badge className="bg-blue-100 text-blue-700">정신건강임상심리사 1급</Badge>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">정주아 임상심리사</h2>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
                        <Award className="h-5 w-5 text-blue-600" />
                        자격 및 약력
                      </h3>
                      <ul className="space-y-2 text-sm text-slate-600">
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600 mt-1">•</span>
                          <span>한국임상심리학회 공인 임상심리전문가</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600 mt-1">•</span>
                          <span>보건복지부 공인 정신건강임상심리사 1급</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600 mt-1">•</span>
                          <span>가톨릭대학교 부천성모병원 정신건강의학과<br className="md:hidden" /> 임상심리 레지던트 (1년)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600 mt-1">•</span>
                          <span>가톨릭관동대 국제성모병원 정신건강의학과<br className="md:hidden" /> 임상심리 레지던트 (3년)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600 mt-1">•</span>
                          <span>가톨릭대학교 일반대학원 임상심리학 석사</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600 mt-1">•</span>
                          <span>가톨릭대학교 심리학과 학사</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
                        <Users className="h-5 w-5 text-blue-600" />
                        경력
                      </h3>
                      <ul className="space-y-2 text-sm text-slate-600">
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600 mt-1">•</span>
                          <span>현) 은평성모병원 정신건강의학과 임상심리사</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* 황희원 임상심리사 */}
            <div className="max-w-4xl mx-auto">
              <Card className="overflow-hidden">
                <div className="p-8">
                  <div className="text-center mb-8">
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <Badge className="bg-blue-100 text-blue-700">정신건강임상심리사 1급</Badge>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">황희원 임상심리사</h2>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
                        <Award className="h-5 w-5 text-blue-600" />
                        자격 및 약력
                      </h3>
                      <ul className="space-y-2 text-sm text-slate-600">
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600 mt-1">•</span>
                          <span>한국임상심리학회 공인 임상심리전문가</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600 mt-1">•</span>
                          <span>보건복지부 공인 정신건강임상심리사 1급</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600 mt-1">•</span>
                          <span>충북대학교병원 정신건강의학과<br className="md:hidden" /> 임상심리 레지던트 (3년 과정)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600 mt-1">•</span>
                          <span>성신여자대학교 일반대학원<br className="md:hidden" /> 심리학과 임상 및 신경심리학 석사</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
                        <Users className="h-5 w-5 text-blue-600" />
                        경력
                      </h3>
                      <ul className="space-y-2 text-sm text-slate-600">
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600 mt-1">•</span>
                          <span>전) 코키아병원 정신건강의학과 임상심리사</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600 mt-1">•</span>
                          <span>전) 연세봄 정신건강의학과의원 임상심리사</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600 mt-1">•</span>
                          <span>현) 은평성모병원 정신건강의학과 임상심리사</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* 송윤경 임상심리사 */}
            <div className="max-w-4xl mx-auto">
              <Card className="overflow-hidden">
                <div className="p-8">
                  <div className="text-center mb-8">
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <Badge className="bg-blue-100 text-blue-700">정신건강임상심리사 1급</Badge>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">송윤경 임상심리사</h2>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
                        <Award className="h-5 w-5 text-blue-600" />
                        자격 및 약력
                      </h3>
                      <ul className="space-y-2 text-sm text-slate-600">
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600 mt-1">•</span>
                          <span>한국임상심리학회 공인 임상심리전문가</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600 mt-1">•</span>
                          <span>보건복지부 공인 정신건강임상심리사 1급</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600 mt-1">•</span>
                          <span>SRC 재활병원 임상심리 레지던트 (1년)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600 mt-1">•</span>
                          <span>연세대학교 신촌 세브란스병원 소아정신과<br className="md:hidden" /> 임상심리 레지던트 (3년)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600 mt-1">•</span>
                          <span>덕성여자대학교 일반대학원<br className="md:hidden" /> 임상 및 상담심리학 석사</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
                        <Users className="h-5 w-5 text-blue-600" />
                        경력
                      </h3>
                      <ul className="space-y-2 text-sm text-slate-600">
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600 mt-1">•</span>
                          <span>현) 연세소울 정신건강의학과 임상심리사</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600 mt-1">•</span>
                          <span>현) 허그맘허그인 임상심리사</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        )}

        {/* 상담 예약 CTA */}
        <div className="max-w-4xl mx-auto mt-8">
          <Card className="bg-teal-50 border-teal-200">
            <CardContent className="py-8 text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">전문의와 상담하세요</h3>
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