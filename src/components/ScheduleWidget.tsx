"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ScheduleWidget() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 스케줄 이미지 2개
  const scheduleImages = [
    "/images/schedule/calendar1.jpg",
    "/images/schedule/calendar2.png"
  ];

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

  const goToPreviousImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? scheduleImages.length - 1 : prev - 1));
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prev) => (prev === scheduleImages.length - 1 ? 0 : prev + 1));
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
          style={{ maxWidth: '280px' }}
        >
          <motion.div
            className="bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden relative"
            style={{ width: '280px' }}
          >
            {/* 닫기 버튼 */}
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClose}
              className="absolute top-2 right-2 z-10 h-6 w-6 p-0 bg-black/50 hover:bg-black/70 text-white rounded-full"
            >
              <X className="h-4 w-4" />
            </Button>

            {/* 이미지 영역 */}
            <div className="relative">
              {/* 이전 이미지 버튼 */}
              <Button
                variant="ghost"
                size="sm"
                onClick={goToPreviousImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 h-8 w-8 p-0 bg-black/50 hover:bg-black/70 text-white rounded-full"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              {/* 다음 이미지 버튼 */}
              <Button
                variant="ghost"
                size="sm"
                onClick={goToNextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 h-8 w-8 p-0 bg-black/50 hover:bg-black/70 text-white rounded-full"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>

              {/* 진료일정 이미지 */}
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  src={scheduleImages[currentImageIndex]}
                  alt="진료일정"
                  className="w-full h-auto object-contain"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </AnimatePresence>
            </div>

            {/* 하단 버튼 */}
            <div className="p-2 border-t border-slate-200 bg-slate-50">
              <Button
                onClick={handleHideForToday}
                variant="outline"
                size="sm"
                className="w-full text-xs h-7 border-slate-300 text-slate-600 hover:bg-slate-100"
              >
                오늘하루 안보기
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

