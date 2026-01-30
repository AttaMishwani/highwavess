import React, { useEffect, useRef } from "react";
import { Globe2, Rocket, Gem } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const coreValues = [
    {
      title: "Quality",
      text: "We never compromise on excellence; our results speak for themselves.",
    },
    {
      title: "Innovation",
      text: "We embrace change, new ideas, and next-gen technologies.",
    },
    {
      title: "Integrity",
      text: "We uphold honesty, transparency, and accountability in every project.",
    },
    { title: "Growth", text: "We grow by helping our clients grow." },
    {
      title: "Collaboration",
      text: "We build relationships, not just projects.",
    },
    {
      title: "Customer Focus",
      text: "Every solution begins with understanding our clients’ needs deeply.",
    },
  ];

const VisionMission = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Animate header
      const header = sectionRef.current.querySelector(".vision-mission-header");
      if (header) {
        gsap.fromTo(
          header.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: header,
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      // Animate Vision & Mission cards
      const visionMissionCards = gsap.utils.toArray("[data-vision-mission-card]", sectionRef.current);
      if (visionMissionCards.length) {
        gsap.fromTo(
          visionMissionCards,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: visionMissionCards[0],
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      // Animate Core Values container
      const coreValuesContainer = sectionRef.current.querySelector("[data-core-values-container]");
      if (coreValuesContainer) {
        gsap.fromTo(
          coreValuesContainer,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: coreValuesContainer,
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      // Animate Core Values cards
      const coreValuesCards = gsap.utils.toArray("[data-core-value-card]", sectionRef.current);
      if (coreValuesCards.length) {
        gsap.fromTo(
          coreValuesCards,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: coreValuesContainer,
              start: "top 80%",
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
    ref={sectionRef}
    id="vision-mission"
    className="w-full max-w-[1200px] mx-auto py-14 sm:py-16 md:py-20 px-4 sm:px-6  text-text-primary flex flex-col items-center"
  >
    {/* Section Header */}
    <div className="vision-mission-header text-center mb-10 sm:mb-14 max-w-3xl px-2">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 leading-tight bg-gradient-to-r from-[#00AEEF] to-[#00C6FF] bg-clip-text text-transparent">
        Vision, Mission & Core Values
      </h2>
      <p className="text-text-secondary text-sm sm:text-base">
        Driving innovation with purpose — where technology meets integrity.
      </p>
    </div>
  
    {/* Vision & Mission Cards */}
    <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 mb-12 sm:mb-16">
      {/* Vision */}
      <div data-vision-mission-card className="universal-card p-6 sm:p-8" style={{ willChange: 'transform, opacity' }}>
        <Globe2 className="w-10 h-10 sm:w-12 sm:h-12 text-blue-main mb-4" />
        <h3 className="text-xl sm:text-2xl font-semibold mb-3">Vision</h3>
        <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
          To become Pakistan’s most trusted digital innovation brand, empowering
          businesses worldwide to adopt future-ready technologies that drive
          performance, sustainability, and success.
        </p>
        <p className="text-text-secondary text-sm sm:text-base mt-3">
          We envision a global digital ecosystem where every organization —
          regardless of size — can access high-quality tech solutions that inspire
          growth and creativity.
        </p>
      </div>
  
      {/* Mission */}
      <div data-vision-mission-card className="universal-card p-6 sm:p-8 relative overflow-hidden" style={{ willChange: 'transform, opacity' }}>
        <Rocket className="w-10 h-10 sm:w-12 sm:h-12 text-blue-main mb-4" />
        <h3 className="text-xl sm:text-2xl font-semibold mb-3">Mission</h3>
        <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
          Our mission is to transform businesses through intelligent design,
          automation, and software innovation.
        </p>
        <p className="text-text-secondary text-sm sm:text-base mt-3">
          We strive to create meaningful digital experiences that help brands
          connect, scale, and compete globally — with passion, precision, and
          purpose.
        </p>
      </div>
    </div>
  
    {/* Core Values */}
    <div data-core-values-container className="w-full max-w-6xl universal-card relative p-6 sm:p-10">
      <div className="text-center mb-6 sm:mb-8 px-2">
        <Gem className="w-10 h-10 sm:w-12 sm:h-12 text-blue-main mx-auto mb-4" />
        <h3 className="text-2xl sm:text-3xl font-semibold mb-2">Core Values</h3>
        <p className="text-text-secondary text-sm sm:text-base">
          The principles that define who we are and how we build lasting
          relationships.
        </p>
      </div>
  
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-4 sm:mt-6">
        {coreValues.map((value, index) => (
          <div key={index} data-core-value-card className="universal-card p-5 sm:p-6" style={{ willChange: 'transform, opacity' }}>
            <h4 className="text-lg sm:text-xl font-semibold text-glowBlue mb-2">
              {value.title}
            </h4>
            <p className="text-text-secondary text-sm sm:text-base">
              {value.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
  
  );
};

export default VisionMission;
