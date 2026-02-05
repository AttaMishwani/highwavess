import React from "react";

const WhyChooseUsCard = React.memo(({ icon, title, desc }) => {
  return (
    <div
      data-why-card
      className="theme-card bg-[#0B1220]/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 text-center border border-[#00BCF8]/10 shadow-[0_0_25px_-8px_#00BCF8]/10 hover:shadow-[0_0_40px_-8px_#00BCF8]/30 transition-all duration-500 hover:-translate-y-2"
      style={{ willChange: 'transform, opacity' }}
    >
      <div className="flex flex-col items-center space-y-4">
        <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#00BCF8]/10 to-[#00BCF8]/10">
          {icon}
        </div>
        <h3 className="text-lg sm:text-xl font-semibold text-text-primary">{title}</h3>
        <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
});

export default WhyChooseUsCard;

