import React from "react";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import HomeButton from "@/pages/Home/Components/HomeButton/HomeButton";

export default function Section1Template({ title, subtitle, buttonText }) {
  return (
    <HeroHighlight
      className="h-screen w-full flex items-center justify-center px-4 text-white relative overflow-hidden"
      data-theme="dark"
    >
      {/* Yellowish grid background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(193, 139, 19, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(193, 139, 19, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          backgroundPosition: 'center center'
        }}
      />
      
      {/* Content with background overlay for readability */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>
      
      <motion.div
        className="text-center max-w-4xl mx-auto relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0.0, 0.2, 1] }}
          className="text-3xl md:text-5xl font-bold leading-relaxed lg:leading-snug"
        >
          {title}
        </motion.h1>

        <motion.p
          className="mt-4 text-base md:text-lg text-gray-300"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {subtitle}
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <HomeButton name={buttonText || "Get a Quote"} to="/contact-us" />
          </motion.div>
        </motion.div>
      </motion.div>
    </HeroHighlight>
  );
}