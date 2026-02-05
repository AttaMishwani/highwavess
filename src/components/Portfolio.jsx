import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import psa from "../assets/portfolio/psa.webp";
import digitora from "../assets/portfolio/digitora.webp";
import kcpremierliving from "../assets/portfolio/kcpremier.webp";
import PortfolioCard from "./cards/PortfolioCard";

const projects = [
  {
    name: "Pak Safety Academy", 
    industry: "Occupational Safety & Industrial Training",
    image: psa,
    link: "https://paksafetyacademy.com",
  },
  {
    name: "Any Landscaping",
    industry: "Landscape Design & Maintenance",
    image: psa,
    link: "https://anylandscaping.com",
  },
  {
    name: "Digitora",
    industry: "Digital Marketing & Branding Agency",
    image: digitora,
    link: "https://digitora.site",
  },
  {
    name: "KC Premier Living",
    industry: "Real Estate & Property Management",
    image: kcpremierliving,
    link: "https://kcpremierliving.com",
  },
  {
    name: "Finance Centre",
    industry: "Financial Consultancy & Services",
    image: digitora,
    link: "https://financecentre.us",
  },
];

const Portfolio = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const headingItems = sectionRef.current.querySelectorAll("[data-portfolio-heading]");
      if (headingItems.length) {
        gsap.fromTo(
          headingItems,
          { autoAlpha: 0, y: 24 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      const cards = gsap.utils.toArray(".portfolio-card", sectionRef.current);
      if (!cards.length) return;

      ScrollTrigger.batch(cards, {
        start: "top 85%",
        once: true,
        onEnter: (batch) => {
          gsap.fromTo(
            batch,
            { opacity: 0, y: 18 },
            {
              opacity: 1,
              y: 0,
              duration: 0.55,
              stagger: 0.08,
              ease: "power2.out",
              overwrite: true,
              clearProps: "transform",
            }
          );
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="relative w-full py-24 px-4 sm:px-6 lg:px-20 text-text-primary"
    >
      {/* Header */}
      <div className="portfolio-header text-center mb-12">
        <h2
          data-portfolio-heading
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 leading-tight bg-gradient-to-r from-[#00BCF8] to-[#00BCF8] bg-clip-text text-transparent"
        >
          Portfolio Showcase
        </h2>
        <p data-portfolio-heading className="text-text-secondary max-w-2xl mx-auto text-lg">
          Selected projects delivered with strategy, performance, and precision.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full mx-auto">
        {projects.map((proj, index) => (
          <PortfolioCard key={index} project={proj} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

