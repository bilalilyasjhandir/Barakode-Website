import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("../pages/Home/Home"));
const Portfolio = lazy(() => import("../pages/Portfolio/Portfolio"));
const AboutUs = lazy(() => import("../pages/AboutUs/AboutUs"));
const Service = lazy(() => import("../pages/Services/Services"));
const Hire = lazy(() => import("../pages/Hire/Hire"));
const ContactUs = lazy(() => import("../pages/ContactUs/ContactUs"));
const NotFoundPage = lazy(() => import("@/pages/NotFound/NotFound"));
const LaunchCountdown = lazy(() => import("../pages/LaunchCounter/LaunchCounter"));

// Individual Service Pages
const AIMLDevelopment = lazy(() => import("../pages/Services/IndividualServices/AIMLDevelopment"));
const MobileDevelopment = lazy(() => import("../pages/Services/IndividualServices/MobileDevelopment"));
const WebDevelopment = lazy(() => import("../pages/Services/IndividualServices/WebDevelopment"));
const CloudDevelopment = lazy(() => import("../pages/Services/IndividualServices/CloudDevelopment"));
const UIDesign = lazy(() => import("../pages/Services/IndividualServices/UIDesign"));
const QATesting = lazy(() => import("../pages/Services/IndividualServices/QATesting"));

// Individual Hire Pages
const FullStackDeveloper = lazy(() => import("../pages/Hire/IndividualHirePages/FullStackDeveloper"));
const MobileAppDeveloper = lazy(() => import("../pages/Hire/IndividualHirePages/MobileAppDeveloper"));
const AIMLEngineer = lazy(() => import("../pages/Hire/IndividualHirePages/AIMLEngineer"));
const CloudEngineer = lazy(() => import("../pages/Hire/IndividualHirePages/CloudEngineer"));
const UIUXDesigner = lazy(() => import("../pages/Hire/IndividualHirePages/UIUXDesigner"));
const QAEngineer = lazy(() => import("../pages/Hire/IndividualHirePages/QAEngineer"));

import CursorWithNamePrompt from "./CursorWithName";
import Loader from "@/pages/Loader/Loader";
import Navbar from "@/pages/Components/Navbar/Navbar";
import Footer from "@/pages/Components/Footer/Footer";

function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default function AppRoutes() {
  const now = new Date();
  const launchTime = new Date("2025-07-27T18:00:00+05:30");

  const isBeforeLaunch = now < launchTime;

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {isBeforeLaunch ? (
          // Show only countdown if before launch
          <Route path="*" element={<LaunchCountdown />} />
        ) : (
          <>
            <Route
              path="/"
              element={
                <MainLayout>
                  <Home />
                </MainLayout>
              }
            />
            <Route
              path="/portfolio"
              element={
                <MainLayout>
                  <Portfolio />
                </MainLayout>
              }
            />
            <Route
              path="/about-us"
              element={
                <MainLayout>
                  <AboutUs />
                </MainLayout>
              }
            />
            <Route
              path="/service"
              element={
                <MainLayout>
                  <Service />
                </MainLayout>
              }
            />
            <Route
              path="/service/ai-ml"
              element={
                <MainLayout>
                  <AIMLDevelopment />
                </MainLayout>
              }
            />
            <Route
              path="/service/mobile"
              element={
                <MainLayout>
                  <MobileDevelopment />
                </MainLayout>
              }
            />
            <Route
              path="/service/web"
              element={
                <MainLayout>
                  <WebDevelopment />
                </MainLayout>
              }
            />
            <Route
              path="/service/cloud"
              element={
                <MainLayout>
                  <CloudDevelopment />
                </MainLayout>
              }
            />
            <Route
              path="/service/ui-ux"
              element={
                <MainLayout>
                  <UIDesign />
                </MainLayout>
              }
            />
            <Route
              path="/service/qa-testing"
              element={
                <MainLayout>
                  <QATesting />
                </MainLayout>
              }
            />
            <Route
              path="/hire"
              element={
                <MainLayout>
                  <Hire />
                </MainLayout>
              }
            />
            <Route
              path="/hire/full-stack"
              element={
                <MainLayout>
                  <FullStackDeveloper />
                </MainLayout>
              }
            />
            <Route
              path="/hire/mobile-app"
              element={
                <MainLayout>
                  <MobileAppDeveloper />
                </MainLayout>
              }
            />
            <Route
              path="/hire/ai-ml"
              element={
                <MainLayout>
                  <AIMLEngineer />
                </MainLayout>
              }
            />
            <Route
              path="/hire/cloud"
              element={
                <MainLayout>
                  <CloudEngineer />
                </MainLayout>
              }
            />
            <Route
              path="/hire/ui-ux"
              element={
                <MainLayout>
                  <UIUXDesigner />
                </MainLayout>
              }
            />
            <Route
              path="/hire/qa"
              element={
                <MainLayout>
                  <QAEngineer />
                </MainLayout>
              }
            />
            <Route
              path="/contact-us"
              element={
                <MainLayout>
                  <ContactUs />
                </MainLayout>
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </>
        )}
      </Routes>
    </Suspense>
  );
}