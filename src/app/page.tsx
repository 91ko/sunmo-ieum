"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  Sparkles,
  MapPin,
  Phone,
  Clock,
  Baby,
  HeartCrack,
  Briefcase,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import KakaoMap from "@/components/maps/KakaoMap";
import ScheduleModal from "@/components/ScheduleModal";
import Link from "next/link";

const services = [
  { 
    icon: Baby, 
    title: "소아청소년 클리닉", 
    desc: "발달지연, ADHD, 틱장애, 불안장애, 청소년 우울증, 학습 부진, 또래 관계 문제" 
  },
  { 
    icon: Users, 
    title: "성인 클리닉", 
    desc: "우울증, 불안장애, 수면장애, 강박장애, 공황장애, 성인 ADHD, PTSD, 조현병" 
  },
  { 
    icon: HeartCrack, 
    title: "노인 클리닉", 
    desc: "노인 우울증, 건망증, 경도인지장애, 치매" 
  },
  { 
    icon: Briefcase, 
    title: "기타 진료", 
    desc: "비만, 경두개직류자극치료, 부부/가족 상담, 직장인 스트레스" 
  },
];

const steps = [
  { num: 1, title: "간편 예약", desc: "원하는 날짜·시간을 온라인으로 예약" },
  { num: 2, title: "전문의 상담", desc: "증상/상황을 충분히 듣고 상담" },
  { num: 3, title: "맞춤 진료", desc: "약물·심리치료 포함 치료계획 수립" },
  { num: 4, title: "꾸준한 케어", desc: "경과 확인 및 생활관리 코칭" },
];

export default function ClinicLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [scheduleModalOpen, setScheduleModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const heroImages = [
    "/images/hero/sungmo-ieum1.png",
    "/images/hero/sungmo-ieum2.png"
  ];
  
  // 이미지 자동 슬라이드 효과
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // 4초마다 변경
    
    return () => clearInterval(interval);
  }, [heroImages.length]);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f6f8fb] to-white text-slate-900">
      {/* 헤더 */}
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-slate-200/60 relative">
        <div className="mx-auto max-w-7xl px-2 sm:px-4 md:px-6 lg:px-8 h-16 flex items-center justify-between">
               <div className="flex items-center gap-3">
                 <img 
                   src="/images/logo/logo.png" 
                   alt="성모이음 로고" 
                   className="h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64 rounded-2xl object-contain"
                 />
               </div>
          <div className="hidden md:flex items-center gap-8 text-base font-medium">
            <Link className="hover:text-teal-600 transition" href="/">
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

      {/* 히어로 - 깔끔한 디자인 */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-50 via-white to-emerald-50 min-h-screen flex items-center">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-teal-200/30 blur-3xl"/>
          <div className="absolute top-40 -left-24 h-96 w-96 rounded-full bg-emerald-200/40 blur-3xl"/>
          <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-blue-200/20 blur-3xl"/>
        </div>
        <div className="mx-auto max-w-7xl px-2 sm:px-4 md:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{opacity:0, y:30}} 
              whileInView={{opacity:1, y:0}} 
              viewport={{once:true}} 
              transition={{duration:1, ease:"easeOut"}}
            >
              <div className="text-center lg:text-left">
                
                <motion.h1 
                  initial={{opacity:0, y:30, scale:0.9}}
                  whileInView={{opacity:1, y:0, scale:1}}
                  viewport={{once:true}}
                  transition={{duration:1.2, delay:0.3, ease:"easeOut"}}
                  className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-extrabold leading-tight tracking-widest mb-8"
                >
                  <motion.span 
                    initial={{opacity:0, x:-50, scale:0.9}}
                    whileInView={{opacity:1, x:0, scale:1}}
                    viewport={{once:true}}
                    transition={{duration:1, delay:0.5, ease:"easeOut"}}
                    className="block text-slate-800 tracking-[0.2em] hover:text-teal-700 transition-colors duration-500"
                  >
                    사람과 사람
                  </motion.span>
                  <motion.span 
                    initial={{opacity:0, x:50, scale:0.9}}
                    whileInView={{opacity:1, x:0, scale:1}}
                    viewport={{once:true}}
                    transition={{duration:1, delay:0.7, ease:"easeOut"}}
                    className="block bg-clip-text text-transparent bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-700 tracking-[0.2em] hover:from-teal-500 hover:via-emerald-500 hover:to-teal-600 transition-all duration-500"
                  >
                    마음과 마음을 이음
                  </motion.span>
                </motion.h1>
                
                <motion.div 
                  initial={{opacity:0, y:20, scale:0.95}}
                  whileInView={{opacity:1, y:0, scale:1}}
                  viewport={{once:true}}
                  transition={{duration:1, delay:0.8, ease:"easeOut"}}
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-700 mb-16 tracking-wide hover:text-teal-600 transition-colors duration-500"
                >
                  <motion.span
                    initial={{opacity:0, y:20, scale:0.9}}
                    whileInView={{opacity:1, y:0, scale:1}}
                    viewport={{once:true}}
                    transition={{duration:0.8, delay:1, ease:"easeOut"}}
                    className="inline-block"
                  >
                    성모이음 정신건강 의학과
                  </motion.span>
                </motion.div>
                
              </div>
            </motion.div>
            
            <motion.div 
              initial={{opacity:0, scale:0.8, rotate:15}} 
              whileInView={{opacity:1, scale:1, rotate:0}} 
              viewport={{once:true}} 
              transition={{duration:1.2, delay:0.4, ease:"easeOut"}} 
              className="lg:pl-16 xl:pl-24 mt-8 lg:mt-16"
            >
              <div className="relative">
                {/* 대각선 이미지 배치 - 슬라이드 효과 */}
                <motion.div
                  initial={{opacity:0, y:50, rotate:-15}}
                  whileInView={{opacity:1, y:0, rotate:0}}
                  viewport={{once:true}}
                  transition={{duration:1, delay:0.6}}
                  className="relative z-10 transform hover:scale-105 transition-transform duration-500"
                >
                  <div className="relative w-full max-w-2xl ml-auto mr-0 h-[32rem]">
                    {heroImages.map((image, index) => (
                      <motion.img
                        key={index}
                        src={image}
                        alt={`성모이음 정신건강의학과 ${index === 0 ? '이미지1' : '이미지2'}`}
                        className="absolute inset-0 w-full h-full object-cover"
                        initial={{ opacity: 0, scale: 1.1, rotate: index === 0 ? -5 : 5 }}
                        animate={{ 
                          opacity: index === currentImageIndex ? 1 : 0,
                          scale: index === currentImageIndex ? 1 : 1.1,
                          rotate: index === currentImageIndex ? 0 : (index === 0 ? -5 : 5)
                        }}
                        transition={{ 
                          duration: 1.2, 
                          ease: "easeInOut",
                          delay: index === currentImageIndex ? 0.2 : 0
                        }}
                      />
                    ))}
                    
                    {/* 이미지 인디케이터 */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {heroImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            index === currentImageIndex 
                              ? 'bg-white shadow-lg' 
                              : 'bg-white/50 hover:bg-white/75'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
                
                {/* 자유로운 장식 요소들 */}
                <motion.div 
                  initial={{opacity:0, scale:0}}
                  whileInView={{opacity:1, scale:1}}
                  viewport={{once:true}}
                  transition={{duration:0.8, delay:0.8}}
                  className="absolute -top-6 -right-6 w-12 h-12 bg-teal-400 rounded-full opacity-80 shadow-lg"
                ></motion.div>
                
                <motion.div 
                  initial={{opacity:0, scale:0}}
                  whileInView={{opacity:1, scale:1}}
                  viewport={{once:true}}
                  transition={{duration:0.8, delay:1}}
                  className="absolute -bottom-6 -left-6 w-8 h-8 bg-emerald-400 rounded-full opacity-60 shadow-lg"
                ></motion.div>
                
                <motion.div 
                  initial={{opacity:0, scale:0}}
                  whileInView={{opacity:1, scale:1}}
                  viewport={{once:true}}
                  transition={{duration:0.8, delay:1.2}}
                  className="absolute top-1/3 -right-8 w-6 h-6 bg-blue-400 rounded-full opacity-70 shadow-lg"
                ></motion.div>
                
                <motion.div 
                  initial={{opacity:0, scale:0}}
                  whileInView={{opacity:1, scale:1}}
                  viewport={{once:true}}
                  transition={{duration:0.8, delay:1.4}}
                  className="absolute bottom-1/3 -left-8 w-4 h-4 bg-pink-400 rounded-full opacity-60 shadow-lg"
                ></motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 예약 CTA */}
      <section id="booking" className="mx-auto max-w-7xl px-2 sm:px-4 md:px-6 lg:px-8">
        <Card className="border-teal-200/70 bg-teal-50/60">
          <CardContent className="py-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-between">
            <div>
              <div className="text-sm text-teal-700 font-medium">상담 예약</div>
              <div className="text-xl sm:text-2xl font-semibold">지금 가장 편한 시간으로 예약하세요</div>
              <p className="text-slate-600 mt-1">전화 또는 온라인 예약이 가능합니다.</p>
            </div>
                 <div className="flex items-center gap-3">
                   <Button asChild size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black border-0">
                     <a href="https://pf.kakao.com/_ynxoXn" target="_blank" rel="noopener noreferrer">
                       <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                         <path d="M12 3C6.5 3 2 6.58 2 11c0 2.13 1.05 4.07 2.75 5.48L4 21l4.75-1.5c1.25.5 2.58.75 4 .75 5.5 0 10-3.58 10-8S17.5 3 12 3z"/>
                       </svg>
                       카카오톡 상담하기
                     </a>
                   </Button>
                   <Button asChild size="lg" variant="outline"><a href="tel:02-2138-1568"><Phone className="mr-2 h-4 w-4"/>02-2138-1568</a></Button>
                 </div>
          </CardContent>
        </Card>
      </section>

      {/* 진료일정 - 팝업 버튼으로 변경 */}
      <section id="schedule" className="mx-auto max-w-7xl px-2 sm:px-4 md:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">진료일정</h2>
          <p className="text-lg text-slate-600">월별 휴진일과 진료일정을 확인하세요</p>
        </div>
        
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white text-lg px-12 py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => setScheduleModalOpen(true)}
            >
              <Clock className="mr-3 h-6 w-6" />
              진료일정 확인하기
            </Button>
          </motion.div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-slate-500 text-sm">
            클릭하시면 현재 월의 진료일정을 확인하실 수 있습니다
          </p>
        </div>
      </section>

      {/* 진료과목 */}
      <section id="services" className="mx-auto max-w-7xl px-2 sm:px-4 md:px-6 lg:px-8 py-16 sm:py-20">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">진료과목</h2>
            <p className="text-slate-600 mt-2">증상별로 쉽고 명확하게 안내드립니다.</p>
          </div>
          <Button variant="ghost" className="hidden sm:inline-flex" asChild>
            <a href="/treatment/subjects">전체 보기</a>
          </Button>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 gap-5">
          {services.map((s, i) => (
            <Card key={i} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="h-12 w-12 rounded-2xl bg-teal-100 grid place-items-center">
                  <s.icon className="h-6 w-6 text-teal-700"/>
                </div>
                <div>
                  <CardTitle className="text-lg">{s.title}</CardTitle>
                  <CardDescription>{s.desc}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="pt-0 text-sm text-slate-600">
                <ul className="list-disc pl-5 space-y-1">
                  <li>초기 평가 · 자가점검</li>
                  <li>생활습관/수면 위생 코칭</li>
                  <li>필요 시 약물/심리치료 연계</li>
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 의료진 */}
      <section id="doctor" className="mx-auto max-w-7xl px-2 sm:px-4 md:px-6 lg:px-8 pb-8 sm:pb-12">
        <Card className="overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 sm:p-10">
              <Badge className="mb-3">의료진</Badge>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">대표원장 김태형</h3>
              <p className="text-slate-600 mt-3">
                &ldquo;환자분의 속도에 맞춰, 충분히 듣고 함께 해결책을 찾습니다.&rdquo;
              </p>
              <div className="mt-6 grid sm:grid-cols-2 gap-4 text-sm">
                <div className="rounded-xl border p-4">
                  <div className="font-medium">진료 철학</div>
                  <div className="text-slate-600 mt-1">과잉치료보다 정확한 진단과 꾸준한 케어</div>
                </div>
                <div className="rounded-xl border p-4">
                  <div className="font-medium">전문 분야</div>
                  <div className="text-slate-600 mt-1">불안·공황, 수면, 청소년, 직장 번아웃</div>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                <Badge variant="secondary">정신건강의학과 전문의</Badge>
                <Badge variant="secondary">심리치료 협진</Badge>
                <Badge variant="secondary">1:1 맞춤상담</Badge>
              </div>
                   <div className="mt-8">
                     <Button size="lg" asChild className="bg-yellow-400 hover:bg-yellow-500 text-black border-0">
                       <a href="https://pf.kakao.com/_ynxoXn" target="_blank" rel="noopener noreferrer">
                         <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                           <path d="M12 3C6.5 3 2 6.58 2 11c0 2.13 1.05 4.07 2.75 5.48L4 21l4.75-1.5c1.25.5 2.58.75 4 .75 5.5 0 10-3.58 10-8S17.5 3 12 3z"/>
                         </svg>
                         카카오톡 상담하기
                       </a>
                     </Button>
                   </div>
            </div>
            <div className="p-6 sm:p-8 bg-slate-50 border-t md:border-t-0 md:border-l">
              <div className="aspect-[3/4] max-w-xs mx-auto rounded-2xl bg-white border overflow-hidden">
                <img 
                  src="/images/doctor.jpg" 
                  alt="김태형 원장"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3 text-center text-sm">
                <div className="rounded-xl border p-3">
                  <div className="font-semibold">상담실</div>
                  <div className="text-slate-600 mt-0.5">프라이버시 보장</div>
                </div>
                <div className="rounded-xl border p-3">
                  <div className="font-semibold">초진 30분±</div>
                  <div className="text-slate-600 mt-0.5">충분히 듣습니다</div>
                </div>
                <div className="rounded-xl border p-3">
                  <div className="font-semibold">협진</div>
                  <div className="text-slate-600 mt-0.5">심리·약물 조화</div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* 이용 안내 */}
      <section id="process" className="mx-auto max-w-7xl px-2 sm:px-4 md:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center">
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">이용 안내</h3>
          <p className="text-slate-600 mt-2">첫 방문부터 치료까지 4단계로 간단하게</p>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s) => (
            <Card key={s.num}>
              <CardHeader>
                <div className="text-teal-700 font-semibold">STEP {s.num}</div>
                <CardTitle className="text-lg">{s.title}</CardTitle>
                <CardDescription>{s.desc}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* 위치/진료시간 */}
      <section id="location" className="mx-auto max-w-7xl px-2 sm:px-4 md:px-6 lg:px-8 pb-20">
        <div className="grid lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><MapPin className="h-5 w-5"/>오시는 길</CardTitle>
              <CardDescription>서울 은평구 진관동 72 드림스퀘어 4층</CardDescription>
            </CardHeader>
            <CardContent>
              <KakaoMap 
                width="100%" 
                height="300px" 
                className="aspect-[4/3]"
              />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Clock className="h-5 w-5"/>진료시간</CardTitle>
              <CardDescription>성모이음 정신건강의학과 진료시간</CardDescription>
            </CardHeader>
            <CardContent className="text-sm">
              <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                <div className="text-slate-500">월/화/수/금</div><div className="font-medium">09:00 ~ 19:00</div>
                <div className="text-slate-500">목요일(야간진료)</div><div className="font-medium">14:00 ~ 20:00</div>
                <div className="text-slate-500">토요일</div><div className="font-medium">08:30 ~ 14:00</div>
                <div className="text-slate-500">점심시간</div><div className="font-medium">13:00 ~ 14:00</div>
                <div className="text-slate-500">일/공휴일</div><div className="font-medium">휴무</div>
              </div>
              <div className="mt-3 text-xs text-slate-500">
                ※ 목요일, 토요일은 점심시간 없음
              </div>
              <div className="mt-4 rounded-lg bg-slate-50 border p-3 flex items-center justify-between">
                <div>
                  <div className="text-slate-500 text-xs">대표번호</div>
                  <div className="text-lg font-semibold">02-2138-1568</div>
                </div>
                <Button asChild><a href="tel:02-2138-1568"><Phone className="mr-2 h-4 w-4"/>전화하기</a></Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 진료일정 모달 */}
      <ScheduleModal 
        isOpen={scheduleModalOpen} 
        onClose={() => setScheduleModalOpen(false)} 
      />

      {/* 이미지 확대 모달 */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl max-h-[90vh] p-4" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-2 -right-2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
            >
              <X className="h-6 w-6 text-gray-600" />
            </button>
            <img
              src={selectedImage}
              alt="확대된 달력"
              className="w-full h-full object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}

      {/* 푸터 */}
      <footer className="border-t bg-white/70">
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
