'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const subjects = [
  {
    title: '소아 청소년 클리닉',
    image: '/images/subjects/child.jpg',
    description: '아이의 마음을 이해하고 성장을 돕습니다',
  },
  {
    title: '성인 클리닉',
    image: '/images/subjects/adult.jpg',
    description: '일상의 스트레스와 정신 건강을 관리합니다',
  },
  {
    title: '노인 클리닉',
    image: '/images/subjects/elderly.jpg',
    description: '노년기의 정신 건강을 돌봅니다',
  },
  {
    title: '기타 진료',
    image: '/images/subjects/other.jpg',
    description: '다양한 정신 건강 문제를 치료합니다',
  },
];

const TreatmentSubjects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--wood-brown)] mb-12">
          진료 과목
        </h2>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {subjects.map((subject, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl border border-gray-100 transition-all duration-300 ${index % 2 === 0 ? 'translate-y-2' : '-translate-y-2'}`}
            >
              <div className="relative h-36 sm:h-40 md:h-44 lg:h-48 bg-white flex items-center justify-center">
                <img
                  src={subject.image}
                  alt={subject.title}
                  className="w-full h-full object-contain rounded-t-2xl"
                />
              </div>
              <div className="p-4 sm:p-5 md:p-6 text-center">
                <h3 className="text-lg sm:text-xl font-semibold text-[var(--wood-brown)] mb-1 sm:mb-2">
                  {subject.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {subject.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TreatmentSubjects; 