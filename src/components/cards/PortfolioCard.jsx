import React from "react";
import { ExternalLink } from "lucide-react";

const PortfolioCard = ({ project }) => {
  const { name, industry, image, link } = project;

  return (
    <article className="portfolio-card group overflow-hidden rounded-2xl border border-[#00BCF833] bg-[#0B1220]/60 backdrop-blur-sm shadow-lg hover:shadow-[0_25px_60px_-10px_rgba(0,198,255,0.4)]
                    transition-all duration-500">
      {/* Image */}
      <div className="portfolio-image-scroll relative h-48 sm:h-52 w-full overflow-y-auto overflow-x-hidden">
        <img
          src={image}
          alt={name}
          className="block w-full h-auto object-top"
          loading="lazy"
          decoding="async"
        />
        <div className="portfolio-image-overlay pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="px-5 py-5 sm:px-6">
        <div className="mb-3 flex items-center justify-between gap-3">
          {/* <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#00BCF8]">
            Project
          </p> */}
          <span className="portfolio-chip rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-text-secondary">
            {industry}
          </span>
        </div>

        <h3 className="text-xl font-semibold tracking-tight text-text-primary">
          {name}
        </h3>

        <div className="mt-5">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-text-primary hover:text-[#00BCF8] transition-colors"
            aria-label={`Visit ${name} website`}
          >
            View live site <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </article>
  );
};

export default PortfolioCard;

