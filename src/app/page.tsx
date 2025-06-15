import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
{/*import FocusAreasSection from "../components/sections/FocusAreasSection";*/}
{/*import ContactSection from "../components/sections/ContactSection";*/}
import MottoSection from "@/components/sections/MottoSection";


export default function HomePage() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <MottoSection />
      <AboutSection />
      {/*
      <FocusAreasSection />
      <ContactSection />
      */}
    </main>
  );
}