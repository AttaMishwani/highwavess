import React from "react";
import { ExternalLink } from "lucide-react";

const PortfolioCard = ({ project }) => {
  const { name, industry, image, link } = project;

  return (
    <div className="universal-card portfolio-card group">
      {/* Image */}
      <div className="relative h-56 w-full overflow-hidden rounded-xl will-change-transform">

        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-700
          group-hover:scale-105
          motion-reduce:transform-none"

          loading="lazy"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold tracking-tight">
          {name}
        </h3>

        <p className="text-text-secondary text-sm mt-1 mb-5">
          {industry}
        </p>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium
                     bg-white/5 border border-white/10
                     hover:bg-[#00C6FF] hover:text-black
                     transition-all duration-300"
        >
          Visit Website <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
};

export default PortfolioCard;
