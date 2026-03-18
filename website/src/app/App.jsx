import React, { useEffect } from "react";
import Hero from "../pages/Home/Home";
import { BrowserRouter as Router } from "react-router-dom";
import { Pointer } from "@/components/magicui/pointer";
import "./App.css";
import AppRoutes from "./AppRoutes";
import Footer from "../pages/Components/Footer/Footer";
import Navbar from "../pages/Components/Navbar/Navbar";
import AssistiveBall from "../pages/Components/AssistiveBall/AssistiveBall";
import CursorWithNamePrompt from "./CursorWithName";
import ScrollToTop from "@/hooks/ScrollToTop";
import Greet from "@/pages/greet/Greet";
import ScrollBack from "./ScrollBack";
import SplashCursor from "@/components/SplashCursor";
import { StickyBanner } from "@/components/ui/sticky-banner";



export function StickyBannerDemo() {
  return (
      <StickyBanner className="bg-gradient-to-b from-blue-500 to-blue-600">
        <p className="mb-0 max-w-[90%] text-white drop-shadow-md">
          Announcing $10M seed funding from project mayhem ventures.{" "}
          <a href="#" className="transition duration-200 hover:underline">
            Read announcement
          </a>
        </p>
      </StickyBanner>
  );
}

const DummyContent = () => {
  return (
    <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-10 py-8">
      <div
        className="h-96 w-full animate-pulse rounded-lg bg-neutral-100 dark:bg-neutral-800" />
      <div
        className="h-96 w-full animate-pulse rounded-lg bg-neutral-100 dark:bg-neutral-800" />
      <div
        className="h-96 w-full animate-pulse rounded-lg bg-neutral-100 dark:bg-neutral-800" />
    </div>
  );
};



function App() {
  useEffect(() => {
    // Only block dev tools in production
    if (import.meta.env.PROD) {
      const blockDevTools = (e) => {
        if (
          e.key === "F12" ||
          (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key))
        ) {
          e.preventDefault();
        }
      };

      const blockContextMenu = (e) => e.preventDefault();

      document.addEventListener("keydown", blockDevTools);
      document.addEventListener("contextmenu", blockContextMenu);

      return () => {
        document.removeEventListener("keydown", blockDevTools);
        document.removeEventListener("contextmenu", blockContextMenu);
      };
    }
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <SplashCursor />
      <ScrollBack />

      {/* Move Navbar & Footer inside AppRoutes */}
      <AppRoutes />

    </Router>
  );
}

export default App;
