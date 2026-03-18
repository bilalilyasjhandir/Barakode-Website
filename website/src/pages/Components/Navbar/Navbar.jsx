import React, { useState, useEffect, useMemo } from "react";
import CookieBtn from "../CookieBtn/CookieBtn";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import useContent from "@/hooks/useContent";
import { useTranslation } from "react-i18next";
import LanguageToggle from "@/components/LanguageToggle";
import { ChevronDown } from "lucide-react";
import { FaBrain, FaMobileAlt, FaCode, FaCloud, FaPalette, FaBug, FaLaptopCode, FaUserFriends } from "react-icons/fa";

const Navbar = React.memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isHireDropdownOpen, setIsHireDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileHireOpen, setMobileHireOpen] = useState(false);
  const location = useLocation();
  const { navbar } = useContent();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setIsServicesDropdownOpen(false);
    setIsHireDropdownOpen(false);
    setMobileServicesOpen(false);
    setMobileHireOpen(false);
  }, [location.pathname]);

  // Services dropdown options with icons
  const servicesOptions = [
    { name: t("navbar.servicesDropdown.aiMl"), link: "/service/ai-ml", icon: <FaBrain className="text-xl" /> },
    { name: t("navbar.servicesDropdown.mobile"), link: "/service/mobile", icon: <FaMobileAlt className="text-xl" /> },
    { name: t("navbar.servicesDropdown.web"), link: "/service/web", icon: <FaCode className="text-xl" /> },
    { name: t("navbar.servicesDropdown.cloud"), link: "/service/cloud", icon: <FaCloud className="text-xl" /> },
    { name: t("navbar.servicesDropdown.uiux"), link: "/service/ui-ux", icon: <FaPalette className="text-xl" /> },
    { name: t("navbar.servicesDropdown.qa"), link: "/service/qa-testing", icon: <FaBug className="text-xl" /> }
  ];

  // Hire dropdown options with icons
  const hireOptions = [
    { name: t("navbar.hireDropdown.fullStack"), link: "/hire/full-stack", icon: <FaLaptopCode className="text-xl" /> },
    { name: t("navbar.hireDropdown.mobileApp"), link: "/hire/mobile-app", icon: <FaMobileAlt className="text-xl" /> },
    { name: t("navbar.hireDropdown.aiMl"), link: "/hire/ai-ml", icon: <FaBrain className="text-xl" /> },
    { name: t("navbar.hireDropdown.cloud"), link: "/hire/cloud", icon: <FaCloud className="text-xl" /> },
    { name: t("navbar.hireDropdown.uiux"), link: "/hire/ui-ux", icon: <FaPalette className="text-xl" /> },
    { name: t("navbar.hireDropdown.qa"), link: "/hire/qa", icon: <FaBug className="text-xl" /> }
  ];

  return (
    <div
      className={`fixed z-45 left-1/2 -translate-x-1/2 transition-all duration-300 ease-in-out ${
        scrolled
          ? "top-4 w-[95%] md:w-[85%] lg:w-[80%] bg-black/60 backdrop-blur-lg shadow-lg px-6 md:px-10 lg:px-12 py-3 rounded-2xl"
          : "top-0 w-full bg-black px-5 py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href='/' className="cursor-pointer inline-flex items-center">
              <img 
                src="/imgs/company.png" 
                alt="Barakode Technologies" 
className="h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 w-auto"
              />
            </a>
          </div>

          <div className={`hidden xl:flex items-center transition-all duration-300 ${scrolled ? 'gap-8 lg:gap-10' : 'gap-6 lg:gap-8'}`}>
            {navbar.pages.map((page, idx) => {
              // Special handling for Services page
              if (page.link === '/service') {
                return (
                  <div key={idx} className="relative">
                    <div className="flex items-center">
                      <NavLink
                        to={page.link}
                        className={({ isActive }) =>
                          `text-xl transition ${
                            isActive
                              ? "text-light-cream font-bold"
                              : "text-white hover:text-light-cream"
                          }`
                        }
                      >
                        {page.name}
                      </NavLink>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsServicesDropdownOpen(!isServicesDropdownOpen);
                          setIsHireDropdownOpen(false);
                        }}
                        className="ms-1 text-white hover:text-light-cream transition"
                      >
                        <ChevronDown size={16} />
                      </button>
                    </div>
                    
                    {/* Dropdown menu in 3x2 grid */}
                    {isServicesDropdownOpen && (
                      <div 
                        className="absolute start-0 mt-2 w-96 bg-black/90 backdrop-blur-lg rounded-lg shadow-lg py-4 z-50"
                        onMouseLeave={() => setIsServicesDropdownOpen(false)}
                      >
                        <div className="grid grid-cols-2 gap-2 px-4">
                          {servicesOptions.map((option, index) => (
                            <NavLink
                              key={index}
                              to={option.link}
                              className="flex items-center p-3 text-white hover:bg-gray-800 hover:text-light-cream transition rounded-lg"
                              onClick={() => setIsServicesDropdownOpen(false)}
                            >
                              <div className="text-[#c18b13] me-3">
                                {option.icon}
                              </div>
                              <span className="text-sm font-medium">{option.name}</span>
                            </NavLink>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
              
              // Special handling for Hire page
              if (page.link === '/hire') {
                return (
                  <div key={idx} className="relative">
                    <div className="flex items-center">
                      <NavLink
                        to={page.link}
                        className={({ isActive }) =>
                          `text-xl transition ${
                            isActive
                              ? "text-light-cream font-bold"
                              : "text-white hover:text-light-cream"
                          }`
                        }
                      >
                        {page.name}
                      </NavLink>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsHireDropdownOpen(!isHireDropdownOpen);
                          setIsServicesDropdownOpen(false);
                        }}
                        className="ms-1 text-white hover:text-light-cream transition"
                      >
                        <ChevronDown size={16} />
                      </button>
                    </div>
                    
                    {/* Dropdown menu in 3x2 grid */}
                    {isHireDropdownOpen && (
                      <div 
                        className="absolute start-0 mt-2 w-96 bg-black/90 backdrop-blur-lg rounded-lg shadow-lg py-4 z-50"
                        onMouseLeave={() => setIsHireDropdownOpen(false)}
                      >
                        <div className="grid grid-cols-2 gap-2 px-4">
                          {hireOptions.map((option, index) => (
                            <NavLink
                              key={index}
                              to={option.link}
                              className="flex items-center p-3 text-white hover:bg-gray-800 hover:text-light-cream transition rounded-lg"
                              onClick={() => setIsHireDropdownOpen(false)}
                            >
                              <div className="text-[#c18b13] me-3">
                                {option.icon}
                              </div>
                              <span className="text-sm font-medium">{option.name}</span>
                            </NavLink>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
              
              // Regular navigation for other pages
              return (
                <NavLink
                  key={idx}
                  to={page.link}
                  className={({ isActive }) =>
                    `text-xl transition ${
                      isActive
                        ? "text-light-cream font-bold"
                        : "text-white hover:text-light-cream"
                    }`
                  }
                >
                  {page.name}
                </NavLink>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
            >
              <svg
                className={`w-6 h-6 transform transition-transform duration-300 ${
                  isOpen ? "rotate-90 scale-110" : "rotate-0 scale-100"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          <div className="hidden xl:flex items-center gap-3">
            <CookieBtn name={t("common.getAQuote")} />
            <LanguageToggle />
          </div>
        </div>

        <div
          className={`xl:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
            isOpen ? "max-h-[1000px] opacity-100 mt-4 pb-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="space-y-4 flex flex-col">
            {navbar.pages.map((page, idx) => {
              // Special handling for Services page in mobile view
              if (page.link === '/service') {
                return (
                  <div key={idx}>
                    <div className="flex items-center justify-between">
                      <NavLink
                        to={page.link}
                        className={({ isActive }) =>
                          `text-xl transition flex-1 ${
                            isActive
                              ? "text-light-cream font-bold"
                              : "text-white hover:text-light-cream"
                          }`
                        }
                        onClick={() => setIsOpen(false)}
                      >
                        {page.name}
                      </NavLink>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setMobileServicesOpen(!mobileServicesOpen);
                        }}
                        className="ml-2 text-white hover:text-light-cream transition p-2"
                      >
                        <ChevronDown 
                          size={16} 
                          className={`transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`} 
                        />
                      </button>
                    </div>
                    
                    {/* Mobile Services Dropdown */}
                    {mobileServicesOpen && (
                      <div className="mt-2 pl-4 space-y-2">
                        {servicesOptions.map((option, index) => (
                          <NavLink
                            key={index}
                            to={option.link}
                            className="flex items-center py-2 text-white hover:text-light-cream transition"
                            onClick={() => {
                              setIsOpen(false);
                              setMobileServicesOpen(false);
                            }}
                          >
                            <div className="text-[#c18b13] mr-2">
                              {option.icon}
                            </div>
                            <span className="text-sm">{option.name}</span>
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              
              // Special handling for Hire page in mobile view
              if (page.link === '/hire') {
                return (
                  <div key={idx}>
                    <div className="flex items-center justify-between">
                      <NavLink
                        to={page.link}
                        className={({ isActive }) =>
                          `text-xl transition flex-1 ${
                            isActive
                              ? "text-light-cream font-bold"
                              : "text-white hover:text-light-cream"
                          }`
                        }
                        onClick={() => setIsOpen(false)}
                      >
                        {page.name}
                      </NavLink>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setMobileHireOpen(!mobileHireOpen);
                        }}
                        className="ml-2 text-white hover:text-light-cream transition p-2"
                      >
                        <ChevronDown 
                          size={16} 
                          className={`transition-transform duration-300 ${mobileHireOpen ? 'rotate-180' : ''}`} 
                        />
                      </button>
                    </div>
                    
                    {/* Mobile Hire Dropdown */}
                    {mobileHireOpen && (
                      <div className="mt-2 pl-4 space-y-2">
                        {hireOptions.map((option, index) => (
                          <NavLink
                            key={index}
                            to={option.link}
                            className="flex items-center py-2 text-white hover:text-light-cream transition"
                            onClick={() => {
                              setIsOpen(false);
                              setMobileHireOpen(false);
                            }}
                          >
                            <div className="text-[#c18b13] mr-2">
                              {option.icon}
                            </div>
                            <span className="text-sm">{option.name}</span>
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              
              // Regular navigation for other pages in mobile view
              return (
                <NavLink
                  key={idx}
                  to={page.link}
                  className={({ isActive }) =>
                    `text-xl transition ${
                      isActive
                        ? "text-light-cream font-bold"
                        : "text-white hover:text-light-cream"
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {page.name}
                </NavLink>
              );
            })}
            <div className="pt-2 flex items-center gap-3">
              <CookieBtn name={t("common.getAQuote")} />
              <LanguageToggle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Navbar;