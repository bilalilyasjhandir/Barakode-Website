import { useTranslation } from "react-i18next";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { FaCode, FaMobile, FaCloud, FaCogs } from "react-icons/fa";

/**
 * Custom hook that returns all site content with i18n translations applied.
 * Components should use this instead of importing from content.jsx directly.
 * 
 * Usage:
 *   const { homepage, navbar, footer, ... } = useContent();
 */
export default function useContent() {
  const { t } = useTranslation();

  const homepage = {
    section1: {
      globe_description: t("home.section1.globeDescription"),
      first_button: t("home.section1.firstButton"),
      second_button: t("home.section1.secondButton"),
    },
    section2: {
      heading: t("home.section2.heading"),
      description: t("home.section2.description"),
      feature_cards: [
        {
          title: t("home.section2.cards.webDev.title"),
          content: t("home.section2.cards.webDev.content"),
          icon: FaCode,
        },
        {
          title: t("home.section2.cards.appDev.title"),
          content: t("home.section2.cards.appDev.content"),
          icon: FaMobile,
        },
        {
          title: t("home.section2.cards.cloudDev.title"),
          content: t("home.section2.cards.cloudDev.content"),
          icon: FaCloud,
        },
        {
          title: t("home.section2.cards.aiDev.title"),
          content: t("home.section2.cards.aiDev.content"),
          icon: FaCogs,
        },
      ],
    },
    section3: {
      heading: t("home.section3.heading"),
      cards: [
        {
          title: t("home.section3.cards.qa.title"),
          description: t("home.section3.cards.qa.description"),
        },
        {
          title: t("home.section3.cards.marketing.title"),
          description: t("home.section3.cards.marketing.description"),
        },
        {
          title: t("home.section3.cards.support.title"),
          description: t("home.section3.cards.support.description"),
        },
      ],
    },
    section4: {
      title: t("home.section4.title"),
      steps: [
        {
          title: t("home.section4.steps.design.title"),
          desc: t("home.section4.steps.design.desc"),
          label: t("home.section4.steps.design.label"),
        },
        {
          title: t("home.section4.steps.develop.title"),
          desc: t("home.section4.steps.develop.desc"),
          label: t("home.section4.steps.develop.label"),
        },
        {
          title: t("home.section4.steps.deliver.title"),
          desc: t("home.section4.steps.deliver.desc"),
          label: t("home.section4.steps.deliver.label"),
        },
      ],
    },
    section5: {},
    section6: {
      title: t("home.section6.title"),
      reviews: [
        {
          name: "Ayesha Khan",
          username: "@ayesha",
          body: t("home.section6.reviews.ayesha.body"),
          img: "/imgs/How_to_cook_logo.svg",
        },
        {
          name: "Daniel Roberts",
          username: "@daniel",
          body: t("home.section6.reviews.daniel.body"),
          img: "/imgs/Traffic-logo.jpg",
        },
        {
          name: "Fatima Ali",
          username: "@fatima",
          body: t("home.section6.reviews.fatima.body"),
          img: "/imgs/Tourist-logo.jpg",
        },
        {
          name: "Omar Sheikh",
          username: "@omar",
          body: t("home.section6.reviews.omar.body"),
          img: "/imgs/V&D-logo.png",
        },
        {
          name: "Sophia Taylor",
          username: "@sophia",
          body: t("home.section6.reviews.sophia.body"),
          img: "/imgs/Audnex-logo.jpg",
        },
        {
          name: "Michael Zhang",
          username: "@michael",
          body: t("home.section6.reviews.michael.body"),
          img: "/imgs/iq-bridge-logo.png",
        },
      ],
      title2: t("home.section6.title2"),
      projects: [
        {
          title: t("home.section6.projects.webweave.title"),
          description: t("home.section6.projects.webweave.description"),
          img: "/imgs/webweave.jpeg",
        },
        {
          title: t("home.section6.projects.workwise.title"),
          description: t("home.section6.projects.workwise.description"),
          img: "/imgs/workwise.jpeg",
        },
        {
          title: t("home.section6.projects.skymapr.title"),
          description: t("home.section6.projects.skymapr.description"),
          img: "/imgs/satellite.jpeg",
        },
      ],
    },
    section7: {
      title: t("home.section7.title"),
      description: t("home.section7.description"),
      first_button: t("home.section7.firstButton"),
      second_button: t("home.section7.secondButton"),
    },
    section8: {
      title: t("home.section8.title"),
      faqs: [
        { question: t("home.section8.faqs.q1.question"), answer: t("home.section8.faqs.q1.answer") },
        { question: t("home.section8.faqs.q2.question"), answer: t("home.section8.faqs.q2.answer") },
        { question: t("home.section8.faqs.q3.question"), answer: t("home.section8.faqs.q3.answer") },
        { question: t("home.section8.faqs.q4.question"), answer: t("home.section8.faqs.q4.answer") },
        { question: t("home.section8.faqs.q5.question"), answer: t("home.section8.faqs.q5.answer") },
        { question: t("home.section8.faqs.q6.question"), answer: t("home.section8.faqs.q6.answer") },
        { question: t("home.section8.faqs.q7.question"), answer: t("home.section8.faqs.q7.answer") },
        { question: t("home.section8.faqs.q8.question"), answer: t("home.section8.faqs.q8.answer") },
      ],
      description: t("home.section8.description"),
      button: t("home.section8.button"),
    },
  };

  const aboutpage = {
    section1: {
      title: [t("about.section1.title"), t("about.section1.titleHighlight")],
      subtitle: t("about.section1.subtitle"),
      img: "/imgs/placeholder.png",
    },
    section2: {
      title: t("about.section2.title"),
      items: [
        {
          title: t("about.section2.chapters.ch1.title"),
          description: t("about.section2.chapters.ch1.description"),
          image: "https://images.unsplash.com/photo-1732310216648-603c0255c000?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
          className: "absolute bottom-80 left-[20%] rotate-[-5deg]",
        },
        {
          title: t("about.section2.chapters.ch2.title"),
          description: t("about.section2.chapters.ch2.description"),
          image: "https://images.unsplash.com/photo-1697909623564-3dae17f6c20b?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3",
          className: "absolute top-40 left-[25%] rotate-[-7deg]",
        },
        {
          title: t("about.section2.chapters.ch3.title"),
          description: t("about.section2.chapters.ch3.description"),
          image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=2600&auto=format&fit=crop&ixlib=rb-4.0.3",
          className: "absolute top-5 left-[40%] rotate-[8deg]",
        },
        {
          title: t("about.section2.chapters.ch4.title"),
          description: t("about.section2.chapters.ch4.description"),
          image: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=3648&auto=format&fit=crop&ixlib=rb-4.0.3",
          className: "absolute top-32 left-[55%] rotate-[10deg]",
        },
        {
          title: t("about.section2.chapters.ch5.title"),
          description: t("about.section2.chapters.ch5.description"),
          image: "https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3",
          className: "absolute top-20 right-[35%] rotate-[2deg]",
        },
        {
          title: t("about.section2.chapters.ch6.title"),
          description: t("about.section2.chapters.ch6.description"),
          image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3",
          className: "absolute top-24 left-[45%] rotate-[-7deg]",
        },
        {
          title: t("about.section2.chapters.ch7.title"),
          description: t("about.section2.chapters.ch7.description"),
          image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3",
          className: "absolute top-8 left-[30%] rotate-[4deg]",
        },
      ],
    },
    section3: {
      title: t("about.section3.title"),
      tagline: t("about.section3.tagline"),
      items: [
        {
          title: t("about.section3.items.innovation.title"),
          description: t("about.section3.items.innovation.description"),
          header: t("about.section3.items.innovation.header"),
          className: "md:col-span-2",
        },
        {
          title: t("about.section3.items.digital.title"),
          description: t("about.section3.items.digital.description"),
          header: t("about.section3.items.digital.header"),
          className: "md:col-span-1",
        },
        {
          title: t("about.section3.items.design.title"),
          description: t("about.section3.items.design.description"),
          header: t("about.section3.items.design.header"),
          className: "md:col-span-1",
        },
        {
          title: t("about.section3.items.communication.title"),
          description: t("about.section3.items.communication.description"),
          header: t("about.section3.items.communication.header"),
          className: "md:col-span-2",
        },
      ],
    },
    section4: {
      hypertext: t("about.section4.hypertext"),
      fliptext: t("about.section4.fliptext"),
    },
  };

  const servicespage = {
    section1: {
      title: [t("services.section1.title1"), t("services.section1.title2"), t("services.section1.title3")],
      subtitle: t("services.section1.subtitle"),
    },
    section2: {
      title: t("services.section2.title"),
      subtitle: t("services.section2.subtitle"),
      packages: [
        {
          title: t("services.section2.packages.eventHorizon.title"),
          subtitle: t("services.section2.packages.eventHorizon.subtitle"),
          features: t("services.section2.packages.eventHorizon.features", { returnObjects: true }),
        },
        {
          title: t("services.section2.packages.quantumLeap.title"),
          subtitle: t("services.section2.packages.quantumLeap.subtitle"),
          features: t("services.section2.packages.quantumLeap.features", { returnObjects: true }),
        },
        {
          title: t("services.section2.packages.singularityPrime.title"),
          subtitle: t("services.section2.packages.singularityPrime.subtitle"),
          features: t("services.section2.packages.singularityPrime.features", { returnObjects: true }),
        },
      ],
    },
    section3: {
      title: t("services.section3.title"),
      subtitle: t("services.section3.subtitle"),
      timeline_data: [
        {
          title: t("services.section3.timeline.research.title"),
          content: (
            <div className="py-10">
              <p className="mb-8 text-xs font-normal text-white-800 md:text-sm dark:text-white-200">
                {t("services.section3.timeline.research.description")}
              </p>
              <div className="grid grid-cols-2 gap-4">
                <img src="/imgs/Research.webp" alt="research" width={500} height={500} className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
                <img src="/imgs/Research-2.jpg" alt="research" width={500} height={500} className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
                <img src="/imgs/Research-4.png" alt="research" width={500} height={500} className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
                <img src="/imgs/Research-3.jpg" alt="research" width={500} height={500} className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
              </div>
            </div>
          ),
        },
        {
          title: t("services.section3.timeline.design.title"),
          content: (
            <div className="py-10">
              <p className="mb-8 text-xs font-normal text-white-800 md:text-sm dark:text-white-200">
                {t("services.section3.timeline.design.description1")}
              </p>
              <p className="mb-8 text-xs font-normal text-white-800 md:text-sm dark:text-white-200">
                {t("services.section3.timeline.design.description2")}
              </p>
              <div className="grid grid-cols-2 gap-4">
                <img src="/imgs/Design-1.png" alt="design" width={500} height={500} className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
                <img src="/imgs/Design-2.png" alt="design" width={500} height={500} className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
                <img src="/imgs/Design-3.png" alt="design" width={500} height={500} className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
                <img src="/imgs/Design-4.jpeg" alt="design" width={500} height={500} className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
              </div>
            </div>
          ),
        },
        {
          title: t("services.section3.timeline.develop.title"),
          content: (
            <div className="py-10">
              <p className="mb-4 text-xs font-normal text-white md:text-sm dark:text-white-200">
                {t("services.section3.timeline.develop.description1")}
              </p>
              <p className="mb-4 text-xs font-normal text-white md:text-sm dark:text-white-200">
                {t("services.section3.timeline.develop.description2")}
              </p>
              <div className="grid grid-cols-2 gap-4">
                <img src="/imgs/Development-1.jpeg" alt="develop" width={500} height={500} className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
                <img src="/imgs/Development-2.jpg" alt="develop" width={500} height={500} className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
                <img src="/imgs/Development-3.jpg" alt="develop" width={500} height={500} className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
                <img src="/imgs/Development-4.jpg" alt="develop" width={500} height={500} className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
              </div>
            </div>
          ),
        },
        {
          title: t("services.section3.timeline.delivery.title"),
          content: (
            <div className="py-10">
              <p className="mb-4 text-xs font-normal text-white md:text-sm dark:text-white-200">
                {t("services.section3.timeline.delivery.description1")}
              </p>
              <p className="mb-4 text-xs font-normal text-white md:text-sm dark:text-white-200">
                {t("services.section3.timeline.delivery.description2")}
              </p>
              <div className="grid grid-cols-2 gap-4">
                <img src="https://assets.aceternity.com/pro/hero-sections.png" alt="delivery" width={500} height={500} className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
                <img src="https://assets.aceternity.com/features-section.png" alt="delivery" width={500} height={500} className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
                <img src="https://assets.aceternity.com/pro/bento-grids.png" alt="delivery" width={500} height={500} className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
                <img src="https://assets.aceternity.com/cards.png" alt="delivery" width={500} height={500} className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
              </div>
            </div>
          ),
        },
      ],
    },
    section4: {
      title: t("services.section4.title"),
      subtitle: t("services.section4.subtitle"),
      services: [
        {
          title: t("services.section4.services.webDev.title"),
          description: t("services.section4.services.webDev.descriptions", { returnObjects: true }),
        },
        {
          title: t("services.section4.services.mobileDev.title"),
          description: t("services.section4.services.mobileDev.descriptions", { returnObjects: true }),
        },
        {
          title: t("services.section4.services.uiux.title"),
          description: t("services.section4.services.uiux.descriptions", { returnObjects: true }),
        },
        {
          title: t("services.section4.services.aiMl.title"),
          description: t("services.section4.services.aiMl.descriptions", { returnObjects: true }),
        },
        {
          title: t("services.section4.services.cloudDev.title"),
          description: t("services.section4.services.cloudDev.descriptions", { returnObjects: true }),
        },
        {
          title: t("services.section4.services.qa.title"),
          description: t("services.section4.services.qa.descriptions", { returnObjects: true }),
        },
      ],
    },
  };

  const portfoliopage = {
    section1: {
      title: [
        t("portfolio.section1.title1"),
        t("portfolio.section1.title2"),
        t("portfolio.section1.title3"),
        t("portfolio.section1.title4"),
      ],
      subtitle: t("portfolio.section1.subtitle"),
    },
    section2: {
      content: {
        title: t("portfolio.section2.title"),
        tagline: [t("portfolio.section2.tagline1"), t("portfolio.section2.tagline2")],
        project: [
          t("portfolio.section2.project1Name"),
          t("portfolio.section2.project1Desc"),
          t("portfolio.section2.project2Name"),
          t("portfolio.section2.project2Desc"),
        ],
        images: ["/imgs/placeholder.png", "/imgs/placeholder.png"],
      },
      images: [
        "/imgs/workwise.jpeg", "/imgs/satellite.jpeg", "/imgs/webweave.jpeg", "/imgs/sketch.jpeg", "/imgs/voc.jpeg",
        "/imgs/workwise.jpeg", "/imgs/satellite.jpeg", "/imgs/webweave.jpeg", "/imgs/sketch.jpeg", "/imgs/voc.jpeg",
        "/imgs/workwise.jpeg", "/imgs/satellite.jpeg", "/imgs/webweave.jpeg", "/imgs/sketch.jpeg", "/imgs/voc.jpeg",
        "/imgs/workwise.jpeg", "/imgs/satellite.jpeg", "/imgs/webweave.jpeg", "/imgs/sketch.jpeg", "/imgs/voc.jpeg",
        "/imgs/workwise.jpeg", "/imgs/satellite.jpeg", "/imgs/webweave.jpeg", "/imgs/sketch.jpeg", "/imgs/voc.jpeg",
        "/imgs/workwise.jpeg", "/imgs/satellite.jpeg", "/imgs/webweave.jpeg", "/imgs/sketch.jpeg", "/imgs/voc.jpeg",
      ],
    },
    section3: {
      title: t("portfolio.section3.title"),
      subtitle: t("portfolio.section3.subtitle"),
      caseStudies: [
        { title: t("portfolio.section3.caseStudies.workwise.title"), filename: "Workwise-MobileApp.pdf", description: t("portfolio.section3.caseStudies.workwise.description"), url: "/Case Studies/Workwise-MobileApp.pdf" },
        { title: t("portfolio.section3.caseStudies.satellite.title"), filename: "satellite_Image_Matcher.pdf", description: t("portfolio.section3.caseStudies.satellite.description"), url: "/Case Studies/satellite_Image_Matcher.pdf" },
        { title: t("portfolio.section3.caseStudies.webweave.title"), filename: "webweave_webscrapping.pdf", description: t("portfolio.section3.caseStudies.webweave.description"), url: "/Case Studies/webweave_webscrapping.pdf" },
        { title: t("portfolio.section3.caseStudies.sketch.title"), filename: "sketch_to_image app.pdf", description: t("portfolio.section3.caseStudies.sketch.description"), url: "/Case Studies/sketch_to_image app.pdf" },
        { title: t("portfolio.section3.caseStudies.voc.title"), filename: "voc_segmentation_app.pdf", description: t("portfolio.section3.caseStudies.voc.description"), url: "/Case Studies/voc_segmentation_app.pdf" },
        { title: t("portfolio.section3.caseStudies.mentorme.title"), filename: "MentorMe_HiringApp.pdf", description: t("portfolio.section3.caseStudies.mentorme.description"), url: "/Case Studies/MentorMe_HiringApp.pdf" },
        { title: t("portfolio.section3.caseStudies.glaucoma.title"), filename: "Glaucoma_detection.pdf", description: t("portfolio.section3.caseStudies.glaucoma.description"), url: "/Case Studies/Glaucoma_detection.pdf" },
        { title: t("portfolio.section3.caseStudies.signature.title"), filename: "Signature_Recognition_using_CNN.pdf", description: t("portfolio.section3.caseStudies.signature.description"), url: "/Case Studies/Signature_Recognition_using_CNN.pdf" },
        { title: t("portfolio.section3.caseStudies.blockchain.title"), filename: "blockchain.pdf", description: t("portfolio.section3.caseStudies.blockchain.description"), url: "/Case Studies/blockchain.pdf" },
        { title: t("portfolio.section3.caseStudies.intel.title"), filename: "intel_image_classifier.pdf", description: t("portfolio.section3.caseStudies.intel.description"), url: "/Case Studies/intel_image_classifier.pdf" },
        { title: t("portfolio.section3.caseStudies.pdfbot.title"), filename: "pdfbot.pdf", description: t("portfolio.section3.caseStudies.pdfbot.description"), url: "/Case Studies/pdfbot.pdf" },
        { title: t("portfolio.section3.caseStudies.rushhour.title"), filename: "rushhourgame.pdf", description: t("portfolio.section3.caseStudies.rushhour.description"), url: "/Case Studies/rushhourgame.pdf" },
        { title: t("portfolio.section3.caseStudies.brickbreaker.title"), filename: "brickbreaker.pdf", description: t("portfolio.section3.caseStudies.brickbreaker.description"), url: "/Case Studies/brickbreaker.pdf" },
        { title: t("portfolio.section3.caseStudies.stitch.title"), filename: "Stitch Design.pdf", description: t("portfolio.section3.caseStudies.stitch.description"), url: "/Case Studies/Stitch Design.pdf" },
        { title: t("portfolio.section3.caseStudies.alexnet.title"), filename: "alexnet_case_study.pdf", description: t("portfolio.section3.caseStudies.alexnet.description"), url: "/Case Studies/alexnet_case_study.pdf" },
        { title: t("portfolio.section3.caseStudies.bovw.title"), filename: "BoVW_Case_Study.pdf", description: t("portfolio.section3.caseStudies.bovw.description"), url: "/Case Studies/BoVW_Case_Study.pdf" },
        { title: t("portfolio.section3.caseStudies.botanist.title"), filename: "Botnist.pdf", description: t("portfolio.section3.caseStudies.botanist.description"), url: "/Case Studies/Botnist.pdf" },
        { title: t("portfolio.section3.caseStudies.hallucination.title"), filename: "Hallucination_Detection_with_Logistic_Regression.pdf", description: t("portfolio.section3.caseStudies.hallucination.description"), url: "/Case Studies/Hallucination_Detection_with_Logistic_Regression.pdf" },
        { title: t("portfolio.section3.caseStudies.lstm.title"), filename: "Report_Word_Completion_using_LSTM.pdf", description: t("portfolio.section3.caseStudies.lstm.description"), url: "/Case Studies/Report_Word_Completion_using_LSTM.pdf" },
        { title: t("portfolio.section3.caseStudies.signatureGen.title"), filename: "signature_generation.pdf", description: t("portfolio.section3.caseStudies.signatureGen.description"), url: "/Case Studies/signature_generation.pdf" },
      ],
    },
  };

  const hirepage = {
    section1: {
      title: t("hire.section1.title"),
      subtitle: t("hire.section1.subtitle"),
    },
    section2: {
      title: t("hire.section2.title"),
      subtitle: t("hire.section2.subtitle"),
    },
  };

  const navbar = {
    title: ["Barakode", "."],
    pages: [
      { link: "/", name: t("navbar.home") },
      { link: "/about-us", name: t("navbar.about") },
      { link: "/service", name: t("navbar.services") },
      { link: "/portfolio", name: t("navbar.portfolio") },
      { link: "/contact-us", name: t("navbar.contact") },
      { link: "/hire", name: t("navbar.hire") },
    ],
  };

  const footer = {
    company: {
      name: t("footer.companyName"),
      logo: "/imgs/singularity-white.png",
      highlight: t("footer.companyHighlight"),
      description: t("footer.description"),
      email_placeholder: t("footer.emailPlaceholder"),
      email_button: t("footer.emailButton"),
    },
    quickLinks: [
      { name: t("footer.links.home"), href: "/" },
      { name: t("footer.links.aboutUs"), href: "/about-us" },
      { name: t("footer.links.services"), href: "/services" },
      { name: t("footer.links.portfolio"), href: "/portfolio" },
      { name: t("footer.links.hire"), href: "/hire" },
      { name: t("footer.links.contactUs"), href: "/contact-us" },
    ],
    resources: [
      { name: "Help Center", href: "#" },
      { name: "FAQs", href: "#" },
      { name: "Case Studies", href: "#" },
      { name: "Webinars", href: "#" },
      { name: "E-books", href: "#" },
    ],
    social: [
      { name: t("footer.social.linkedin"), href: "https://www.linkedin.com/company/barakode-technologies/", icon: Linkedin },
      { name: t("footer.social.twitter"), href: "https://x.com/barakode1", icon: Twitter },
      { name: t("footer.social.instagram"), href: "https://www.instagram.com/barakodetechnologies/", icon: Instagram },
      { name: t("footer.social.whatsapp"), href: "https://wa.me/923322060667", icon: Facebook },
    ],
    policies: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
    ],
    copyright: t("footer.copyright"),
  };

  const contactpage = {};

  const social_links = {
    whatsapp: "https://wa.barakodetechnologies.com",
    instagram: "https://instagram.barakodetechnologies.com",
    linkedin: "https://linkedin.barakodetechnologies.com",
    twitter: "https://twitter.barakodetechnologies.com",
    gmb: "https://gmb.barakodetechnologies.com",
  };

  return {
    homepage,
    aboutpage,
    servicespage,
    portfoliopage,
    hirepage,
    navbar,
    footer,
    contactpage,
    social_links,
  };
}
