import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import HomeButton from "../HomeButton/HomeButton";
import { Users, Briefcase, UserCheck, Calendar } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Section1({ content }) {
  const { t } = useTranslation();
  const [counts, setCounts] = useState({
    clients: 0,
    projects: 0,
    team: 0,
    years: 0
  });

  useEffect(() => {
    const animateCount = (key, target, duration = 2000) => {
      let start = 0;
      const increment = target / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCounts(prev => ({ ...prev, [key]: target }));
          clearInterval(timer);
        } else {
          setCounts(prev => ({ ...prev, [key]: Math.floor(start) }));
        }
      }, 16);
    };

    // Start animations with delays
    const timer1 = setTimeout(() => animateCount('clients', 70), 1500);
    const timer2 = setTimeout(() => animateCount('projects', 100), 1700);
    const timer3 = setTimeout(() => animateCount('team', 20), 1900);
    const timer4 = setTimeout(() => animateCount('years', 8), 2100);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  return (
    <HeroHighlight
      className="h-screen w-full flex items-center justify-center px-4 text-white bg-black"
      data-theme="dark"
    >
      <motion.div
        className="text-center max-w-4xl mx-auto"
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
{t("home.section1.heroTitle")}
          <Highlight className="text-white">{t("home.section1.heroHighlight")}</Highlight>
        </motion.h1>

        <motion.p
          className="mt-4 text-base md:text-lg text-gray-400"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
{t("home.section1.heroSubtitle")}
       </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <HomeButton name={content.first_button} to="/portfolio" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <HomeButton name={content.second_button} to="/contact-us" />
          </motion.div>
        </motion.div>

        {/* Statistics Boxes */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.div
            className="relative group"
            whileHover={{ scale: 1.02, y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <div className="relative backdrop-blur-sm bg-white/5 border border-white/10 p-4 rounded-lg shadow-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/3 to-transparent"></div>
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <motion.div
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
                  >
                    <Users className="w-5 h-5 text-[#c18b13]" />
                  </motion.div>
                  <div>
                    <motion.div
                      className="text-xl font-bold text-white"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1.6, type: "spring", stiffness: 200 }}
                    >
                      {counts.clients}+
                    </motion.div>
                    <div className="text-xs text-white/70">{t("home.section1.stats.clients")}</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative group"
            whileHover={{ scale: 1.02, y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <div className="relative backdrop-blur-sm bg-white/5 border border-white/10 p-4 rounded-lg shadow-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/3 to-transparent"></div>
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <motion.div
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 1.7, type: "spring", stiffness: 200 }}
                  >
                    <Briefcase className="w-5 h-5 text-[#c18b43]" />
                  </motion.div>
                  <div>
                    <motion.div
                      className="text-xl font-bold text-white"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1.8, type: "spring", stiffness: 200 }}
                    >
                      {counts.projects}+
                    </motion.div>
                    <div className="text-xs text-white/70">{t("home.section1.stats.projects")}</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative group"
            whileHover={{ scale: 1.02, y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <div className="relative backdrop-blur-sm bg-white/5 border border-white/10 p-4 rounded-lg shadow-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/3 to-transparent"></div>
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <motion.div
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 1.9, type: "spring", stiffness: 200 }}
                  >
                    <UserCheck className="w-5 h-5 text-[#86602c]" />
                  </motion.div>
                  <div>
                    <motion.div
                      className="text-xl font-bold text-white"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 2.0, type: "spring", stiffness: 200 }}
                    >
                      {counts.team}+
                    </motion.div>
                    <div className="text-xs text-white/70">{t("home.section1.stats.team")}</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative group"
            whileHover={{ scale: 1.02, y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <div className="relative backdrop-blur-sm bg-white/5 border border-white/10 p-4 rounded-lg shadow-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/3 to-transparent"></div>
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <motion.div
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 2.1, type: "spring", stiffness: 200 }}
                  >
                    <Calendar className="w-5 h-5 text-[#c18b13]" />
                  </motion.div>
                  <div>
                    <motion.div
                      className="text-xl font-bold text-white"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 2.2, type: "spring", stiffness: 200 }}
                    >
                      {counts.years}+
                    </motion.div>
                    <div className="text-xs text-white/70">{t("home.section1.stats.years")}</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </HeroHighlight>
  );
}
