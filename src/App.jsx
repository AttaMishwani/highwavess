import "./App.css";

import Footer from "./components/Footer";
import FounderSection from "./components/FounderSection";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import VisionMission from "./components/VisionMission";
import WhyChooseUs from "./components/WhyChooseUs";
import TechStack from "./components/TechStack";
import GlobalReach from "./components/GlobalReach";
import FloatingContact from "./components/FloatingContact";
import ServicePreview from "./components/Servicepreview";

import Lenis from "@studio-freight/lenis";
import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { setLenis } from "./lenis";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const rafIdRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
      wheelMultiplier: 1,
    });

    setLenis(lenis);

    const onLenisScroll = () => ScrollTrigger.update();
    lenis.on("scroll", onLenisScroll);

    const raf = (time) => {
      lenis.raf(time);
      rafIdRef.current = requestAnimationFrame(raf);
    };

    rafIdRef.current = requestAnimationFrame(raf);

    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      lenis.off("scroll", onLenisScroll);
      lenis.destroy();
      setLenis(null);
    };
  }, []);

  return (
    <main className="bg-site w-full min-h-screen">
      <Navbar />
      <Home />
      <FounderSection />
      <VisionMission />
      <ServicePreview />
      <Services />
      <Portfolio />
      <TechStack />
      <Testimonials />
      <WhyChooseUs />
      <GlobalReach />
      <Footer />
      <FloatingContact />
    </main>
  );
}

export default App;
