import React, { useEffect, useRef } from "react";
import {
  Rocket,
  BarChart3,
  ShieldCheck,
  Users,
  HeartHandshake,
  Globe2,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WhyChooseUsCard from "./cards/WhyChooseUsCard";


gsap.registerPlugin(ScrollTrigger);

const points = [
    {
      icon: <Rocket className="w-8 h-8 text-[#00BCF8]" />,
      title: "Innovation at Core",
      desc: "We bring creativity and innovation to every project, turning your ideas into impactful digital solutions.",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-[#00BCF8]" />,
      title: "Data-Driven Results",
      desc: "Our strategies are backed by insights, analytics, and measurable outcomes to help you scale effectively.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#00BCF8]" />,
      title: "Reliability & Trust",
      desc: "We deliver on our promises — consistently, securely, and transparently.",
    },
    {
      icon: <Users className="w-8 h-8 text-[#00BCF8]" />,
      title: "Experienced Team",
      desc: "Our team of developers, designers, and strategists work collaboratively to craft excellence.",
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-[#00BCF8]" />,
      title: "Client-First Approach",
      desc: "Your success is our priority — we focus on long-term relationships, not one-time projects.",
    },
    {
      icon: <Globe2 className="w-8 h-8 text-[#00BCF8]" />,
      title: "Global Reach",
      desc: "We work with clients across 10+ countries, empowering businesses worldwide.",
  },
];

const WhyChooseUs = () => {
  const sectionRef = useRef(null);

 useEffect(() => {
  if (!sectionRef.current) return;

  const ctx = gsap.context(() => {
    // Animate header
    const header = sectionRef.current.querySelector(".why-choose-us-header");
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

    const cards = gsap.utils.toArray("[data-why-card]", sectionRef.current);

    gsap.fromTo(
      cards,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      }
    );
  }, sectionRef);

  return () => ctx.revert();
}, []);

  return (
    <section
      ref={sectionRef}
      id="why-us"
      className="relative w-full py-24  text-text-primary"
    >
      {/* Decorative glowing backgrounds */}
      {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-[#00BCF8]/20 blur-[120px] rounded-full"></div> */}
      {/* <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-[#00BCF8]/20 blur-[100px] rounded-full"></div> */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        {/* Section Title */}
        <div className="why-choose-us-header">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 leading-tight bg-gradient-to-r from-[#00BCF8] to-[#00BCF8] bg-clip-text text-transparent">
            Why Choose Us
          </h2>
          <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto mb-16">
            Partner with High Waves Software Solutions and experience innovation,
            reliability, and growth — all in one place.
          </p>
        </div>

        {/* Feature Cards */}
      <div className="grid gap-6 sm:gap-8 lg:gap-10 sm:grid-cols-2 lg:grid-cols-3">
  {points.map((item, index) => (
    <WhyChooseUsCard
      key={index}
      icon={item.icon}
      title={item.title}
      desc={item.desc}
    />
  ))}
</div>

      </div>
    </section>
  );
};

export default WhyChooseUs;

