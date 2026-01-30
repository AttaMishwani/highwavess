import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ServicePackageCard from "./cards/ServicePackageCard";

gsap.registerPlugin(ScrollTrigger);

const servicePackages = [
  {
    category: "Web Development Packages",
    packages: [
      { title: "Starter Web", features: ["5-page responsive website", "Modern UI design", "Contact form", "Basic SEO", "Deployment & hosting support"], delivery: "7–10 days", price: "$300" },
      { title: "Business Web", features: ["Up to 10 pages", "Custom UI/UX design", "Dynamic content (CMS)", "Performance optimization", "Analytics integration", "2 rounds of revisions"], delivery: "2–3 weeks", price: "$600" },
      { title: "Advanced Web", features: ["Custom web application", "Frontend + backend", "Admin dashboard", "Authentication system", "API integration", "Security & scalability"], delivery: "3–5 weeks", price: "$1,200" },
    ],
  },
  {
    category: "Mobile App Development Packages",
    packages: [
      { title: "Basic App", features: ["Single platform (Android or iOS)", "Clean UI", "Core features", "API integration"], delivery: "3–4 weeks", price: "$1,500" },
      { title: "Cross-Platform App", features: ["Android + iOS (Flutter / React Native)", "Backend integration", "Push notifications", "Admin panel", "App store deployment support"], delivery: "5–7 weeks", price: "$3,000" },
      { title: "Enterprise App", features: ["Advanced architecture", "Real-time features", "Cloud backend", "Security & testing", "Maintenance support"], delivery: "8+ weeks", price: "Custom Pricing" },
    ],
  },
  {
    category: "AI Solutions Packages",
    packages: [
      { title: "AI Starter", features: ["Data analysis", "Basic ML model", "API/dashboard integration", "Documentation"], delivery: "2–3 weeks", price: "$800" },
      { title: "AI Business", features: ["Custom ML/NLP/CV model", "Training & evaluation", "Cloud deployment", "Monitoring setup"], delivery: "4–6 weeks", price: "$2,500" },
      { title: "AI Enterprise", features: ["End-to-end AI pipeline", "Scalable infrastructure", "Continuous learning", "Dedicated support"], delivery: "Custom timeline", price: "Custom Pricing" },
    ],
  },
  {
    category: "UI/UX Design Packages",
    packages: [
      { title: "UI Essentials", features: ["Landing page or app screens", "Modern UI", "Brand alignment", "Figma files"], delivery: "5–7 days", price: "$150" },
      { title: "UX Pro", features: ["User research", "Wireframes", "High-fidelity UI", "Interactive prototype"], delivery: "2 weeks", price: "$500" },
      { title: "Design System", features: ["Complete design system", "Components & styles", "UX guidelines", "Handoff to developers"], delivery: "Custom timeline", price: "Custom Pricing" },
    ],
  },
];

const ServicePackages = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Animate heading
      gsap.from(".section-heading, .section-subheading", {
        opacity: 0,
        y: 40,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true,
        },
      });

      // Animate cards
      gsap.utils.toArray(".universal-card").forEach((card) => {
        gsap.from(card, {
          opacity: 0,
          y: 60,
          scale: 0.95,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            once: true,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full  text-text-primary py-28">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-20">
          <h2 className="section-heading text-4xl md:text-5xl font-bold mb-4 
                         bg-gradient-to-r from-[#00AEEF] to-[#00C6FF] bg-clip-text text-transparent">
            High Waves – Service Packages
          </h2>
          <p className="section-subheading text-text-secondary max-w-2xl mx-auto text-lg">
            Choose the right package for your business. High performance, modern design, and scalable solutions.
          </p>
        </div>

        {servicePackages.map((cat, idx) => (
          <div key={idx} className="mb-16">
            <h3 className="text-2xl font-semibold mb-8">{cat.category}</h3>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {cat.packages.map((pkg, i) => (
                <ServicePackageCard key={i} pkg={pkg} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicePackages;
