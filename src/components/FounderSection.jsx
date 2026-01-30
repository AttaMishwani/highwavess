import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Quote, Globe, Lightbulb, Brain, Handshake } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const FounderSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Animate section headings
      const headings = sectionRef.current.querySelectorAll("h2.text-3xl");
      if (headings.length) {
        gsap.fromTo(
          headings,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      const elements = sectionRef.current.querySelectorAll(".fade-up");
      
      gsap.fromTo(
        elements,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const focusPoints = [
    {
      icon: <Globe className="w-8 h-8 text-[#00AEEF]" />,
      text: "Global reach with a local foundation in Pakistan",
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-[#00AEEF]" />,
      text: "Combining creativity, analytics, and technology",
    },
    {
      icon: <Brain className="w-8 h-8 text-[#00AEEF]" />,
      text: "Deep expertise in AI and automation",
    },
    {
      icon: <Handshake className="w-8 h-8 text-[#00AEEF]" />,
      text: "Commitment to transparent, client-focused delivery",
    },
  ];

  return (
    <section
    ref={sectionRef}
    id="about"
    className="relative w-full py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20 text-text-primary"
  >

    <div className="relative z-10 max-w-[1200px] w-full mx-auto">
      {/* Founder’s Message */}
      <div className="grid lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-16 items-center fade-up">
        <div className="space-y-4 sm:space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-[#00AEEF] to-[#00C6FF] bg-clip-text text-transparent">
            Founder's Message
          </h2>
  
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
            When I founded{" "}
            <span className="text-blue-main font-medium">
              High Waves Software Solutions
            </span>
            , my goal was simple — to help businesses thrive in a world driven by
            technology and creativity.
          </p>
  
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
            Over time, that vision evolved into a movement: a team of innovators,
            designers, and engineers dedicated to turning ideas into digital
            success stories.
          </p>
  
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
            We started small — crafting websites and automation tools for startups.
            But our passion for innovation pushed us beyond boundaries. Today, we
            proudly serve clients across industries: from textile exporters and
            real estate firms to global tech startups and digital marketing
            agencies.
          </p>
  
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
            At High Waves, we believe technology is not just code — it’s the bridge
            between ambition and achievement. Our goal is to empower every
            business, regardless of size, to build, scale, and transform digitally.
          </p>
  
          <div className="pt-2 sm:pt-4">
            <p className="text-text-primary italic text-base sm:text-lg">
              “Welcome to the wave of innovation.”
            </p>
            <h3 className="text-blue-main mt-1 sm:mt-2 text-base sm:text-lg">
              — Shaikh Huzaifa Mukhtar
            </h3>
              <p className="text-text-secondary text-xs sm:text-sm">
              Founder & CEO, High Waves Software Solutions
            </p>
          </div>
        </div>
  
        {/* Quote Card */}
        <div className="relative bg-[#0E1625]/70 backdrop-blur-xl border border-blue-main/20 rounded-2xl p-6 sm:p-8 md:p-10 shadow-[0_0_30px_-10px_#00AEEF40]">
          <p className="text-text-secondary italic leading-relaxed text-sm sm:text-base mb-6 sm:mb-8">
            “Our journey began with small dreams and bold ambitions — and today,
            High Waves stands as a symbol of creativity, trust, and innovation.
            Every project we build carries a piece of our passion and dedication to
            empower businesses globally.”
          </p>
  
          <div className="flex items-center mt-4 sm:mt-6 space-x-3 sm:space-x-4">
            <div>
              <h4 className="font-semibold text-text-primary text-sm sm:text-base">
                Shaikh Huzaifa Mukhtar
              </h4>
              <p className="text-xs sm:text-sm text-text-secondary">
                Founder & CEO, High Waves Software Solutions
              </p>
            </div>
          </div>
        </div>
      </div>
  
      {/* Divider Line */}
      <div className="h-[2px] w-20 sm:w-24 bg-[#00AEEF] mx-auto my-12 sm:my-16 md:my-20 opacity-70 fade-up"></div>
  
      {/* Company Overview */}
      <div className="text-center fade-up">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#00AEEF] to-[#00C6FF] bg-clip-text text-transparent">
          Company Overview
        </h2>
  
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-6 sm:mb-8">
          High Waves Software Solutions is a modern technology startup based in
          Karachi, Pakistan — designing, developing, and deploying intelligent
          digital solutions for businesses across the globe.
        </p>
  
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-6 sm:mb-8">
          From cutting-edge websites and mobile apps to AI-powered chatbots and
          automation tools, we blend creativity with technical mastery to deliver
          measurable business results.
        </p>
  
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-10 sm:mb-12">
          We believe in long-term partnerships, not one-time projects. Every client
          becomes part of our digital family, united by innovation and integrity.
        </p>
  
        {/* Focus Points */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-6 sm:mt-8">
          {focusPoints.map((item, i) => (
            <div
              key={i}
              className="group bg-[#0E1625]/70 border border-[#00AEEF]/20 p-6 sm:p-8 rounded-2xl shadow-[0_0_25px_-10px_#00AEEF30] hover:shadow-[0_0_35px_-6px_#00AEEF70] transition-all duration-500"
              style={{ willChange: 'transform' }}
            >
              <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#00AEEF]/10 to-[#00C6FF]/10">
                  {item.icon}
                </div>
                <p className="text-text-primary text-sm sm:text-lg leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
  
        <p className="text-text-primary mt-10 sm:mt-12 text-base sm:text-lg font-medium fade-up">
          At High Waves Software Solutions, we don’t just build software —{" "}
          <span className="text-blue-main">we build brands that last.</span>
        </p>
      </div>
    </div>
  </section>
  
  );
};

export default FounderSection;
