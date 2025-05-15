'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const typingTextMobile = ['사람과 사람,', '마음과 마음을 이음'];
const typingTextDesktop = '사람과 사람, 마음과 마음을 이음';

const Hero = () => {
  const [displayed, setDisplayed] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const [typingIndex, setTypingIndex] = useState(0);

  // 반응형 체크
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // 스크롤 시 타이핑 애니메이션 재생
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let i = 0;
    let line = 0;
    setDisplayed('');
    setTypingIndex(0);

    const handleScroll = () => {
      if (window.scrollY < 100) {
        i = 0;
        line = 0;
        setDisplayed('');
        setTypingIndex(0);
        startTyping();
      }
    };

    const startTyping = () => {
      if (isMobile) {
        // 모바일: 줄마다 타이핑
        if (line < typingTextMobile.length) {
          if (i <= typingTextMobile[line].length) {
            setDisplayed(prev => {
              const lines = prev.split('\n');
              while (lines.length <= line) lines.push('');
              lines[line] = typingTextMobile[line].slice(0, i);
              return lines.join('\n');
            });
            i++;
            timeout = setTimeout(startTyping, 80);
          } else {
            i = 0;
            line++;
            setTypingIndex(line);
            if (line < typingTextMobile.length) {
              timeout = setTimeout(startTyping, 400);
            }
          }
        }
      } else {
        // 데스크탑: 한 줄 타이핑
        if (i <= typingTextDesktop.length) {
          setDisplayed(typingTextDesktop.slice(0, i));
          i++;
          timeout = setTimeout(startTyping, 80);
        }
      }
    };

    startTyping();
    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobile]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-[var(--primary-pink)] opacity-90" />
      
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/images/hero/hero-bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-[var(--wood-brown)] mb-6 whitespace-pre-line">
            {displayed}
            <span className="animate-pulse">|</span>
          </h1>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 