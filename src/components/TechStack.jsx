import React, { useEffect, useRef } from "react";
import {
  Code2,
  Boxes,
  Layers,
  Database,
  Cloud,
  Brush,
  GitBranch,
  Brain,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const techStack = [
  {
    category: "Languages",
    tools: "Python, JavaScript, HTML, CSS, PHP",
    icon: <Code2 className="w-8 h-8 text-[#00C6FF]" />,
  },
  {
    category: "Frameworks",
    tools: "React, Node.js, Express.js, Flask, Django",
    icon: <Layers className="w-8 h-8 text-[#00C6FF]" />,
  },
  {
    category: "Platforms",
    tools: "WordPress, Wix, Shopify, Squarespace",
    icon: <Boxes className="w-8 h-8 text-[#00C6FF]" />,
  },
  {
    category: "AI & NLP",
    tools: "OpenAI GPT Models, LangChain, Chatbot APIs",
    icon: <Brain className="w-8 h-8 text-[#00C6FF]" />,
  },
  {
    category: "Databases",
    tools: "MySQL, MongoDB, Firebase",
    icon: <Database className="w-8 h-8 text-[#00C6FF]" />,
  },
  {
    category: "Design Tools",
    tools: "Figma, Adobe XD, Illustrator",
    icon: <Brush className="w-8 h-8 text-[#00C6FF]" />,
  },
  {
    category: "Version Control",
    tools: "Git, GitHub",
    icon: <GitBranch className="w-8 h-8 text-[#00C6FF]" />,
  },
  {
    category: "Hosting & Cloud",
    tools: "AWS, DigitalOcean, Cloudflare",
    icon: <Cloud className="w-8 h-8 text-[#00C6FF]" />,
  },
];

const TechStack = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Animate header
      const header = sectionRef.current.querySelector(".tech-stack-header");
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

      const cards = gsap.utils.toArray(".tech-card", sectionRef.current);

      if (!cards.length) return;

      gsap.fromTo(
        cards,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
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

  return (
    <section
      ref={sectionRef}
      id="tech-stack"
      className="relative py-24 px-6 md:px-12 lg:px-20 text-text-primary"
    >
      {/* <div className="absolute top-0 left-0 w-64 h-64 bg-[#00AEEF]/20 blur-[100px] rounded-full"></div> */}
      {/* <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#00C6FF]/20 blur-[120px] rounded-full"></div> */}

      <div className="tech-stack-header relative z-10 text-center mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 leading-tight bg-gradient-to-r from-[#00AEEF] to-[#00C6FF] bg-clip-text text-transparent">
          Technology Stack
        </h2>
        <p className="text-text-secondary max-w-2xl mx-auto text-lg">
          Our versatile technology stack enables us to deliver scalable and modern solutions.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 relative z-10 w-full max-w-[1200px] mx-auto">
        {techStack.map((item, index) => (
          <div
            key={index}
            className="tech-card bg-[#0B1220]/70 border border-[#00C6FF]/20 p-6 rounded-2xl shadow-lg"
            style={{ willChange: 'transform, opacity' }}
          >
            <div className="flex justify-center mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-center text-[#00C6FF] mb-2">
              {item.category}
            </h3>
            <p className="text-text-secondary text-sm text-center">{item.tools}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
