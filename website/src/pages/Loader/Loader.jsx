import React from "react";
import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { AuroraText } from "@/components/magicui/aurora-text";

export default function Loader() {
  return (
    <AuroraBackground className="relative flex items-center justify-center h-screen bg-black text-white overflow-hidden px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center space-y-8 z-10"
      >
        {/* Barakode Logo Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center justify-center mb-4"
        >
          <motion.img
            src="/imgs/singularity-white.png"
            alt="Barakode Logo"
            className="w-20 h-20 md:w-24 md:h-24"
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 2, 
              ease: "easeInOut" 
            }}
          />
        </motion.div>

        {/* Animated Loading Bar */}
        <motion.div 
          className="w-64 md:w-80 h-1.5 bg-gray-800 rounded-full overflow-hidden mx-auto"
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "16rem" }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-[#c18b34] via-[#e0b352] to-[#ffe29a]"
            animate={{ 
              x: ["-100%", "100%"],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 1.5, 
              ease: "easeInOut" 
            }}
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold leading-tight"
        >
          <AuroraText
            colors={["#fff3c4", "#c18b34", "#86602c", "#ffe29a", "#e0b352"]}
            className="inline"
          >
            Barakode
          </AuroraText>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="text-base md:text-lg text-gray-300 max-w-xl mx-auto"
        >
          Preparing your digital experience...
        </motion.p>

        {/* Pulsing dots */}
        <motion.div 
          className="flex gap-2 justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-[#c18b34] rounded-full"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 1.2,
                delay: i * 0.2,
                ease: "easeInOut" 
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </AuroraBackground>
  );
}
