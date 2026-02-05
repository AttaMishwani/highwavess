import React, { useEffect, useRef } from "react";
import { Code2, Smartphone, Brain, PenTool } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Web Development",
    desc: "Fast, responsive websites built with modern stacks. Clean UI, solid performance, and SEO-ready structure.",
    icon: Code2,
  },
  {
    title: "Mobile Apps",
    desc: "Android and iOS apps with smooth UX. Built for speed, stability, and scalable growth.",
    icon: Smartphone,
  },
  {
    title: "AI Solutions",
    desc: "Automation and AI features that save time. Chatbots, smart workflows, and data-driven decisions.",
    icon: Brain,
  },
  {
    title: "UI/UX Design",
    desc: "Interfaces that feel simple and clear. Strong layouts, consistent design systems, and user-first flows.",
    icon: PenTool,
  },
];

const ServicePreview = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Animate header text
      const header = sectionRef.current.querySelector(".service-preview-header");
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

      // Animate cards
      const cards = gsap.utils.toArray("[data-service-preview-card]", sectionRef.current);
      if (cards.length) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
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
    <section ref={sectionRef} className="relative py-24 px-6 sm:px-12 lg:px-20 font-[Poppins] text-text-primary ">
      {/* soft glow */}
      {/* <div className="absolute -top-16 -left-16 w-80 h-80 bg-[#00BCF8]/15 blur-[130px] rounded-full" /> */}
      {/* <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-[#00BCF8]/10 blur-[130px] rounded-full" /> */}

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* header */}
        <div className="service-preview-header text-center mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-[#00BCF8] to-[#00BCF8] bg-clip-text text-transparent">
            Services
          </h2>
          <p className="text-text-secondary max-w-3xl mx-auto text-lg">
            Four core services we deliver for startups, businesses, and growing teams.
          </p>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                data-service-preview-card
                className="rounded-2xl border border-white/10 dark:border-white/10 border-gray-200 bg-white/5 dark:bg-white/5 bg-gray-50/80 backdrop-blur-md p-6 hover:bg-white/10 dark:hover:bg-white/10 hover:bg-gray-100/80 hover:border-white/20 dark:hover:border-white/20 hover:border-gray-300 transition"
                style={{ willChange: 'transform, opacity' }}
              >
                <div className="w-12 h-12 rounded-xl bg-[#00BCF8]/15 border border-[#00BCF8]/25 flex items-center justify-center mb-4">
                  <Icon size={22} className="text-[#00BCF8]" />
                </div>

                <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicePreview;

