'use client';

import { motion } from 'framer-motion';
import React from 'react';

const clinicInfo = {
  name: '성모이음',
  phone: '02-2138-1568',
  hours: {
    weekday: '09:00 ~ 19:00',
    thursday: '13:00 ~ 20:00',
    saturday: '08:30 ~ 14:00',
    lunch: '13:00 ~ 14:00',
  },
};

const ClinicHours = () => {
  const cards = [
    { title: clinicInfo.name, type: 'phone', content: clinicInfo.phone },
    { title: '월/화/수/금', type: 'clock', content: (
      <>
        <p>{clinicInfo.hours.weekday}</p>
        <p className="text-sm text-gray-600">점심시간: {clinicInfo.hours.lunch}</p>
      </>
    ) },
    { title: '목요일', type: 'clock', content: clinicInfo.hours.thursday },
    { title: '토요일', type: 'clock', content: clinicInfo.hours.saturday },
  ];

  return (
    <section className="py-20 bg-[var(--primary-pink)]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--wood-brown)] mb-12">
          진료 시간
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-5 sm:p-6 text-center border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex justify-center items-center mb-4">
                <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary-pink shadow-md mb-2">
                  {card.type === 'phone' ? (
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="32" 
                      height="32" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="white" 
                      strokeWidth="2.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      style={{ display: 'block' }}
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  ) : (
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="32" 
                      height="32" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="white" 
                      strokeWidth="2.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      style={{ display: 'block' }}
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  )}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-[var(--wood-brown)] mb-2">
                {card.title}
              </h3>
              <div className="text-gray-600 text-sm sm:text-base">
                {card.content}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClinicHours; 