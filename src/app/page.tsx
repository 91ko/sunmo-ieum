"use client";

import React, { useState, useEffect } from "react";
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
import ScheduleWidget from "@/components/ScheduleWidget";
import Widget1 from "@/components/Widget1";
import Widget2 from "@/components/Widget2";

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

const HomePage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);

  // 갤러리 이미지들
  const galleryImages = [
    "/images/gallery/gallery1-exterior.jpg",
    "/images/gallery/gallery2-waiting.jpg", 
    "/images/gallery/gallery3-treatment.jpg",
    "/images/gallery/gallery4-counseling.jpg",
    "/images/gallery/gallery5-examination.jpg",
    "/images/gallery/gallery6-rest.jpg",
    "/images/gallery/gallery7-corridor.jpg",
    "/images/gallery/gallery8-reception.jpg",
    "/images/gallery/gallery9-overview.jpg"
  ];

  // 갤러리 이미지 자동 슬라이드
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGalleryIndex((prev) => (prev + 1) % galleryImages.length);
    }, 5000); // 5초마다 변경 (더 천천히)

    return () => clearInterval(interval);
  }, [galleryImages.length]);

  
  return React.createElement('div', {
    className: "min-h-screen bg-gradient-to-b from-[#f6f8fb] to-white text-slate-900 relative overflow-hidden"
  },
    // 헤더
    React.createElement('header', {
      className: "sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-slate-200/60 relative z-50"
    },
      React.createElement('div', {
        className: "mx-auto max-w-7xl px-2 sm:px-4 md:px-6 lg:px-8 h-16 flex items-center justify-between"
      },
        React.createElement('div', {
          className: "flex items-center gap-3"
        },
          React.createElement('img', {
            src: "/images/logo/logo.png",
            alt: "성모이음 로고",
            className: "h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64 rounded-2xl object-contain"
          })
        ),
        React.createElement('div', {
          className: "hidden md:flex items-center gap-8 text-base font-medium"
        },
          React.createElement(Link, {
            className: "hover:text-teal-600 transition",
            href: "/"
          }, "Home"),
          
          React.createElement('div', {
            className: "relative group"
          },
            React.createElement('a', {
              className: "hover:text-teal-600 transition flex items-center gap-1",
              href: "/about/doctors"
            },
              "성모이음 소개",
              React.createElement(ChevronDown, {
                className: "h-4 w-4"
              })
            ),
            React.createElement('div', {
              className: "absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-slate-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
            },
              React.createElement('div', {
                className: "py-2"
              },
                React.createElement('a', {
                  href: "/about/doctors",
                  className: "block px-4 py-2 text-sm hover:bg-teal-50 hover:text-teal-600"
                }, "의료진 소개"),
                React.createElement('a', {
                  href: "/about/gallery",
                  className: "block px-4 py-2 text-sm hover:bg-teal-50 hover:text-teal-600"
                }, "병원 둘러보기"),
                React.createElement('a', {
                  href: "/about/location",
                  className: "block px-4 py-2 text-sm hover:bg-teal-50 hover:text-teal-600"
                }, "진료시간 및 오시는길")
              )
            )
          ),
          
          React.createElement('div', {
            className: "relative group"
          },
            React.createElement('span', {
              className: "hover:text-teal-600 transition flex items-center gap-1 cursor-pointer"
            },
              "진료내용",
              React.createElement(ChevronDown, {
                className: "h-4 w-4"
              })
            ),
            React.createElement('div', {
              className: "absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-slate-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
            },
              React.createElement('div', {
                className: "py-2"
              },
                React.createElement('a', {
                  href: "/treatment/subjects",
                  className: "block px-4 py-2 text-sm hover:bg-teal-50 hover:text-teal-600"
                }, "진료과목"),
                React.createElement('a', {
                  href: "/treatment/exam",
                  className: "block px-4 py-2 text-sm hover:bg-teal-50 hover:text-teal-600"
                }, "검사 및 치료"),
                React.createElement('a', {
                  href: "/treatment/nonbenefit",
                  className: "block px-4 py-2 text-sm hover:bg-teal-50 hover:text-teal-600"
                }, "비급여 내용")
              )
            )
          ),

          React.createElement('a', {
            href: "/notice",
            className: "hover:text-teal-600 transition"
          }, "공지사항")
        ),
        
        // 모바일 햄버거 메뉴
        React.createElement('div', {
          className: "md:hidden"
        },
          React.createElement(Button, {
            variant: "ghost",
            size: "sm",
            className: "p-2",
            onClick: () => setMobileMenuOpen(!mobileMenuOpen)
          },
            React.createElement(Menu, {
              className: "h-6 w-6"
            })
          )
        ),
        
        // 모바일 메뉴
        mobileMenuOpen && React.createElement('div', {
          className: "absolute top-full left-0 right-0 bg-white border-t border-slate-200 shadow-lg z-50 md:hidden"
        },
          React.createElement('div', {
            className: "px-4 py-4 space-y-4"
          },
            React.createElement(Link, {
              href: "/",
              className: "block font-medium text-slate-900 hover:text-teal-600"
            }, "Home"),
            
            React.createElement('div', null,
              React.createElement('div', {
                className: "font-medium text-slate-900 mb-2"
              }, "성모이음 소개"),
              React.createElement('div', {
                className: "pl-4 space-y-2"
              },
                React.createElement('a', {
                  href: "/about/doctors",
                  className: "block text-sm text-slate-600 hover:text-teal-600"
                }, "의료진 소개"),
                React.createElement('a', {
                  href: "/about/gallery",
                  className: "block text-sm text-slate-600 hover:text-teal-600"
                }, "병원 둘러보기"),
                React.createElement('a', {
                  href: "/about/location",
                  className: "block text-sm text-slate-600 hover:text-teal-600"
                }, "진료시간 및 오시는길")
              )
            ),
            
            React.createElement('div', null,
              React.createElement('div', {
                className: "font-medium text-slate-900 mb-2"
              }, "진료내용"),
              React.createElement('div', {
                className: "pl-4 space-y-2"
              },
                React.createElement('a', {
                  href: "/treatment/subjects",
                  className: "block text-sm text-slate-600 hover:text-teal-600"
                }, "진료과목"),
                React.createElement('a', {
                  href: "/treatment/exam",
                  className: "block text-sm text-slate-600 hover:text-teal-600"
                }, "검사 및 치료"),
                React.createElement('a', {
                  href: "/treatment/nonbenefit",
                  className: "block text-sm text-slate-600 hover:text-teal-600"
                }, "비급여 내용")
              )
            ),

            React.createElement('a', {
              href: "/notice",
              className: "block font-medium text-slate-900 hover:text-teal-600"
            }, "공지사항")
          )
        ),
        
        React.createElement('div', {
          className: "flex items-center gap-3"
        },
          React.createElement(Button, {
            asChild: true,
            variant: "outline",
            className: "border-green-500 text-green-600 hover:bg-green-50"
          },
            React.createElement('a', {
              href: "https://blog.naver.com/sungmo-ieum",
              target: "_blank",
              rel: "noopener noreferrer"
            },
              React.createElement('svg', {
                className: "mr-2 h-4 w-4",
                viewBox: "0 0 24 24",
                fill: "currentColor"
              },
                React.createElement('path', {
                  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
                })
              ),
              React.createElement('span', {
                className: "hidden sm:inline"
              }, "네이버 블로그"),
              React.createElement('span', {
                className: "sm:hidden"
              }, "블로그")
            )
          ),
          React.createElement(Button, {
            asChild: true,
            className: "bg-yellow-400 hover:bg-yellow-500 text-black border-0"
          },
            React.createElement('a', {
              href: "https://pf.kakao.com/_ynxoXn",
              target: "_blank",
              rel: "noopener noreferrer"
            },
              React.createElement('svg', {
                className: "mr-2 h-4 w-4",
                viewBox: "0 0 24 24",
                fill: "currentColor"
              },
                React.createElement('path', {
                  d: "M12 3C6.5 3 2 6.58 2 11c0 2.13 1.05 4.07 2.75 5.48L4 21l4.75-1.5c1.25.5 2.58.75 4 .75 5.5 0 10-3.58 10-8S17.5 3 12 3z"
                })
              ),
              React.createElement('span', {
                className: "hidden sm:inline"
              }, "카카오톡 상담하기"),
              React.createElement('span', {
                className: "sm:hidden"
              }, "상담")
            )
          )
        )
      )
    ),

    // 히어로 섹션
    React.createElement('section', {
      className: "relative overflow-hidden min-h-screen flex items-center",
      style: {
        backgroundImage: 'url(/images/hero/hero-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }
    },
      // 배경 오버레이
      React.createElement('div', {
        className: "absolute inset-0 bg-gradient-to-br from-white/90 via-white/80 to-white/85 z-10"
      }),
      React.createElement('div', {
        className: "pointer-events-none absolute inset-0 -z-10"
      },
        React.createElement('div', {
          className: "absolute -top-24 -right-24 h-96 w-96 rounded-full bg-teal-200/30 blur-3xl"
        }),
        React.createElement('div', {
          className: "absolute top-40 -left-24 h-96 w-96 rounded-full bg-emerald-200/40 blur-3xl"
        }),
        React.createElement('div', {
          className: "absolute bottom-0 right-0 h-64 w-64 rounded-full bg-blue-200/20 blur-3xl"
        })
      ),
      React.createElement('div', {
        className: "mx-auto max-w-7xl px-2 sm:px-4 md:px-6 lg:px-8 py-24 sm:py-32 lg:py-40 relative z-20"
      },
        React.createElement('div', {
          className: "grid lg:grid-cols-2 gap-12 items-center"
        },
          React.createElement(motion.div, {
            initial: {opacity:0, y:30},
            whileInView: {opacity:1, y:0},
            viewport: {once:true},
            transition: {duration:1, ease:"easeOut"}
          },
            React.createElement('div', {
              className: "text-center lg:text-left"
            },
              React.createElement(motion.h1, {
                key: `title-${currentGalleryIndex}`,
                initial: {opacity:0, y:30, scale:0.9},
                animate: {opacity:1, y:0, scale:1},
                transition: {duration:2, delay:0.3, ease:"easeOut"},
                className: "text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-wide mb-8",
                style: { fontFamily: '"Noto Sans KR", "Pretendard", -apple-system, BlinkMacSystemFont, system-ui, sans-serif', fontWeight: '300', letterSpacing: '0.08em', lineHeight: '1.2' }
              },
                React.createElement(motion.div, {
                  key: `line1-${currentGalleryIndex}`,
                  initial: {opacity:0, x:-50, scale:0.9},
                  animate: {opacity:1, x:0, scale:1},
                  transition: {duration:2, delay:0.5, ease:"easeOut"},
                  className: "block text-slate-800 tracking-[0.1em] hover:text-teal-700 transition-colors duration-500 mb-2 whitespace-nowrap"
                }, "사람과 사람"),
                React.createElement(motion.div, {
                  key: `line2-${currentGalleryIndex}`,
                  initial: {opacity:0, x:50, scale:0.9},
                  animate: {opacity:1, x:0, scale:1},
                  transition: {duration:2, delay:0.7, ease:"easeOut"},
                  className: "block bg-clip-text text-transparent bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-700 tracking-[0.1em] hover:from-teal-500 hover:via-emerald-500 hover:to-teal-600 transition-all duration-500 whitespace-nowrap"
                }, "마음과 마음을 이음")
              ),
              
              React.createElement(motion.div, {
                key: `subtitle-${currentGalleryIndex}`,
                initial: {opacity:0, y:20, scale:0.95},
                animate: {opacity:1, y:0, scale:1},
                transition: {duration:2, delay:0.8, ease:"easeOut"},
                className: "text-2xl sm:text-3xl lg:text-4xl font-medium text-slate-700 mb-12 tracking-wide hover:text-teal-600 transition-colors duration-500",
                style: { fontFamily: '"Noto Sans KR", "Pretendard", -apple-system, BlinkMacSystemFont, system-ui, sans-serif', fontWeight: '400', letterSpacing: '0.05em', lineHeight: '1.3' }
              },
                React.createElement(motion.span, {
                  initial: {opacity:0, y:20, scale:0.9},
                  whileInView: {opacity:1, y:0, scale:1},
                  viewport: {once:true},
                  transition: {duration:0.8, delay:1, ease:"easeOut"},
                  className: "inline-block"
                }, "성모이음 정신건강의학과")
              )
            )
          ),
          
          React.createElement(motion.div, {
            initial: {opacity:0, scale:0.8, rotate:15},
            whileInView: {opacity:1, scale:1, rotate:0},
            viewport: {once:true},
            transition: {duration:1.2, delay:0.4, ease:"easeOut"},
            className: "lg:pl-8 xl:pl-12 mt-8 lg:mt-16"
          },
            React.createElement('div', {
              className: "relative"
            },
              // 갤러리 이미지 슬라이드
              React.createElement(motion.div, {
                initial: {opacity:0, scale:0.9, y:20},
                whileInView: {opacity:1, scale:1, y:0},
                viewport: {once:true},
                transition: {duration:1, delay:0.6},
                className: "w-full max-w-sm mx-auto lg:max-w-md"
              },
                React.createElement('div', {
                  className: "relative overflow-hidden rounded-2xl shadow-2xl"
                },
                  React.createElement(motion.img, {
                    key: currentGalleryIndex,
                    src: galleryImages[currentGalleryIndex],
                    alt: "성모이음 정신건강의학과",
                    className: "w-full h-64 lg:h-80 object-cover",
                    initial: { opacity: 0, scale: 0.9, y: 30 },
                    animate: { opacity: 1, scale: 1, y: 0 },
                    transition: { 
                      duration: 2, 
                      ease: "easeOut",
                      delay: 0.3
                    }
                  }),
                  // 그라데이션 오버레이
                  React.createElement('div', {
                    className: "absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"
                  })
                )
              ),
              
              React.createElement(motion.div, {
                initial: {opacity:0, scale:0},
                whileInView: {opacity:1, scale:1},
                viewport: {once:true},
                transition: {duration:0.8, delay:1.4},
                className: "absolute bottom-1/3 -left-8 w-4 h-4 bg-pink-400 rounded-full opacity-60 shadow-lg"
              })
            )
          )
        )
      )
    ),

    // 진료과목 섹션
    React.createElement('section', {
      id: "services",
      className: "mx-auto max-w-7xl px-2 sm:px-4 md:px-6 lg:px-8 py-16 sm:py-20"
    },
      React.createElement(motion.div, {
        className: "text-center mb-12",
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: "easeOut" },
        viewport: { once: true }
      },
        React.createElement('h2', {
          className: "text-2xl sm:text-3xl font-bold tracking-tight"
        }, "진료과목")
      ),
      
      // 모바일: 가로 스크롤, 데스크톱: 그리드
      React.createElement(motion.div, {
        className: "block md:hidden",
        initial: { opacity: 0, x: -50 },
        whileInView: { opacity: 1, x: 0 },
        transition: { duration: 0.6, ease: "easeOut" },
        viewport: { once: true }
      },
        React.createElement('div', {
          className: "flex gap-4 overflow-x-auto pb-4 scrollbar-hide"
        },
          services.map((s, i) => 
            React.createElement(motion.div, {
              key: i,
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 0.5, delay: i * 0.1 },
              viewport: { once: true }
            },
              React.createElement(Card, {
                className: "hover:shadow-lg transition-shadow overflow-hidden group flex-shrink-0 w-64"
              },
                React.createElement('div', {
                  className: "relative"
                },
                  React.createElement('img', {
                    src: s.image,
                    alt: s.title,
                    className: "w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  }),
                  React.createElement('div', {
                    className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  }),
                  React.createElement('div', {
                    className: "absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  },
                    React.createElement('h3', {
                      className: "text-lg font-bold text-white text-center px-2"
                    }, s.title)
                  )
                ),
                React.createElement(CardContent, {
                  className: "p-4"
                },
                  React.createElement('h3', {
                    className: "text-base font-bold text-center text-slate-900"
                  }, s.title)
                )
              )
            )
          )
        )
      ),
      
      // 데스크톱: 그리드
      React.createElement(motion.div, {
        className: "hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6",
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: "easeOut" },
        viewport: { once: true }
      },
        services.map((s, i) => 
          React.createElement(motion.div, {
            key: i,
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.5, delay: i * 0.1 },
            viewport: { once: true }
          },
            React.createElement(Card, {
              className: "hover:shadow-lg transition-shadow overflow-hidden group"
            },
              React.createElement('div', {
                className: "relative"
              },
                React.createElement('img', {
                  src: s.image,
                  alt: s.title,
                  className: "w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                }),
                React.createElement('div', {
                  className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                }),
                React.createElement('div', {
                  className: "absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                },
                  React.createElement('h3', {
                    className: "text-xl font-bold text-white text-center"
                  }, s.title)
                )
              ),
              React.createElement(CardContent, {
                className: "p-4"
              },
                React.createElement('h3', {
                  className: "text-lg font-bold text-center text-slate-900"
                }, s.title)
              )
            )
          )
        )
      )
    ),

    // 대표원장 섹션
    React.createElement('section', {
      id: "doctor",
      className: "mx-auto max-w-7xl px-2 sm:px-4 md:px-6 lg:px-8 pb-8 sm:pb-12"
    },
      React.createElement(motion.div, {
        className: "text-center mb-12",
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: "easeOut" },
        viewport: { once: true }
      },
        React.createElement('h2', {
          className: "text-2xl sm:text-3xl font-bold tracking-tight"
        }, "대표원장")
      ),
      
      React.createElement(motion.div, {
        className: "max-w-4xl mx-auto",
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.8, ease: "easeOut" },
        viewport: { once: true }
      },
        React.createElement(Card, {
          className: "overflow-hidden shadow-xl border-0 bg-white"
        },
          React.createElement('div', {
            className: "grid md:grid-cols-2 gap-0"
          },
            // 사진 부분
            React.createElement('div', {
              className: "relative"
            },
              React.createElement('img', {
                src: "/images/doctor.jpg",
                alt: "김태형 원장",
                className: "w-full h-80 md:h-full object-cover object-top"
              }),
              React.createElement('div', {
                className: "absolute bottom-4 right-4"
              },
                React.createElement('div', {
                  className: "bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-medium"
                }, "정신과전문의")
              )
            ),
            
            // 정보 부분
            React.createElement('div', {
              className: "p-8"
            },
              React.createElement('div', {
                className: "mb-6"
              },
                React.createElement('h3', {
                  className: "text-3xl font-bold text-slate-900 mb-2"
                }, "김태형 원장"),
                React.createElement('div', {
                  className: "space-y-1"
                },
                  React.createElement('p', {
                    className: "text-lg text-slate-700"
                  }, "정신건강의학과 전문의"),
                  React.createElement('p', {
                    className: "text-lg text-slate-700"
                  }, "소아청소년 정신건강의학과 전문의")
                )
              ),
              
              React.createElement('div', {
                className: "mb-6"
              },
                React.createElement('div', {
                  className: "flex items-center mb-3"
                },
                  React.createElement('div', {
                    className: "w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center mr-3"
                  },
                    React.createElement('svg', {
                      className: "w-4 h-4 text-teal-600",
                      fill: "currentColor",
                      viewBox: "0 0 20 20"
                    },
                      React.createElement('path', {
                        d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      })
                    )
                  ),
                  React.createElement('h4', {
                    className: "text-lg font-semibold text-slate-900"
                  }, "주요 약력")
                ),
                React.createElement('ul', {
                  className: "text-slate-600 space-y-2"
                },
                  React.createElement('li', {
                    className: "flex items-start"
                  },
                    React.createElement('div', {
                      className: "w-2 h-2 bg-teal-400 rounded-full mt-2 mr-3 flex-shrink-0"
                    }),
                    React.createElement('span', null,
                      React.createElement('span', {
                        className: "md:hidden"
                      }, "가톨릭대학교 의과대학", React.createElement('br'), "정신건강의학교실 외래교수"),
                      React.createElement('span', {
                        className: "hidden md:inline"
                      }, "가톨릭대학교 의과대학 정신건강의학교실 외래교수")
                    )
                  ),
                  React.createElement('li', {
                    className: "flex items-start"
                  },
                    React.createElement('div', {
                      className: "w-2 h-2 bg-teal-400 rounded-full mt-2 mr-3 flex-shrink-0"
                    }),
                    React.createElement('span', null,
                      React.createElement('span', {
                        className: "md:hidden"
                      }, "가톨릭대학교 은평성모병원", React.createElement('br'), "정신건강의학과 임상진료조교수"),
                      React.createElement('span', {
                        className: "hidden md:inline"
                      }, "가톨릭대학교 은평성모병원", React.createElement('br'), "정신건강의학과 임상진료조교수")
                    )
                  ),
                  React.createElement('li', {
                    className: "flex items-start"
                  },
                    React.createElement('div', {
                      className: "w-2 h-2 bg-teal-400 rounded-full mt-2 mr-3 flex-shrink-0"
                    }),
                    React.createElement('span', null,
                      React.createElement('span', {
                        className: "md:hidden"
                      }, "가톨릭대학교 은평성모병원", React.createElement('br'), "정신건강의학과 전임의"),
                      React.createElement('span', {
                        className: "hidden md:inline"
                      }, "가톨릭대학교 은평성모병원 정신건강의학과 전임의")
                    )
                  ),
                  React.createElement('li', {
                    className: "flex items-start"
                  },
                    React.createElement('div', {
                      className: "w-2 h-2 bg-teal-400 rounded-full mt-2 mr-3 flex-shrink-0"
                    }),
                    React.createElement('span', null,
                      React.createElement('span', {
                        className: "md:hidden"
                      }, "가톨릭중앙의료원 정신건강의학과", React.createElement('br'), "레지던트 수료"),
                      React.createElement('span', {
                        className: "hidden md:inline"
                      }, "가톨릭중앙의료원 정신건강의학과 레지던트 수료")
                    )
                  ),
                  React.createElement('li', {
                    className: "flex items-start"
                  },
                    React.createElement('div', {
                      className: "w-2 h-2 bg-teal-400 rounded-full mt-2 mr-3 flex-shrink-0"
                    }),
                    React.createElement('span', null, "가톨릭중앙의료원 인턴 수료")
                  )
                )
              ),
              
              React.createElement('div', {
                className: "pt-4"
              },
                React.createElement(Button, {
                  size: "lg",
                  asChild: true,
                  className: "bg-yellow-400 hover:bg-yellow-500 text-black border-0 w-full"
                },
                  React.createElement('a', {
                    href: "https://pf.kakao.com/_ynxoXn",
                    target: "_blank",
                    rel: "noopener noreferrer"
                  },
                    React.createElement('svg', {
                      className: "mr-2 h-5 w-5",
                      viewBox: "0 0 24 24",
                      fill: "currentColor"
                    },
                      React.createElement('path', {
                        d: "M12 3C6.5 3 2 6.58 2 11c0 2.13 1.05 4.07 2.75 5.48L4 21l4.75-1.5c1.25.5 2.58.75 4 .75 5.5 0 10-3.58 10-8S17.5 3 12 3z"
                      })
                    ),
                    "카카오톡 상담하기"
                  )
                )
              )
            )
          )
        )
      )
    ),

    // 위치/진료시간 섹션
    React.createElement('section', {
      id: "location",
      className: "mx-auto max-w-7xl px-2 sm:px-4 md:px-6 lg:px-8 pb-20"
    },
      React.createElement(motion.div, {
        className: "grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8",
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: "easeOut" },
        viewport: { once: true }
      },
        React.createElement(Card, {
          className: "overflow-hidden"
        },
          React.createElement(CardHeader, {
            className: "pb-3"
          },
            React.createElement(CardTitle, {
              className: "flex items-center gap-2 text-lg"
            },
              React.createElement(MapPin, {
                className: "h-5 w-5"
              }),
              "오시는 길"
            ),
            React.createElement(CardDescription, {
              className: "text-sm"
            }, "서울 은평구 진관동 72 드림스퀘어 4층")
          ),
          React.createElement(CardContent, {
            className: "p-3"
          },
            React.createElement(KakaoMap, {
              width: "100%",
              height: "250px",
              className: "rounded-lg"
            })
          )
        ),
        React.createElement(Card, {
          className: "overflow-hidden"
        },
          React.createElement(CardHeader, {
            className: "pb-3"
          },
            React.createElement(CardTitle, {
              className: "flex items-center gap-2 text-lg"
            },
              React.createElement(Clock, {
                className: "h-5 w-5"
              }),
              "진료시간"
            ),
            React.createElement(CardDescription, {
              className: "text-sm"
            }, "성모이음 정신건강의학과 진료시간")
          ),
          React.createElement(CardContent, {
            className: "p-3 text-sm"
          },
            React.createElement('div', {
              className: "space-y-2"
            },
              React.createElement('div', {
                className: "flex justify-between items-center py-1"
              },
                React.createElement('span', {
                  className: "text-slate-500"
                }, "월/화/수/금"),
                React.createElement('span', {
                  className: "font-medium"
                }, "09:00 ~ 19:00")
              ),
              React.createElement('div', {
                className: "flex justify-between items-center py-1"
              },
                React.createElement('span', {
                  className: "text-slate-500"
                }, "목요일(야간진료)"),
                React.createElement('span', {
                  className: "font-medium"
                }, "14:00 ~ 20:00")
              ),
              React.createElement('div', {
                className: "flex justify-between items-center py-1"
              },
                React.createElement('span', {
                  className: "text-slate-500"
                }, "토요일"),
                React.createElement('span', {
                  className: "font-medium"
                }, "08:30 ~ 14:00")
              ),
              React.createElement('div', {
                className: "flex justify-between items-center py-1"
              },
                React.createElement('span', {
                  className: "text-slate-500"
                }, "점심시간"),
                React.createElement('span', {
                  className: "font-medium"
                }, "13:00 ~ 14:00")
              ),
              React.createElement('div', {
                className: "flex justify-between items-center py-1"
              },
                React.createElement('span', {
                  className: "text-slate-500"
                }, "일/공휴일"),
                React.createElement('span', {
                  className: "font-medium text-red-500"
                }, "휴무")
              )
            ),
            React.createElement('div', {
              className: "mt-3 text-xs text-slate-500"
            }, "※ 목요일, 토요일은 점심시간 없음"),
            React.createElement('div', {
              className: "mt-4 rounded-lg bg-slate-50 border p-3"
            },
              React.createElement('div', {
                className: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
              },
                React.createElement('div', null,
                  React.createElement('div', {
                    className: "text-slate-500 text-xs"
                  }, "대표번호"),
                  React.createElement('div', {
                    className: "text-lg font-semibold"
                  }, "02-2138-1568")
                ),
                React.createElement(Button, {
                  asChild: true,
                  size: "sm",
                  className: "w-full sm:w-auto"
                },
                  React.createElement('a', {
                    href: "tel:02-2138-1568"
                  },
                    React.createElement(Phone, {
                      className: "mr-2 h-4 w-4"
                    }),
                    "전화하기"
                  )
                )
              )
            )
          )
        )
      )
    ),

    // 이미지 확대 모달
    selectedImage && React.createElement('div', {
      className: "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75",
      onClick: () => setSelectedImage(null)
    },
      React.createElement('div', {
        className: "relative max-w-4xl max-h-[90vh] p-4",
        onClick: (e: React.MouseEvent) => e.stopPropagation()
      },
        React.createElement('button', {
          onClick: () => setSelectedImage(null),
          className: "absolute -top-2 -right-2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
        },
          React.createElement(X, {
            className: "h-6 w-6 text-gray-600"
          })
        ),
        React.createElement('img', {
          src: selectedImage,
          alt: "확대된 달력",
          className: "w-full h-full object-contain rounded-lg shadow-2xl"
        })
      )
    ),

    // 푸터
    React.createElement('footer', {
      className: "border-t bg-white/70"
    },
      React.createElement('div', {
        className: "mx-auto max-w-7xl px-2 sm:px-4 md:px-6 lg:px-8 py-10 text-sm text-slate-600"
      },
        React.createElement('div', {
          className: "flex flex-col sm:flex-row justify-between gap-6"
        },
          React.createElement('div', null,
            React.createElement('div', {
              className: "font-semibold text-slate-900"
            }, "성모이음 정신건강의학과"),
            React.createElement('div', {
              className: "mt-1"
            }, "대표: 김태형 | 사업자등록번호: 772-99-01831"),
            React.createElement('div', {
              className: "mt-1"
            }, "주소: 서울 은평구 진관동 72 드림스퀘어 4층"),
            React.createElement('div', {
              className: "mt-1"
            }, "전화: 02-2138-1568 | 이메일: sungmo-ieum@naver.com")
          ),
          React.createElement('div', {
            className: "flex items-center gap-3"
          },
            React.createElement('img', {
              src: "/images/logo/logo.png",
              alt: "성모이음 로고",
              className: "h-24 w-24 rounded-lg object-contain"
            }),
            React.createElement('div', {
              className: "text-lg font-semibold text-slate-900"
            }, "마음과 마음을 이음 성모이음")
          )
        ),
        React.createElement('div', {
          className: "mt-4"
        }, `© ${new Date().getFullYear()} SeongmoIeum. All rights reserved.`)
      ),
      // 스케줄 위젯
      React.createElement(ScheduleWidget),
      // 위젯 1
      React.createElement(Widget1),
      // 위젯 2
      React.createElement(Widget2)
    )
  );
};

export default HomePage;