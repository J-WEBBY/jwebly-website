"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { NAVIGATION } from "@/lib/constants/site";
import { SERVICES_DETAIL } from "@/lib/constants/services-detail";

const RESOURCES_DROPDOWN = [
  { name: "Research", href: "/resources/research", description: "Latest AI insights & trends" },
  { name: "Case Studies", href: "/resources/case-studies", description: "Real client success stories" },
  { name: "Reviews", href: "/resources/reviews", description: "Client testimonials & results" },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [isResourcesHovered, setIsResourcesHovered] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileResourcesOpen, setIsMobileResourcesOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <Image
              src="/logo.svg"
              alt="JWEBLY Logo"
              width={160}
              height={40}
              className="h-8 md:h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAVIGATION.map((item) => {
              if (item.name === "Services") {
                return (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => setIsServicesHovered(true)}
                    onMouseLeave={() => setIsServicesHovered(false)}
                  >
                    <Link
                      href={item.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                    >
                      {item.name}
                      <ChevronDown className={`w-4 h-4 transition-transform ${isServicesHovered ? "rotate-180" : ""}`} />
                    </Link>

                    {/* Services Dropdown */}
                    <AnimatePresence>
                      {isServicesHovered && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-80 bg-background-card border border-gray-900 rounded-xl shadow-xl overflow-hidden z-50"
                        >
                          <div className="p-2">
                            {SERVICES_DETAIL.map((service, index) => (
                              <motion.div
                                key={service.id}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                              >
                                <Link
                                  href={`/services/${service.slug}`}
                                  className="block p-4 rounded-lg hover:bg-background-elevated transition-colors group"
                                >
                                  <div className="flex items-start justify-between gap-3">
                                    <div className="flex-1">
                                      <div className="flex items-center gap-2 mb-1">
                                        <h4 className="text-sm font-semibold text-white group-hover:text-accent transition-colors">
                                          {service.name.split(' ')[0]}
                                        </h4>
                                        {service.featured && (
                                          <span className="text-xs font-semibold text-accent border border-accent/30 rounded-full px-2 py-0.5">
                                            POPULAR
                                          </span>
                                        )}
                                      </div>
                                      <p className="text-xs text-gray-400 line-clamp-1">
                                        {service.tagline}
                                      </p>
                                      <p className="text-xs text-gray-600 mt-1">
                                        {service.price}
                                      </p>
                                    </div>
                                  </div>
                                </Link>
                              </motion.div>
                            ))}
                            <div className="border-t border-gray-900 mt-2 pt-2">
                              <Link
                                href="/services"
                                className="block p-4 rounded-lg hover:bg-background-elevated transition-colors text-center"
                              >
                                <span className="text-sm text-gray-400 hover:text-white transition-colors">
                                  View All Services →
                                </span>
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }
              if (item.name === "Resources") {
                return (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => setIsResourcesHovered(true)}
                    onMouseLeave={() => setIsResourcesHovered(false)}
                  >
                    <Link
                      href={item.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                    >
                      {item.name}
                      <ChevronDown className={`w-4 h-4 transition-transform ${isResourcesHovered ? "rotate-180" : ""}`} />
                    </Link>

                    {/* Resources Dropdown */}
                    <AnimatePresence>
                      {isResourcesHovered && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-72 bg-background-card border border-gray-900 rounded-xl shadow-xl overflow-hidden z-50"
                        >
                          <div className="p-2">
                            {RESOURCES_DROPDOWN.map((resource, index) => (
                              <motion.div
                                key={resource.href}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                              >
                                <Link
                                  href={resource.href}
                                  className="block p-4 rounded-lg hover:bg-background-elevated transition-colors group"
                                >
                                  <h4 className="text-sm font-semibold text-white group-hover:text-accent transition-colors mb-1">
                                    {resource.name}
                                  </h4>
                                  <p className="text-xs text-gray-400">
                                    {resource.description}
                                  </p>
                                </Link>
                              </motion.div>
                            ))}
                            <div className="border-t border-gray-900 mt-2 pt-2">
                              <Link
                                href="/resources"
                                className="block p-4 rounded-lg hover:bg-background-elevated transition-colors text-center"
                              >
                                <span className="text-sm text-gray-400 hover:text-white transition-colors">
                                  View All Resources →
                                </span>
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              );
            })}
            <Link
              href="/get-started"
              className="text-sm text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-md transition-colors"
            >
              Book a Demo
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-400 hover:text-white"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-6"
          >
            <div className="flex flex-col gap-4 pt-4">
              {NAVIGATION.map((item) => {
                if (item.name === "Services") {
                  return (
                    <div key={item.href} className="flex flex-col">
                      <button
                        onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                        className="text-base text-gray-400 hover:text-white transition-colors flex items-center justify-between"
                      >
                        {item.name}
                        <ChevronDown className={`w-4 h-4 transition-transform ${isMobileServicesOpen ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {isMobileServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 pt-2 space-y-2">
                              {SERVICES_DETAIL.map((service) => (
                                <Link
                                  key={service.id}
                                  href={`/services/${service.slug}`}
                                  onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    setIsMobileServicesOpen(false);
                                  }}
                                  className="block text-sm text-gray-500 hover:text-white transition-colors"
                                >
                                  {service.name.split(' ')[0]} - {service.price}
                                </Link>
                              ))}
                              <Link
                                href="/services"
                                onClick={() => {
                                  setIsMobileMenuOpen(false);
                                  setIsMobileServicesOpen(false);
                                }}
                                className="block text-sm text-gray-500 hover:text-white transition-colors font-medium"
                              >
                                View All →
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }
                if (item.name === "Resources") {
                  return (
                    <div key={item.href} className="flex flex-col">
                      <button
                        onClick={() => setIsMobileResourcesOpen(!isMobileResourcesOpen)}
                        className="text-base text-gray-400 hover:text-white transition-colors flex items-center justify-between"
                      >
                        {item.name}
                        <ChevronDown className={`w-4 h-4 transition-transform ${isMobileResourcesOpen ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {isMobileResourcesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 pt-2 space-y-2">
                              {RESOURCES_DROPDOWN.map((resource) => (
                                <Link
                                  key={resource.href}
                                  href={resource.href}
                                  onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    setIsMobileResourcesOpen(false);
                                  }}
                                  className="block text-sm text-gray-500 hover:text-white transition-colors"
                                >
                                  {resource.name}
                                </Link>
                              ))}
                              <Link
                                href="/resources"
                                onClick={() => {
                                  setIsMobileMenuOpen(false);
                                  setIsMobileResourcesOpen(false);
                                }}
                                className="block text-sm text-gray-500 hover:text-white transition-colors font-medium"
                              >
                                View All Resources →
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-base text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                );
              })}
              <Link
                href="/get-started"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-md transition-colors inline-block w-fit"
              >
                Book a Demo
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

