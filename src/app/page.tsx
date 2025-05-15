import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import TreatmentSubjects from '@/components/sections/TreatmentSubjects';
import ClinicHours from '@/components/sections/ClinicHours';
import Location from '@/components/sections/Location';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Hero />
        <TreatmentSubjects />
        <ClinicHours />
        <Location />
      </main>
      <Footer />
    </>
  );
}
