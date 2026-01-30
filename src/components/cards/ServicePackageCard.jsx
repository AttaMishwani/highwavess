import React from "react";
import { Clock, DollarSign, CheckSquare } from "lucide-react";

const ServicePackageCard = ({ pkg }) => {
  return (
    <div className="universal-card group relative p-6 flex flex-col justify-between overflow-hidden 
                    bg-[#0E1625]/60 border border-[#00AEEF33] backdrop-blur-md rounded-3xl
                    shadow-lg hover:shadow-[0_25px_60px_-10px_rgba(0,198,255,0.4)]
                    transition-all duration-500 will-change-transform transform hover:-translate-y-2">

      {/* Gradient top bar */}
      <div className="absolute top-0 left-0 w-full h-1 rounded-t-3xl 
                      bg-gradient-to-r from-[#00AEEF] to-[#00C6FF]"></div>

      {/* Content */}
      <div className="relative z-10">
        <h4 className="text-xl font-bold mb-4 group-hover:text-blue-main transition-colors duration-300">
          {pkg.title}
        </h4>

        <ul className="text-text-secondary list-none space-y-2 mb-6">
          {pkg.features.map((f, i) => (
            <li key={i} className="flex items-center gap-3">
              <CheckSquare size={18} className="text-blue-main flex-shrink-0" />
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-2 mb-4">
          <p className="flex items-center gap-2 text-sm text-text-secondary">
            <Clock size={16} /> Delivery: <span className="font-medium">{pkg.delivery}</span>
          </p>
          <p className="flex items-center gap-2 text-lg font-semibold">
            <DollarSign size={16} /> {pkg.price}
          </p>
        </div>

        <button className="w-full py-3 rounded-lg font-semibold 
                           bg-gradient-to-r from-[#00AEEF] to-[#00C6FF]
                           text-black hover:scale-105 hover:shadow-[0_0_25px_5px_rgba(0,198,255,0.45)]
                           transition-all duration-300">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default ServicePackageCard;
