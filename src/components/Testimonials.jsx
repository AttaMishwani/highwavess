import React, { useEffect, useRef } from "react";
import { Star } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Tanveer Alam",
    title: "CEO – Syeed & Sons",
    location: "Pakistan",
    text: "High Waves Software Solutions delivered exactly what we envisioned, a modern, elegant, and performance-driven website that perfectly represents our textile export brand. Their professionalism and precision truly stand out.",
  },
  {
    name: "Fatima Noor",
    title: "Founder – BrandWave Studio",
    location: "United Kingdom",
    text: "Their expertise in AI chatbot integration gave our marketing agency an edge. The communication was seamless, deadlines were met, and the results exceeded our expectations.",
  },
  {
    name: "Ahmed Khan",
    title: "Director – Digitora",
    location: "UAE",
    text: "We partnered with High Waves for automation and data solutions, and the experience was incredible. Their tech understanding and creative input helped us streamline our operations.",
  },
];

const Testimonials = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Animate header
      const header = sectionRef.current.querySelector(".testimonials-header");
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

      // Animate testimonial cards
      const cards = gsap.utils.toArray(".testimonial-card", sectionRef.current);
      if (cards.length) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.15,
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
    <section
      ref={sectionRef}
      id="testimonials"
      className="w-full py-20 px-6 md:px-20 text-text-primary overflow-hidden"
    >
      {/* Heading */}
      <div className="testimonials-header text-center mb-14">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 leading-tight bg-gradient-to-r from-[#00BCF8] to-[#00BCF8] bg-clip-text text-transparent">
          Client Testimonials
        </h2>

        <p className="text-text-secondary max-w-3xl mx-auto text-lg">
          What our clients say about working with High Waves Software Solutions.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center w-full max-w-[1200px] mx-auto">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="testimonial-card relative bg-[#0B1220]/80 backdrop-blur-md p-6 flex flex-col justify-between rounded-2xl shadow-[0_0_25px_-8px_#00BCF8]/10 hover:shadow-[0_0_40px_-8px_#00BCF8]/30 transition-all duration-500 border border-[#00BCF8]/10 max-w-md"
            style={{ willChange: 'transform, opacity' }}
          >
            <p className="text-text-secondary mb-6 italic leading-relaxed">
              “{item.text}”
            </p>

            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-text-primary">{item.name}</h4>
                <p className="text-sm text-text-secondary">
                  {item.title} — {item.location}
                </p>
              </div>

              <div className="flex text-yellow-400">
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

