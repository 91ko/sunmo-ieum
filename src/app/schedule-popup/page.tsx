"use client";

import React, { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SchedulePopup() {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [scheduleImages, setScheduleImages] = useState<{[key: string]: string}>({});

  // 현재 월의 이미지 로드
  useEffect(() => {
    const loadScheduleImages = async () => {
      try {
        const images: {[key: string]: string} = {
          "9": "/images/schedule/calendar1.jpg",
          "10": "/images/schedule/calendar2.jpg",
        };
        setScheduleImages(images);
      } catch (error) {
        console.error("진료일정 이미지 로드 실패:", error);
      }
    };

    loadScheduleImages();
  }, []);

  const getCurrentImage = () => {
    const monthKey = currentMonth.toString();
    return scheduleImages[monthKey] || "/images/schedule/calendar1.jpg";
  };

  const getMonthName = (month: number) => {
    const months = [
      "1월", "2월", "3월", "4월", "5월", "6월",
      "7월", "8월", "9월", "10월", "11월", "12월"
    ];
    return months[month - 1];
  };

  const goToPreviousMonth = () => {
    if (currentMonth === 1) {
      setCurrentMonth(12);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const goToNextMonth = () => {
    if (currentMonth === 12) {
      setCurrentMonth(1);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  // 일주일간 보지않기 기능
  const handleHideForWeek = () => {
    const hideUntil = new Date();
    hideUntil.setDate(hideUntil.getDate() + 7);
    localStorage.setItem('scheduleModalHidden', hideUntil.toISOString());
    window.close();
  };

  // 창 닫기
  const handleClose = () => {
    window.close();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f6f8fb] to-white text-slate-900">
      {/* 헤더 */}
      <div className="flex items-center justify-between p-4 border-b border-slate-200 bg-white">
        <h1 className="text-xl font-bold text-slate-900">진료일정</h1>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleClose}
          className="rounded-full p-2 hover:bg-slate-100"
        >
          <X className="h-5 w-5" />
        </Button>
      </div>

      {/* 월 선택 네비게이션 */}
      <div className="flex items-center justify-between p-4 border-b border-slate-200">
        <Button
          variant="outline"
          size="sm"
          onClick={goToPreviousMonth}
          className="flex items-center gap-2"
        >
          <ChevronLeft className="h-4 w-4" />
          이전 달
        </Button>
        
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900">
            {currentYear}년 {getMonthName(currentMonth)}
          </h2>
        </div>
        
        <Button
          variant="outline"
          size="sm"
          onClick={goToNextMonth}
          className="flex items-center gap-2"
        >
          다음 달
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* 진료일정 이미지 */}
      <div className="p-4">
        <img
          src={getCurrentImage()}
          alt={`${currentYear}년 ${getMonthName(currentMonth)} 진료일정`}
          className="w-full h-auto object-contain rounded-lg"
        />
      </div>

      {/* 하단 버튼들 */}
      <div className="p-4 border-t border-slate-200 bg-white">
        <div className="flex gap-3 justify-center">
          <Button
            onClick={handleHideForWeek}
            variant="outline"
            className="border-slate-300 text-slate-600 hover:bg-slate-50"
          >
            일주일간 보지않기
          </Button>
          <Button
            onClick={handleClose}
            className="bg-teal-600 hover:bg-teal-700 text-white"
          >
            닫기
          </Button>
        </div>
      </div>
    </div>
  );
}
