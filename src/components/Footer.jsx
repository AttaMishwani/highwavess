import React from "react";
import { Mail, Phone, MapPin, QrCode } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="relative text-text-primary py-16 px-4 sm:px-12 lg:px-20 font-[Poppins] mt-30">
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        
        {/* Contact Info */}
        <div className="w-full">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 bg-gradient-to-r from-[#00BCF8] to-[#00BCF8] bg-clip-text text-transparent">
            Contact Us
          </h3>

          <ul className="space-y-4 text-text-secondary text-sm sm:text-base">
            <li className="flex items-start gap-3 break-words">
              <MapPin size={20} className="text-[#00BCF8] flex-shrink-0" />
              <span>Karachi, Pakistan</span>
            </li>

            <li className="flex items-start gap-3 break-words">
              <Mail size={20} className="text-[#00BCF8] flex-shrink-0" />
              <a
                href="mailto:highwavessoftwaresolutions@gmail.com"
                className="hover:text-[#00BCF8] transition-colors break-words"
              >
                highwavessoftwaresolutions@gmail.com
              </a>
            </li>

            <li className="flex items-start gap-3 break-words">
              <Phone size={20} className="text-[#00BCF8] flex-shrink-0" />
              <a
                href="https://wa.me/923112103355"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#00BCF8] transition-colors break-words"
              >
                0311-2103355
              </a>
            </li>
          </ul>

          {/* QR Code */}
          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm sm:text-base">
            <QrCode size={42} className="text-[#00BCF8] flex-shrink-0" />
            <div className="min-w-0 break-words">
              <p className="text-text-secondary">Scan to Connect</p>
              <a
                href="https://wa.me/923112103355"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00BCF8] hover:underline break-words"
              >
                WhatsApp QR Link
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-text-primary">
            Quick Message
          </h3>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-white/5 dark:bg-white/5 border border-gray-300 dark:border-white/10 text-text-primary text-sm focus:outline-none focus:border-[#00BCF8]"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg bg-white/5 dark:bg-white/5 border border-gray-300 dark:border-white/10 text-text-primary text-sm focus:outline-none focus:border-[#00BCF8]"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-lg bg-white/5 dark:bg-white/5 border border-gray-300 dark:border-white/10 text-text-primary text-sm resize-none focus:outline-none focus:border-[#00BCF8]"
            ></textarea>

            <button
              type="submit"
              className="w-full px-4 py-3 rounded-lg bg-[#00BCF8] text-black text-sm font-medium hover:bg-white transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Divider */}
      <div className="relative z-10 border-t border-gray-200 dark:border-[#1a2438] mt-16 pt-6 text-center text-xs sm:text-sm text-text-secondary break-words">
        © 2026{" "}
        <span className="text-[#00BCF8]">
          High Waves Software Solutions
        </span>{" "}
        – All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;

