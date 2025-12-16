"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Widget2() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  // 위젯 이미지들
  const widgetImages = [
    "/images/widgets/widget2-image1.jpeg"
  ];

  // 페이지 진입 시 위젯 표시 여부 확인
  useEffect(() => {
    // 오늘하루 안보기 체크
    const hiddenUntil = localStorage.getItem('widget2Hidden');
    if (hiddenUntil) {
      const hideDate = new Date(hiddenUntil);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      hideDate.setHours(0, 0, 0, 0);
      
      if (hideDate.getTime() === today.getTime()) {
        return; // 오늘은 숨김
      }
    }

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2500); // 2.5초 후 표시 (위젯들이 겹치지 않도록)
    
    return () => clearTimeout(timer);
  }, []);

  const goToPreviousImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? widgetImages.length - 1 : prev - 1));
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prev) => (prev === widgetImages.length - 1 ? 0 : prev + 1));
  };

  // 오늘하루 안보기
  const handleHideForToday = () => {
    const today = new Date();
    today.setHours(23, 59, 59, 999);
    localStorage.setItem('widget2Hidden', today.toISOString());
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
          className="fixed bottom-[360px] left-4 z-40"
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
              {/* 이전 이미지 버튼 - 이미지가 2개 이상일 때만 표시 */}
              {widgetImages.length > 1 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={goToPreviousImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-10 h-8 w-8 p-0 bg-black/50 hover:bg-black/70 text-white rounded-full"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
              )}

              {/* 다음 이미지 버튼 - 이미지가 2개 이상일 때만 표시 */}
              {widgetImages.length > 1 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={goToNextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-10 h-8 w-8 p-0 bg-black/50 hover:bg-black/70 text-white rounded-full"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              )}

              {/* 이미지 - 클릭하면 확대 */}
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  src={widgetImages[currentImageIndex]}
                  alt="위젯 2"
                  className="w-full h-auto object-contain cursor-pointer"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setIsExpanded(true)}
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
      
      {/* 확대 모달 */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/80 flex items-center justify-center p-4"
            onClick={() => setIsExpanded(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsExpanded(false)}
                className="absolute top-2 right-2 z-10 h-8 w-8 p-0 bg-black/50 hover:bg-black/70 text-white rounded-full"
              >
                <X className="h-5 w-5" />
              </Button>
              <img
                src={widgetImages[currentImageIndex]}
                alt="위젯 2 확대"
                className="w-full h-auto object-contain rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatePresence>
  );
}

