'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const navigation = [
  { name: 'HOME', href: '/' },
  {
    name: '성모이음 소개',
    submenu: [
      { name: '의료진소개', href: '/about/doctors' },
      { name: '둘러보기', href: '/about/gallery' },
      { name: '진료시간 및 오시는길', href: '/about/location' },
    ],
  },
  {
    name: '진료내용',
    submenu: [
      { name: '진료과목', href: '/treatment/subjects' },
      { name: '검사 및 치료', href: '/treatment/exam' },
      { name: '비급여 항목', href: '/treatment/nonbenefit' },
    ],
  },
  { name: '공지사항', href: '/notice' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        if (window.scrollY > lastScrollY && window.scrollY > 50) {
          setShowHeader(false);
        } else {
          setShowHeader(true);
        }
        setLastScrollY(window.scrollY);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [lastScrollY]);

  // PC GNB 드롭다운 setTimeout 지연
  const handleMouseEnter = (name: string) => {
    if (dropdownTimeout) clearTimeout(dropdownTimeout);
    setOpenDropdown(name);
  };
  const handleMouseLeave = () => {
    const timeout = setTimeout(() => setOpenDropdown(null), 300);
    setDropdownTimeout(timeout);
  };

  useEffect(() => {
    // Body scroll lock for mobile menu
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md transition-all duration-300 ${
        showHeader ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo/logo.png"
                alt="로고"
                width={180}
                height={60}
                className="h-16 w-auto"
                priority
              />
            </Link>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) =>
              !item.submenu ? (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-wood-brown hover:text-deep-pink px-3 py-2 text-sm font-medium ${
                    pathname === item.href ? 'text-deep-pink' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ) : (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className={`text-wood-brown hover:text-deep-pink px-3 py-2 text-sm font-medium flex items-center ${
                      openDropdown === item.name ? 'text-deep-pink' : ''
                    }`}
                  >
                    {item.name}
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  {/* Desktop Dropdown */}
                  {openDropdown === item.name && (
                    <div
                      className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50"
                    >
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="block px-4 py-2 text-sm text-wood-brown hover:bg-primary-pink hover:text-deep-pink"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            )}
          </nav>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-wood-brown hover:text-deep-pink focus:outline-none"
            >
              <span className="sr-only">메뉴 열기</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* 모바일 메뉴 */}
      {isOpen && (
        <div className="fixed inset-0 z-50">
          {/* 오버레이 */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsOpen(false)}
          />
          {/* 메뉴 패널 */}
          <div
            className="fixed top-0 right-0 h-screen w-72 bg-white shadow-2xl rounded-l-2xl flex flex-col z-50 transition-transform duration-300"
          >
            {/* 닫기 버튼 */}
            <div className="flex h-16 items-center justify-end px-6 border-b">
              <button
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center p-3 rounded-full text-2xl text-wood-brown hover:text-deep-pink focus:outline-none"
              >
                <span className="sr-only">메뉴 닫기</span>
                <svg
                  className="h-7 w-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            {/* 메뉴 아이템들 */}
            <div className="flex-1 overflow-y-auto py-4">
              <ul>
                {navigation.map((item) =>
                  !item.submenu ? (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={`block px-6 py-3 text-lg font-medium border-b border-gray-200 transition-colors duration-150 ${
                          pathname === item.href
                            ? 'bg-primary-pink text-deep-pink'
                            : 'text-wood-brown hover:bg-primary-pink hover:text-deep-pink'
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ) : (
                    <li key={item.name} className="border-b border-gray-200">
                      <button
                        className="w-full flex justify-between items-center px-6 py-3 text-lg font-medium text-wood-brown hover:text-deep-pink focus:outline-none transition-colors duration-150"
                        onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                        type="button"
                      >
                        {item.name}
                        <svg
                          className={`ml-2 w-5 h-5 transform transition-transform duration-200 ${openDropdown === item.name ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {openDropdown === item.name && (
                        <ul className="bg-gray-50">
                          {item.submenu.map((sub) => (
                            <li key={sub.name}>
                              <Link
                                href={sub.href}
                                className="block px-10 py-3 text-base font-medium text-wood-brown hover:bg-primary-pink hover:text-deep-pink border-t border-gray-100 transition-colors duration-150"
                                onClick={() => setIsOpen(false)}
                              >
                                {sub.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}  