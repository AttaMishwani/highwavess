import React from "react";

const ServiceCard = React.memo(({ icon, title, description, tech }) => {
  return (
    <div data-service-card className="universal-card p-5 sm:p-6 rounded-xl" style={{ willChange: 'transform, opacity' }}>
      <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#00BCF8]/10 to-[#00BCF8]/10 mb-4">
        {icon}
      </div>

      <h3 className="text-lg sm:text-xl font-semibold mb-2 leading-tight">
        {title}
      </h3>

      <p className="text-text-secondary text-sm sm:text-base mb-2">
        {description}
      </p>

      {tech ? (
        <p className="text-xs sm:text-sm text-glowBlue/80 italic">{tech}</p>
      ) : null}
    </div>
  );
});

export default ServiceCard;

