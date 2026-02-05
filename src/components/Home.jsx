import React, { useEffect, useRef, useMemo } from "react";
import gsap from "gsap";
import {
  Sparkles,
  Rocket,
  Code2,
  Globe,
  Zap,
  Star,
  TrendingUp,
  Award,
} from "lucide-react";
import { scrollTo } from "../lenis";

/**
 * Fix for the top separation issue (Navbar vs Home):
 * 1) The orb must NOT be fixed.
 * 2) The orb must NOT be clipped by Home.
 * 3) The orb must extend upward into the Navbar area, but stay behind it.
 *
 * Key changes:
 * - Home section: removed overflow-hidden, used overflow-visible.
 * - Orb: absolute (NOT fixed), placed with negative top so it spills above Home.
 * - Orb z-index: kept low (z-0) so Navbar stays above.
 * - Removed the other fixed orbs as well (they also create cross-section weirdness).
 */

const Home = () => {
  const heroContentRef = useRef(null);
  const floatingElementsRef = useRef(null);
  const statsRef = useRef(null);

  // Generate particles once (avoid re-randomizing on every render)
  const particles = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${3 + Math.random() * 3}s`,
    }));
  }, []);

  useEffect(() => {
    if (!heroContentRef.current) return;

    const ctx = gsap.context(() => {
      const heading = heroContentRef.current.querySelector(".hero-heading");
      const subheading = heroContentRef.current.querySelector(".hero-subheading");
      const buttons = heroContentRef.current.querySelector(".hero-buttons");

      if (heading) {
        gsap.fromTo(
          heading,
          { opacity: 0, y: 30, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 1.1, ease: "power3.out" }
        );
      }

      if (subheading) {
        gsap.fromTo(
          subheading,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.9, delay: 0.25, ease: "power3.out" }
        );
      }

      if (buttons) {
        gsap.fromTo(
          buttons.children,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.14,
            delay: 0.55,
            ease: "power3.out",
          }
        );
      }

      if (floatingElementsRef.current) {
        const icons = gsap.utils.toArray(floatingElementsRef.current.children);
        if (icons.length) {
          gsap.fromTo(
            icons,
            { opacity: 0, scale: 0, rotation: -120 },
            {
              opacity: 1,
              scale: 1,
              rotation: 0,
              duration: 0.75,
              stagger: 0.08,
              delay: 0.85,
              ease: "back.out(1.6)",
            }
          );

          icons.forEach((icon, i) => {
            gsap.to(icon, {
              y: Math.random() * 26 - 13,
              x: Math.random() * 18 - 9,
              rotation: Math.random() * 16 - 8,
              duration: 3.2 + Math.random() * 1.8,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
              delay: i * 0.18,
            });
          });
        }
      }

      if (statsRef.current) {
        const stats = gsap.utils.toArray(statsRef.current.children);
        if (stats.length) {
          gsap.fromTo(
            stats,
            { opacity: 0, y: 24 },
            {
              opacity: 1,
              y: 0,
              duration: 0.75,
              stagger: 0.12,
              delay: 1.05,
              ease: "power3.out",
            }
          );
        }
      }
    }, heroContentRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      className="
        w-full
        min-h-[89vh]
        relative
        flex
        justify-center
        items-center
        px-4
        sm:px-6
        md:px-8
        overflow-visible
      "
    >
      {/* Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,198,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,198,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            animation: "grid-move 20s linear infinite",
          }}
        />
        <div
          className="absolute inset-0 hidden light:block"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,119,190,0.11) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,119,190,0.11) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            animation: "grid-move 20s linear infinite",
          }}
        />
      </div>

      {/* TOP ORB (Fixes Navbar vs Home separation)
          - Not fixed
          - Not clipped
          - Spills upward into navbar area
          - Stays behind navbar because z is low
      */}
      <div
        className="absolute left-1/2 -translate-x-1/2 pointer-events-none z-0"
        style={{
          top: "-260px",
          width: "720px",
          height: "720px",
          filter: "blur(160px)",
          background:
            "radial-gradient(circle, rgba(0,174,239,0.55) 0%, rgba(0,174,239,0.18) 45%, transparent 72%)",
          opacity: 0.28,
          animation: "pulse-slow 7s ease-in-out infinite",
        }}
        aria-hidden
      />

      {/* Supporting Orbs (keep them inside Home only) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00BCF8]/16 rounded-full blur-[120px] animate-pulse-slow" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00BCF8]/14 rounded-full blur-[120px] animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] bg-[#00BCF8]/10 rounded-full blur-[150px] animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute w-1 h-1 bg-[#00BCF8]/40 rounded-full animate-float"
            style={{
              left: p.left,
              top: p.top,
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          />
        ))}
      </div>

      {/* Floating Icons */}
      <div
        ref={floatingElementsRef}
        className="absolute inset-0 pointer-events-none overflow-hidden z-20"
      >
        <Sparkles className="absolute top-20 left-10 w-14 h-14 text-[#00BCF8]/40 animate-pulse" />
        <Rocket className="absolute top-40 right-20 w-12 h-12 text-[#00BCF8]/40" />
        <Code2 className="absolute bottom-40 left-20 w-14 h-14 text-[#00BCF8]/40" />
        <Globe className="absolute bottom-20 right-40 w-12 h-12 text-[#00BCF8]/40" />
        <Zap className="absolute top-1/2 left-5 w-10 h-10 text-[#00BCF8]/30" />
        <Sparkles className="absolute bottom-1/4 right-10 w-12 h-12 text-[#00BCF8]/30 animate-pulse" />
        <Star className="absolute top-1/3 right-1/4 w-10 h-10 text-[#00BCF8]/30" />
        <TrendingUp className="absolute bottom-1/3 left-1/3 w-10 h-10 text-[#00BCF8]/30" />
        <Award className="absolute top-2/3 right-1/3 w-10 h-10 text-[#00BCF8]/30" />
      </div>

      {/* Hero Content */}
      <div
        ref={heroContentRef}
        className="
          relative
          z-30
          w-full
          max-w-[1200px]
          mx-auto
          flex
          flex-col
          justify-center
          items-center
          text-center
          sm:py-20
          md:py-24
        "
      >
        <div className="mb-8 px-6 py-3 rounded-full bg-gradient-to-r from-[#00BCF8]/30 to-[#00BCF8]/30 border border-[#00BCF8]/40 backdrop-blur-md shadow-[0_0_30px_rgba(0,198,255,0.3)] hover:shadow-[0_0_40px_rgba(0,198,255,0.5)] transition-all duration-300 hover:scale-105">
          <p className="text-sm md:text-base font-semibold bg-gradient-to-r from-[#00BCF8] to-[#00BCF8] bg-clip-text text-transparent flex items-center gap-2">
            <Sparkles className="w-4 h-4 inline-block animate-pulse" />
            Transforming Ideas Into Digital Excellence
            <Sparkles className="w-4 h-4 inline-block animate-pulse" />
          </p>
        </div>

        <h1
          className="
            hero-heading
            font-extrabold
            leading-tight
            mb-8
            text-[clamp(2rem,5vw,4.5rem)]
            bg-gradient-to-r from-[#00BCF8] via-[#00BCF8] to-[#00BCF8]
            bg-clip-text text-transparent
            bg-[length:200%_auto]
            animate-gradient-shift
            drop-shadow-[0_0_30px_rgba(0,198,255,0.5)]
          "
        >
          <span className="block mb-2">Ride the Digital</span>
          <span className="block">Wave with Us</span>
        </h1>

        <p
          className="
            hero-subheading
            text-text-secondary
            max-w-3xl
            text-[clamp(1rem,2.5vw,1.3rem)]
            px-2
            leading-relaxed
            font-medium
          "
        >
          At{" "}
          <span className="font-bold bg-gradient-to-r from-[#00BCF8] to-[#00BCF8] bg-clip-text text-transparent">
            High Waves Software Solutions
          </span>
          , we build intelligent websites, apps, and AI solutions that help businesses
          grow and automate their digital presence.
        </p>

        <div
          className="
            hero-buttons
            flex
            flex-col
            sm:flex-row
            gap-4
            mt-6
            w-full
            sm:w-auto
            items-center
          "
        >
          <button
            onClick={() => scrollTo("#contact")}
            className="
              hero-cta
              relative overflow-hidden
              bg-blue-main
              text-text-primary
              px-6 py-3
              rounded-xl
              font-medium
              shadow-[0_0_15px_#00BCF8]
              transition-all duration-300
              w-full sm:w-auto
              cursor-pointer
              text-[clamp(0.9rem,1.8vw,1rem)]
              hover:-translate-y-1
              hover:shadow-[0_12px_30px_rgba(0,198,255,0.55)]
            "
          >
            <span
              className="
                pointer-events-none
                absolute inset-0
                -translate-x-full
                bg-gradient-to-r
                from-transparent
                via-white/30
                to-transparent
                hover:translate-x-full
                transition-transform
                duration-700
              "
            />
            Get a Free Consultation
          </button>

          <button
            onClick={() => scrollTo("#portfolio")}
            className="
              hero-portfolio
              relative
              border border-white/60
              text-text-primary
              px-6 py-3
              rounded-xl
              font-medium
              transition-all duration-300
              w-full sm:w-auto
              cursor-pointer
              text-[clamp(0.9rem,1.8vw,1rem)]
              hover:text-[#00BCF8]
              hover:border-[#00BCF8]
            "
          >
            <span
              className="
                absolute left-1/2 -bottom-[2px]
                h-[2px] w-0
                bg-[#00BCF8]
                transition-all duration-300
                hover:w-full
                hover:left-0
              "
            />
            View Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;

