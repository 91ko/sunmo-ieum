"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ScheduleModal({ isOpen, onClose }: ScheduleModalProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [scheduleImages, setScheduleImages] = useState<{[key: string]: string}>({});

  // 현재 월의 이미지 로드
  useEffect(() => {
    const loadScheduleImages = async () => {
      try {
        // 실제로는 API에서 가져와야 함
        const images: {[key: string]: string} = {
          "9": "/images/schedule/calendar1.jpg",
          "10": "/images/schedule/calendar2.jpg",
        };
        setScheduleImages(images);
      } catch (error) {
        console.error("진료일정 이미지 로드 실패:", error);
      }
    };

    if (isOpen) {
      loadScheduleImages();
    }
  }, [isOpen]);

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

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative max-w-4xl max-h-[90vh] w-full mx-4 bg-white rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 헤더 */}
            <div className="flex items-center justify-between p-4 border-b border-slate-200">
              <h2 className="text-xl font-bold text-slate-900">진료일정</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
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
                <h3 className="text-2xl font-bold text-slate-900">
                  {currentYear}년 {getMonthName(currentMonth)}
                </h3>
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
              <div className="relative">
                <img
                  src={getCurrentImage()}
                  alt={`${currentYear}년 ${getMonthName(currentMonth)} 진료일정`}
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>
            </div>

            {/* 하단 닫기 버튼 */}
            <div className="p-4 border-t border-slate-200">
              <div className="text-center">
                <Button
                  onClick={onClose}
                  className="bg-teal-600 hover:bg-teal-700 text-white"
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
