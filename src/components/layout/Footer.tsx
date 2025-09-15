'use client';

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="text-[var(--wood-brown)] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <img src="/images/logo/logo.png" alt="성모이음" className="h-12" />
            </Link>
            <p className="text-gray-600">
              사람과 사람, 마음과 마음을 이음
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--wood-brown)] mb-4">
              빠른 링크
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about/doctors" className="text-gray-600 hover:text-[var(--accent-pink)]">
                  의료진 소개
                </Link>
              </li>
              <li>
                <Link href="/treatment/subjects" className="text-gray-600 hover:text-[var(--accent-pink)]">
                  진료 과목
                </Link>
              </li>
              <li>
                <Link href="/notice" className="text-gray-600 hover:text-[var(--accent-pink)]">
                  공지사항
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-[var(--accent-pink)]">
                  진료문의
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--wood-brown)] mb-4">
              연락처
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>주소: 서울 은평구 진관동 72 드림스퀘어 4층</li>
              <li>사업자번호: 772-99-01831</li>
              <li>전화: 02-2138-1568</li>
              <li>이메일: sungmo-ieum@naver.com</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-600">
          <p>ⓒ 2025 성모이음 정신건강의학과의원 All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 