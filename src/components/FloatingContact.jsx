import React, { useEffect, useRef, useState } from "react";
import { MessageCircle, Phone, Mail, X } from "lucide-react";

const FloatingContact = () => {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);

  // close on outside click
  useEffect(() => {
    const onDown = (e) => {
      if (!open) return;
      if (panelRef.current && !panelRef.current.contains(e.target)) setOpen(false);
    };
    window.addEventListener("mousedown", onDown);
    return () => window.removeEventListener("mousedown", onDown);
  }, [open]);

  // close on ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const phoneDisplay = "0311-2103355";
  const phoneIntl = "+923112103355";
  const email = "highwavessoftwaresolutions@gmail.com";
  const waLink = `https://wa.me/${phoneIntl.replace("+", "")}`;

  return (
    <div className="fixed bottom-5 lg:bottom-11 right-[-13.5rem] sm:right-[5rem] lg:right-[-10rem] z-[9999]">
      {/* Panel */}
      <div
        ref={panelRef}
        className={`mb-3 w-72 rounded-2xl border border-white/10 bg-[#0A2235]/95 backdrop-blur-md shadow-xl overflow-hidden transition-all duration-200 ${
          open ? "opacity-100 translate-y-0 translate-x-[-15rem] pointer-events-auto" : "opacity-0 translate-y-3 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
          <div className="text-text-primary font-semibold">Contact</div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="p-2 rounded-lg hover:bg-white/10 transition"
            aria-label="Close"
          >
            <X size={18} className="text-text-primary" />
          </button>
        </div>

        <div className="p-3 space-y-2">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 w-full px-3 py-3 rounded-xl hover:bg-white/10 dark:hover:bg-white/10 transition text-text-primary"
          >
            <MessageCircle size={18} className="text-[#00BCF8]" />
            <div className="min-w-0">
              <div className="text-sm font-medium">WhatsApp</div>
              <div className="text-xs text-text-secondary">{phoneDisplay}</div>
            </div>
          </a>

          <a
            href={`tel:${phoneIntl}`}
            className="flex items-center gap-3 w-full px-3 py-3 rounded-xl hover:bg-white/10 dark:hover:bg-white/10 transition text-text-primary"
          >
            <Phone size={18} className="text-[#00BCF8]" />
            <div className="min-w-0">
              <div className="text-sm font-medium">Call</div>
              <div className="text-xs text-text-secondary">{phoneDisplay}</div>
            </div>
          </a>

          <a
            href={`mailto:${email}`}
            className="flex items-center gap-3 w-full px-3 py-3 rounded-xl hover:bg-white/10 dark:hover:bg-white/10 transition text-text-primary"
          >
            <Mail size={18} className="text-[#00BCF8]" />
            <div className="min-w-0">
              <div className="text-sm font-medium">Email</div>
              <div className="text-xs text-text-secondary break-all">{email}</div>
            </div>
          </a>
        </div>
      </div>

      {/* Floating Button */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="h-14 w-14 rounded-2xl bg-[#00BCF8] text-[#F7F7F7] shadow-lg hover:scale-105 transition flex items-center justify-center"
        aria-label="Open contact menu"
      >
        <MessageCircle size={22} />
      </button>
    </div>
  );
};

export default FloatingContact;

