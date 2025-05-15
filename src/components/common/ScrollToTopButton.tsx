'use client';

import { useEffect, useState } from 'react';

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-[99999] p-3 rounded-full bg-deep-pink shadow-2xl ring-2 ring-white transition-opacity duration-300 hover:bg-primary-pink focus:outline-none focus:ring-4 focus:ring-white ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      aria-label="맨 위로 이동"
    >
      <svg className="w-8 h-8" fill="none" stroke="#e91e63" strokeWidth={2.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" fill="none" />
      </svg>
    </button>
  );
} 