import React from "react";
import { motion } from "framer-motion";

export default function HireSection1Template({ title, subtitle }) {
  return (
    <section
      className="h-screen w-full flex items-center justify-center px-4 text-white relative overflow-hidden bg-black"
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
      </motion.div>
    </section>
  );
}