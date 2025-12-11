"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ScheduleWidget() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [scheduleImages, setScheduleImages] = useState<{[key: string]: string}>({});
  const [isExpanded, setIsExpanded] = useState(false);

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

  // 페이지 진입 시 위젯 표시 여부 확인
  useEffect(() => {
    // 오늘하루 안보기 체크
    const hiddenUntil = localStorage.getItem('scheduleWidgetHidden');
    if (hiddenUntil) {
      const hideDate = new Date(hiddenUntil);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      hideDate.setHours(0, 0, 0, 0);
      
      if (hideDate.getTime() === today.getTime()) {
        return; // 오늘은 숨김
      }
    }

    // 일주일간 보지않기 체크 (기존 호환성)
    const weekHiddenUntil = localStorage.getItem('scheduleModalHidden');
    if (weekHiddenUntil) {
      const hideDate = new Date(weekHiddenUntil);
      if (hideDate > new Date()) {
        return;
      }
    }

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000); // 2초 후 표시
    
    return () => clearTimeout(timer);
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

  // 오늘하루 안보기
  const handleHideForToday = () => {
    const today = new Date();
    today.setHours(23, 59, 59, 999);
    localStorage.setItem('scheduleWidgetHidden', today.toISOString());
    setIsVisible(false);
  };

  // 닫기
  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-4 right-4 z-50"
          style={{ maxWidth: isExpanded ? '400px' : '280px' }}
        >
          <motion.div
            className="bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden"
            style={{ width: isExpanded ? '400px' : '280px' }}
          >
            {/* 헤더 */}
            <div className="flex items-center justify-between p-3 bg-teal-600 text-white">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <h3 className="text-sm font-bold">진료일정</h3>
              </div>
              <div className="flex items-center gap-1">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="h-6 w-6 p-0 text-white hover:bg-teal-700"
                >
                  {isExpanded ? '−' : '+'}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleClose}
                  className="h-6 w-6 p-0 text-white hover:bg-teal-700"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* 월 선택 네비게이션 */}
            <div className="flex items-center justify-between p-2 border-b border-slate-200 bg-slate-50">
              <Button
                variant="ghost"
                size="sm"
                onClick={goToPreviousMonth}
                className="h-7 w-7 p-0 hover:bg-slate-200"
              >
                <ChevronLeft className="h-3 w-3" />
              </Button>
              
              <div className="text-center">
                <h4 className="text-xs font-bold text-slate-900">
                  {currentYear}년 {getMonthName(currentMonth)}
                </h4>
              </div>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={goToNextMonth}
                className="h-7 w-7 p-0 hover:bg-slate-200"
              >
                <ChevronRight className="h-3 w-3" />
              </Button>
            </div>

            {/* 진료일정 이미지 */}
            <div className={`p-2 ${isExpanded ? 'max-h-96 overflow-auto' : 'max-h-48 overflow-hidden'}`}>
              <img
                src={getCurrentImage()}
                alt={`${currentYear}년 ${getMonthName(currentMonth)} 진료일정`}
                className="w-full h-auto object-contain rounded"
              />
            </div>

            {/* 하단 버튼들 */}
            <div className="p-2 border-t border-slate-200 bg-slate-50">
              <div className="flex gap-2">
                <Button
                  onClick={handleHideForToday}
                  variant="outline"
                  size="sm"
                  className="flex-1 text-xs h-7 border-slate-300 text-slate-600 hover:bg-slate-100"
                >
                  오늘하루 안보기
                </Button>
                <Button
                  onClick={handleClose}
                  size="sm"
                  className="px-3 h-7 bg-teal-600 hover:bg-teal-700 text-white text-xs"
                >
                  닫기
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

