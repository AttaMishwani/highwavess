import React, { useEffect, useMemo, useRef } from "react";
import { Globe, Bot, Settings, Code2, Lightbulb, Smartphone } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ServiceCard from "./cards/ServiceCard";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef(null);

  const services = useMemo(
    () => [
      {
        icon: <Globe className="w-8 h-8 text-[#00C6FF]" />,
        title: "Website Design & Development",
        description:
          "We build dynamic, responsive websites tailored to your goals, from corporate portals to e-commerce and custom-coded web apps.",
        tech: "Technologies: HTML, CSS, React, Node.js, WordPress, Wix, Shopify, Laravel",
      },
      {
        icon: <Bot className="w-8 h-8 text-[#00C6FF]" />,
        title: "Chatbot & AI Assistant Development",
        description:
          "We build conversational AI systems, integrating GPT-based chatbots and voice assistants into websites and CRM platforms.",
        tech: "Use Cases: Customer Support, Lead Generation, Automation",
      },
      {
        icon: <Settings className="w-8 h-8 text-[#00C6FF]" />,
        title: "Business Automation & Data Entry Systems",
        description:
          "We streamline manual workflows through bots, scripts, and AI-powered automation that save time and reduce errors.",
        tech: "Examples: Auto report generation, CRM integration, Excel automation",
      },
      {
        icon: <Code2 className="w-8 h-8 text-[#00C6FF]" />,
        title: "Python Scripting & Web Scraping",
        description:
          "We create efficient scripts for data extraction, analytics, and web automation that support real-time business intelligence.",
      },
      {
        icon: <Lightbulb className="w-8 h-8 text-[#00C6FF]" />,
        title: "Creative Branding & Visual Design",
        description:
          "We design brand identities that stand out, including logos, brochures, presentations, and digital creatives.",
      },
      {
        icon: <Smartphone className="w-8 h-8 text-[#00C6FF]" />,
        title: "Mobile App & Software Development",
        description:
          "We develop high-performance mobile and desktop apps that deliver smooth experiences for end-users.",
        tech: "Platforms: Android, iOS, Flutter, React Native",
      },
    ],
    []
  );

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Animate header
      const header = sectionRef.current.querySelector(".services-header");
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

      const cards = gsap.utils.toArray("[data-service-card]", sectionRef.current);

      gsap.fromTo(
        cards,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.18,
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
      id="services"
      className="w-full py-16 md:py-20 text-text-primary flex flex-col items-center"
    >
      {/* Header */}
      <div className="services-header text-center max-w-2xl mb-10 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 leading-tight bg-gradient-to-r from-[#00AEEF] to-[#00C6FF] bg-clip-text text-transparent">
          Our Services
        </h2>
        <p className="text-text-secondary text-base sm:text-lg">
          We offer a full suite of digital services designed to support business transformation and measurable growth.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-[90%] max-w-6xl">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            tech={service.tech}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
