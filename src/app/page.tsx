"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Clock,
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
import KakaoMap from "@/components/maps/KakaoMap";
import Link from "next/link";

const services = [
  { 
    image: "/images/subjects/소아청소년.png",
    title: "소아청소년 클리닉", 
    desc: "발달지연, ADHD, 틱장애, 불안장애, 청소년 우울증, 학습 부진, 또래 관계 문제" 
  },
  { 
    image: "/images/subjects/성인클리닉.png",
    title: "성인 클리닉", 
    desc: "우울증, 불안장애, 수면장애, 강박장애, 공황장애, 성인 ADHD, PTSD, 조현병" 
  },
  { 
    image: "/images/subjects/노인클리닉.png",
    title: "노인 클리닉", 
    desc: "노인 우울증, 건망증, 경도인지장애, 치매" 
  },
  { 
    image: "/images/subjects/기타진료.png",
    title: "기타 진료", 
    desc: "비만, 경두개직류자극치료, 부부/가족 상담, 직장인 스트레스" 
  },
];


export default function ClinicLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // 팝업창 열기 기능
  const openSchedulePopup = () => {
    const popup = window.open(
      '/schedule-popup',
      'schedulePopup',
      'width=800,height=600,scrollbars=yes,resizable=yes,menubar=no,toolbar=no,location=no,status=no'
    );
    if (popup) {
      popup.focus();
    }
  };

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

  // 페이지 진입 시 진료일정 팝업 자동 표시
  React.useEffect(() => {
    // 일주일간 보지않기 체크
    const hiddenUntil = localStorage.getItem('scheduleModalHidden');
    if (hiddenUntil) {
      const hideDate = new Date(hiddenUntil);
      if (hideDate > new Date()) {
        return; // 아직 숨김 기간이면 팝업 표시하지 않음
      }
    }

    const timer = setTimeout(() => {
      openSchedulePopup();
    }, 2000); // 2초 후 팝업 표시
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f6f8fb] to-white text-slate-900 relative overflow-hidden">
      {/* 반딧불이 효과 */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-yellow-300 rounded-full shadow-lg"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.3, 1.5, 0.3],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut",
            }}
          />
        ))}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`glow-${i}`}
            className="absolute w-2 h-2 bg-yellow-200 rounded-full shadow-lg"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.1, 0.8, 0.1],
              scale: [0.5, 2, 0.5],
              x: [0, Math.random() * 50 - 25, 0],
              y: [0, Math.random() * 30 - 15, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      <style jsx>{`
        .firefly {
          position: absolute;
          width: 6px;
          height: 6px;
          background: linear-gradient(45deg, #10b981, #34d399);
          border-radius: 50%;
          box-shadow: 
            0 0 8px #10b981,
            0 0 16px #10b981,
            0 0 24px #34d399;
          animation: fly 20s infinite ease-in-out;
          opacity: 0;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .firefly-1 {
          left: 5%;
          animation-delay: 0s;
          animation-duration: 15s;
        }
        
        .firefly-2 {
          left: 15%;
          animation-delay: 2s;
          animation-duration: 18s;
        }
        
        .firefly-3 {
          left: 25%;
          animation-delay: 4s;
          animation-duration: 16s;
        }
        
        .firefly-4 {
          left: 35%;
          animation-delay: 6s;
          animation-duration: 20s;
        }
        
        .firefly-5 {
          left: 45%;
          animation-delay: 8s;
          animation-duration: 14s;
        }
        
        .firefly-6 {
          left: 55%;
          animation-delay: 10s;
          animation-duration: 17s;
        }
        
        .firefly-7 {
          left: 65%;
          animation-delay: 12s;
          animation-duration: 19s;
        }
        
        .firefly-8 {
          left: 75%;
          animation-delay: 14s;
          animation-duration: 13s;
        }
        
        .firefly-9 {
          left: 85%;
          animation-delay: 16s;
          animation-duration: 21s;
        }
        
        .firefly-10 {
          left: 95%;
          animation-delay: 18s;
          animation-duration: 15s;
        }
        
        @keyframes fly {
          0% {
            transform: translateY(100vh) translateX(0px) scale(0);
            opacity: 0;
          }
          5% {
            opacity: 1;
            transform: translateY(90vh) translateX(10px) scale(1);
          }
          25% {
            transform: translateY(70vh) translateX(-20px) scale(1.2);
          }
          50% {
            transform: translateY(40vh) translateX(30px) scale(0.8);
          }
          75% {
            transform: translateY(20vh) translateX(-15px) scale(1.1);
          }
          95% {
            opacity: 1;
            transform: translateY(10vh) translateX(20px) scale(0.9);
          }
          100% {
            transform: translateY(-50px) translateX(50px) scale(0);
            opacity: 0;
          }
        }
        
        @media (max-width: 768px) {
          .firefly {
            width: 4px;
            height: 4px;
            box-shadow: 
              0 0 4px #10b981,
              0 0 8px #10b981;
          }
        }
      `}</style>
      {/* 헤더 */}
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-slate-200/60 relative z-50">
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
                 <Button asChild variant="outline" className="border-green-500 text-green-600 hover:bg-green-50">
                   <a href="https://blog.naver.com/sungmo-ieum" target="_blank" rel="noopener noreferrer">
                     <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                       <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                     </svg>
                     <span className="hidden sm:inline">네이버 블로그</span>
                     <span className="sm:hidden">블로그</span>
                   </a>
                 </Button>
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
      <section 
        className="relative overflow-hidden min-h-screen flex items-center"
        style={{
          backgroundImage: 'url(/images/hero/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* 배경 오버레이 */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/80 to-white/85 z-10"></div>
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-teal-200/30 blur-3xl"/>
          <div className="absolute top-40 -left-24 h-96 w-96 rounded-full bg-emerald-200/40 blur-3xl"/>
          <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-blue-200/20 blur-3xl"/>
        </div>
        <div className="mx-auto max-w-7xl px-2 sm:px-4 md:px-6 lg:px-8 py-24 sm:py-32 lg:py-40 relative z-20">
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
                  className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-wide mb-8"
                  style={{ fontFamily: '"Noto Sans KR", "Pretendard", -apple-system, BlinkMacSystemFont, system-ui, sans-serif', fontWeight: '300', letterSpacing: '0.08em', lineHeight: '1.2' }}
                >
                  <motion.div 
                    initial={{opacity:0, x:-50, scale:0.9}}
                    whileInView={{opacity:1, x:0, scale:1}}
                    viewport={{once:true}}
                    transition={{duration:1, delay:0.5, ease:"easeOut"}}
                    className="block text-slate-800 tracking-[0.1em] hover:text-teal-700 transition-colors duration-500 mb-2 whitespace-nowrap"
                  >
                    사람과 사람
                  </motion.div>
                  <motion.div 
                    initial={{opacity:0, x:50, scale:0.9}}
                    whileInView={{opacity:1, x:0, scale:1}}
                    viewport={{once:true}}
                    transition={{duration:1, delay:0.7, ease:"easeOut"}}
                    className="block bg-clip-text text-transparent bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-700 tracking-[0.1em] hover:from-teal-500 hover:via-emerald-500 hover:to-teal-600 transition-all duration-500 whitespace-nowrap"
                  >
                    마음과 마음을 이음
                  </motion.div>
                </motion.h1>
                
                <motion.div 
                  initial={{opacity:0, y:20, scale:0.95}}
                  whileInView={{opacity:1, y:0, scale:1}}
                  viewport={{once:true}}
                  transition={{duration:1, delay:0.8, ease:"easeOut"}}
                  className="text-2xl sm:text-3xl lg:text-4xl font-medium text-slate-700 mb-12 tracking-wide hover:text-teal-600 transition-colors duration-500"
                  style={{ fontFamily: '"Noto Sans KR", "Pretendard", -apple-system, BlinkMacSystemFont, system-ui, sans-serif', fontWeight: '400', letterSpacing: '0.05em', lineHeight: '1.3' }}
                >
                  <motion.span
                    initial={{opacity:0, y:20, scale:0.9}}
                    whileInView={{opacity:1, y:0, scale:1}}
                    viewport={{once:true}}
                    transition={{duration:0.8, delay:1, ease:"easeOut"}}
                    className="inline-block"
                  >
                    성모이음 정신건강의학과
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



      {/* 진료과목 */}
      <section id="services" className="mx-auto max-w-7xl px-2 sm:px-4 md:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">진료과목</h2>
        </div>
        
        {/* 모바일: 가로 스크롤, 데스크톱: 그리드 */}
        <div className="block md:hidden">
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {services.map((s, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow overflow-hidden group flex-shrink-0 w-64">
                <div className="relative">
                  <img 
                    src={s.image} 
                    alt={s.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-lg font-bold text-white text-center px-2">{s.title}</h3>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-base font-bold text-center text-slate-900">{s.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* 데스크톱: 그리드 */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <Card key={i} className="hover:shadow-lg transition-shadow overflow-hidden group">
              <div className="relative">
                <img 
                  src={s.image} 
                  alt={s.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-xl font-bold text-white text-center">{s.title}</h3>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-bold text-center text-slate-900">{s.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 대표원장 */}
      <section id="doctor" className="mx-auto max-w-7xl px-2 sm:px-4 md:px-6 lg:px-8 pb-8 sm:pb-12">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">대표원장</h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden shadow-xl border-0 bg-white">
            <div className="grid md:grid-cols-2 gap-0">
              {/* 사진 부분 */}
              <div className="relative">
                <img 
                  src="/images/doctor.jpg" 
                  alt="김태형 원장"
                  className="w-full h-80 md:h-full object-cover object-top"
                />
                <div className="absolute bottom-4 right-4">
                  <div className="bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    정신과전문의
                  </div>
                </div>
              </div>
              
              {/* 정보 부분 */}
              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-slate-900 mb-2">김태형 원장</h3>
                  <div className="space-y-1">
                    <p className="text-lg text-slate-700">정신건강의학과 전문의</p>
                    <p className="text-lg text-slate-700">소아청소년 정신건강의학과 전문의</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold text-slate-900">주요 약력</h4>
                  </div>
                  <ul className="text-slate-600 space-y-2">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>
                        <span className="md:hidden">가톨릭대학교 의과대학<br />정신건강의학교실 외래교수</span>
                        <span className="hidden md:inline">가톨릭대학교 의과대학 정신건강의학교실 외래교수</span>
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>
                        <span className="md:hidden">가톨릭대학교 은평성모병원<br />정신건강의학과 임상진료조교수</span>
                        <span className="hidden md:inline">가톨릭대학교 은평성모병원<br />정신건강의학과 임상진료조교수</span>
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>
                        <span className="md:hidden">가톨릭대학교 은평성모병원<br />정신건강의학과 전임의</span>
                        <span className="hidden md:inline">가톨릭대학교 은평성모병원 정신건강의학과 전임의</span>
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>
                        <span className="md:hidden">가톨릭중앙의료원 정신건강의학과<br />레지던트 수료</span>
                        <span className="hidden md:inline">가톨릭중앙의료원 정신건강의학과 레지던트 수료</span>
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>가톨릭중앙의료원 인턴 수료</span>
                    </li>
                  </ul>
                </div>
                
                <div className="pt-4">
                  <Button size="lg" asChild className="bg-yellow-400 hover:bg-yellow-500 text-black border-0 w-full">
                    <a href="https://pf.kakao.com/_ynxoXn" target="_blank" rel="noopener noreferrer">
                      <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 3C6.5 3 2 6.58 2 11c0 2.13 1.05 4.07 2.75 5.48L4 21l4.75-1.5c1.25.5 2.58.75 4 .75 5.5 0 10-3.58 10-8S17.5 3 12 3z"/>
                      </svg>
                      카카오톡 상담하기
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>


      {/* 위치/진료시간 */}
      <section id="location" className="mx-auto max-w-7xl px-2 sm:px-4 md:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <Card className="overflow-hidden">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg"><MapPin className="h-5 w-5"/>오시는 길</CardTitle>
              <CardDescription className="text-sm">서울 은평구 진관동 72 드림스퀘어 4층</CardDescription>
            </CardHeader>
            <CardContent className="p-3">
              <KakaoMap 
                width="100%" 
                height="250px" 
                className="rounded-lg"
              />
            </CardContent>
          </Card>
          <Card className="overflow-hidden">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg"><Clock className="h-5 w-5"/>진료시간</CardTitle>
              <CardDescription className="text-sm">성모이음 정신건강의학과 진료시간</CardDescription>
            </CardHeader>
            <CardContent className="p-3 text-sm">
              <div className="space-y-2">
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-500">월/화/수/금</span>
                  <span className="font-medium">09:00 ~ 19:00</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-500">목요일(야간진료)</span>
                  <span className="font-medium">14:00 ~ 20:00</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-500">토요일</span>
                  <span className="font-medium">08:30 ~ 14:00</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-500">점심시간</span>
                  <span className="font-medium">13:00 ~ 14:00</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-500">일/공휴일</span>
                  <span className="font-medium text-red-500">휴무</span>
                </div>
              </div>
              <div className="mt-3 text-xs text-slate-500">
                ※ 목요일, 토요일은 점심시간 없음
              </div>
              <div className="mt-4 rounded-lg bg-slate-50 border p-3">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <div className="text-slate-500 text-xs">대표번호</div>
                    <div className="text-lg font-semibold">02-2138-1568</div>
                  </div>
                  <Button asChild size="sm" className="w-full sm:w-auto">
                    <a href="tel:02-2138-1568">
                      <Phone className="mr-2 h-4 w-4"/>
                      전화하기
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>


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
