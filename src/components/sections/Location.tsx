'use client';

import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import KakaoMap from '../maps/KakaoMap';

const clinicInfo = {
  name: '성모이음 정신건강의학과의원',
  address: '서울특별시 강남구 테헤란로 123',
  phone: '02-2138-1568',
  email: 'contact@seongmoieum.com',
  businessInfo: {
    representative: '홍길동',
    businessNumber: '123-45-67890',
  },
  location: {
    lat: 37.5665, // 실제 위도로 변경 필요
    lng: 126.9780, // 실제 경도로 변경 필요
  },
};

const Location = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--wood-brown)] mb-12">
          오시는 길
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="h-[400px] bg-gray-200 rounded-lg overflow-hidden"
          >
            <KakaoMap
              center={clinicInfo.location}
              level={3}
              marker={true}
            />
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-[var(--wood-brown)] mb-4">
                {clinicInfo.name}
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <FiMapPin className="w-6 h-6 text-[var(--accent-pink)] mt-1" />
                  <div>
                    <p className="font-medium">주소</p>
                    <p className="text-gray-600">{clinicInfo.address}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FiPhone className="w-6 h-6 text-[var(--accent-pink)] mt-1" />
                  <div>
                    <p className="font-medium">전화번호</p>
                    <p className="text-gray-600">{clinicInfo.phone}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FiMail className="w-6 h-6 text-[var(--accent-pink)] mt-1" />
                  <div>
                    <p className="font-medium">이메일</p>
                    <p className="text-gray-600">{clinicInfo.email}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <h4 className="text-xl font-semibold text-[var(--wood-brown)] mb-4">
                사업자 정보
              </h4>
              <div className="space-y-2 text-gray-600">
                <p>대표: {clinicInfo.businessInfo.representative}</p>
                <p>사업자등록번호: {clinicInfo.businessInfo.businessNumber}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location; 