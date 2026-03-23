"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

const WhatsappButton = () => {
  const phoneNumber = "923193236529";
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  // Hide button on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleClick = () => {
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        "Hello! I'm interested in your services. I'd like to discuss my project requirements with your team."
      )}`,
      "_blank"
    );
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed bottom-6 right-6 z-50"
          onMouseEnter={() => setIsExpanded(true)}
          onMouseLeave={() => setIsExpanded(false)}
        >
          {/* Pulse Animation Ring */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 rounded-full bg-green-500/40"
          />

          {/* Expanded Message Preview */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, x: 20, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="absolute right-full mr-4 bottom-0 bg-[#0F172A] border border-[#1E293B] rounded-2xl shadow-2xl p-4 w-72"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-white mb-1">
                      Chat with Us
                    </h4>
                    <p className="text-xs text-[#94A3B8]">
                      Get quick answers to your questions
                    </p>
                  </div>
                  <button
                    onClick={() => setIsExpanded(false)}
                    className="text-[#94A3B8] hover:text-white transition-colors"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>

                {/* Quick Message Templates */}
                <div className="space-y-2">
                  <button
                    onClick={() => {
                      window.open(
                        `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                          "Hi! I'm interested in your web development services. Can you tell me more?"
                        )}`,
                        "_blank"
                      );
                    }}
                    className="w-full text-left px-3 py-2 bg-[#1E293B] hover:bg-[#2D3A4E] rounded-lg transition-colors group"
                  >
                    <p className="text-xs text-[#94A3B8] group-hover:text-white transition-colors">
                      💻 Web Development Inquiry
                    </p>
                  </button>
                  
                  <button
                    onClick={() => {
                      window.open(
                        `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                          "Hello! I need help with AI solutions for my business. Let's discuss!"
                        )}`,
                        "_blank"
                      );
                    }}
                    className="w-full text-left px-3 py-2 bg-[#1E293B] hover:bg-[#2D3A4E] rounded-lg transition-colors group"
                  >
                    <p className="text-xs text-[#94A3B8] group-hover:text-white transition-colors">
                      🤖 AI Solutions Inquiry
                    </p>
                  </button>
                  
                  <button
                    onClick={() => {
                      window.open(
                        `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                          "Hi! I'm looking for cybersecurity services for my company."
                        )}`,
                        "_blank"
                      );
                    }}
                    className="w-full text-left px-3 py-2 bg-[#1E293B] hover:bg-[#2D3A4E] rounded-lg transition-colors group"
                  >
                    <p className="text-xs text-[#94A3B8] group-hover:text-white transition-colors">
                      🔒 Cybersecurity Inquiry
                    </p>
                  </button>
                </div>

                {/* Divider */}
               

                

                {/* Arrow */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-3 h-3 bg-[#0F172A] border-r border-t border-[#1E293B]" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Button */}
          <motion.button
            onClick={handleClick}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            whileTap={{ scale: 0.95 }}
            className="relative group"
          >
            <div
              className={`
                relative bg-gradient-to-br from-green-500 to-green-600 
                hover:from-green-600 hover:to-green-700 
                text-white p-4 rounded-full shadow-2xl 
                flex items-center justify-center
                transition-all duration-300
                ${isHovered ? "shadow-green-500/50 scale-110" : "shadow-green-500/30"}
              `}
            >
              <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />

              {/* Tooltip */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? -10 : 0 }}
                transition={{ duration: 0.2 }}
                className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-gray-900 text-white text-sm px-3 py-2 rounded-lg shadow-lg pointer-events-none"
              >
                Chat with us on WhatsApp
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 bg-gray-900" />
              </motion.div>
            </div>
          </motion.button>

          {/* Notification Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-lg"
          >
            !
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WhatsappButton;