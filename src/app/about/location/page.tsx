"use client";

import React, { useState } from "react";
import {
  MapPin,
  ChevronLeft,
  ChevronDown,
  Phone,
  Clock,
  Menu,
  Car,
  Bus,
  Train,
  Navigation,
  Star,
  Info,
  Coffee,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import KakaoMap from "@/components/maps/KakaoMap";

export default function LocationPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const transportation = [
    {
      icon: <Car className="h-6 w-6 text-blue-600" />,
      title: "자가용 이용시",
      details: [
        "주소: 서울 은평구 진관동 72 드림스퀘어 4층",
        "주차장: 드림스퀘어 지하 주차장 이용",
        "주차요금: 1시간 무료, 이후 30분당 1,000원",
        "※ 주차 공간이 제한적이니 대중교통 이용을 권장합니다"
      ],
      color: "bg-blue-50 border-blue-200"
    },
    {
      icon: <Bus className="h-6 w-6 text-green-600" />,
      title: "버스 이용시",
      details: [
        "간선버스: 701, 702, 703, 704, 705, 706, 707, 708, 709, 710",
        "지선버스: 7211, 7212, 7213, 7214, 7215",
        "마을버스: 은평01, 은평02, 은평03",
        "정류장: 진관동 드림스퀘어 하차 (도보 1분)"
      ],
      color: "bg-green-50 border-green-200"
    },
    {
      icon: <Train className="h-6 w-6 text-purple-600" />,
      title: "지하철 이용시",
      details: [
        "6호선 응암역 1번 출구 → 버스 환승 (진관동 방향)",
        "3호선 구파발역 2번 출구 → 버스 환승 (진관동 방향)"
      ],
      color: "bg-purple-50 border-purple-200"
    }
  ];

  const nearbyLandmarks = [
    {
      name: "응암역",
      distance: "버스 10분",
      description: "6호선 응암역 1번 출구"
    },
    {
      name: "드림스퀘어",
      distance: "건물 내",
      description: "4층 성모이음 정신건강의학과"
    },
    {
      name: "은평구청",
      distance: "도보 5분",
      description: "은평구 행정 중심지"
    },
    {
      name: "은평구보건소",
      distance: "도보 7분",
      description: "건강검진 및 예방접종"
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
            <MapPin className="h-8 w-8 text-teal-600" />
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">진료시간 및 오시는길</h1>
          </div>
          <p className="text-lg text-slate-600">진료시간과 편리한 교통편으로 방문해주세요</p>
        </div>

        {/* 병원 정보 */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="bg-gradient-to-r from-teal-50 to-blue-50 border-teal-200">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Star className="h-6 w-6 text-yellow-500" />
                  <h2 className="text-2xl font-bold text-slate-900">성모이음 정신건강의학과</h2>
                </div>
                <div className="space-y-2 text-slate-600 mb-6">
                  <p className="flex items-center justify-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>서울 은평구 진관동 72 드림스퀘어 4층</span>
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span>02-2138-1568</span>
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>월-금 09:00-18:00, 토 09:00-13:00 (일요일 휴진)</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 진료시간 안내 */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="overflow-hidden">
            <CardHeader className="bg-teal-50">
              <CardTitle className="flex items-center gap-2 text-xl text-teal-800">
                <Clock className="h-5 w-5" />
                진료시간 안내
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">요일</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">진료시간</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-slate-900">상태</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-slate-900">월요일</td>
                      <td className="px-6 py-4 text-sm text-slate-600">09:00 - 18:00</td>
                      <td className="px-6 py-4 text-center">
                        <Badge className="text-green-600 bg-opacity-10 border-0">진료</Badge>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-slate-900">화요일</td>
                      <td className="px-6 py-4 text-sm text-slate-600">09:00 - 18:00</td>
                      <td className="px-6 py-4 text-center">
                        <Badge className="text-green-600 bg-opacity-10 border-0">진료</Badge>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-slate-900">수요일</td>
                      <td className="px-6 py-4 text-sm text-slate-600">09:00 - 18:00</td>
                      <td className="px-6 py-4 text-center">
                        <Badge className="text-green-600 bg-opacity-10 border-0">진료</Badge>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-slate-900">목요일</td>
                      <td className="px-6 py-4 text-sm text-slate-600">09:00 - 18:00</td>
                      <td className="px-6 py-4 text-center">
                        <Badge className="text-green-600 bg-opacity-10 border-0">진료</Badge>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-slate-900">금요일</td>
                      <td className="px-6 py-4 text-sm text-slate-600">09:00 - 18:00</td>
                      <td className="px-6 py-4 text-center">
                        <Badge className="text-green-600 bg-opacity-10 border-0">진료</Badge>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-slate-900">토요일</td>
                      <td className="px-6 py-4 text-sm text-slate-600">09:00 - 13:00</td>
                      <td className="px-6 py-4 text-center">
                        <Badge className="text-blue-600 bg-opacity-10 border-0">진료</Badge>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-slate-900">일요일</td>
                      <td className="px-6 py-4 text-sm text-slate-600">휴진</td>
                      <td className="px-6 py-4 text-center">
                        <Badge className="text-red-500 bg-opacity-10 border-0">휴진</Badge>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 점심시간 안내 */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="overflow-hidden">
            <CardHeader className="bg-orange-50">
              <CardTitle className="flex items-center gap-2 text-xl text-orange-800">
                <Coffee className="h-5 w-5" />
                점심시간 안내
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">요일</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">점심시간</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-slate-900">상태</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-slate-900">월요일</td>
                      <td className="px-6 py-4 text-sm text-slate-600">12:00 - 13:00</td>
                      <td className="px-6 py-4 text-center">
                        <Badge className="text-orange-500 bg-opacity-10 border-0">점심시간</Badge>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-slate-900">화요일</td>
                      <td className="px-6 py-4 text-sm text-slate-600">12:00 - 13:00</td>
                      <td className="px-6 py-4 text-center">
                        <Badge className="text-orange-500 bg-opacity-10 border-0">점심시간</Badge>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-slate-900">수요일</td>
                      <td className="px-6 py-4 text-sm text-slate-600">12:00 - 13:00</td>
                      <td className="px-6 py-4 text-center">
                        <Badge className="text-orange-500 bg-opacity-10 border-0">점심시간</Badge>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-slate-900">목요일</td>
                      <td className="px-6 py-4 text-sm text-slate-600">12:00 - 13:00</td>
                      <td className="px-6 py-4 text-center">
                        <Badge className="text-orange-500 bg-opacity-10 border-0">점심시간</Badge>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-slate-900">금요일</td>
                      <td className="px-6 py-4 text-sm text-slate-600">12:00 - 13:00</td>
                      <td className="px-6 py-4 text-center">
                        <Badge className="text-orange-500 bg-opacity-10 border-0">점심시간</Badge>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-slate-900">토요일</td>
                      <td className="px-6 py-4 text-sm text-slate-600">점심시간 없음</td>
                      <td className="px-6 py-4 text-center">
                        <Badge className="text-blue-600 bg-opacity-10 border-0">진료</Badge>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-slate-900">일요일</td>
                      <td className="px-6 py-4 text-sm text-slate-600">휴진</td>
                      <td className="px-6 py-4 text-center">
                        <Badge className="text-red-500 bg-opacity-10 border-0">휴진</Badge>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 지도 */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Navigation className="h-5 w-5 text-teal-600" />
                위치 안내
              </CardTitle>
            </CardHeader>
            <CardContent>
              <KakaoMap 
                width="100%" 
                height="400px" 
                className="rounded-lg"
              />
            </CardContent>
          </Card>
        </div>

        {/* 교통편 안내 */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">교통편 안내</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {transportation.map((transport, index) => (
              <Card key={index} className={`${transport.color} border-2`}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    {transport.icon}
                    <h3 className="font-semibold text-slate-900">{transport.title}</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600">
                    {transport.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-teal-600 mt-1">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* 주변 주요 시설 */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">주변 주요 시설</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {nearbyLandmarks.map((landmark, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-slate-900">{landmark.name}</h3>
                      <p className="text-sm text-slate-600">{landmark.description}</p>
                    </div>
                    <Badge variant="outline" className="text-teal-600 border-teal-300">
                      {landmark.distance}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* 주차 안내 */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Info className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">주차 안내</h3>
                  <ul className="space-y-1 text-sm text-slate-600">
                    <li>• 드림스퀘어 지하 주차장 이용 (건물 내)</li>
                    <li>• 주차 공간이 제한적이니 대중교통 이용을 권장합니다</li>
                    <li>• 주차요금: 1시간 무료, 이후 30분당 1,000원</li>
                    <li>• 진료비 영수증 제시 시 주차 할인 가능 (문의 필요)</li>
                  </ul>
                </div>
              </div>
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
