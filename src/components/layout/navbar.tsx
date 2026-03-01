"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        isScrolled
          ? "bg-[#0C0A09]/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-[#292524]/50"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#D97706] to-[#F59E0B]">
            <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#0C0A09]" fill="currentColor">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 16h-1V9h-2v10h-1V9h-2v10h-1V9H8v10H7V5h10v14z" />
            </svg>
          </div>
          <div>
            <span className="block text-lg font-serif font-bold text-[#FAFAF9] group-hover:text-[#D97706] transition-colors">
              {SITE_CONFIG.name}
            </span>
            <span className="block text-xs text-[#A8A29E] -mt-0.5 tracking-wider uppercase">
              {SITE_CONFIG.teacher.name}
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                  isActive
                    ? "text-[#D97706]"
                    : "text-[#A8A29E] hover:text-[#FAFAF9] hover:bg-[#292524]/50"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="navbar-active"
                    className="absolute bottom-0 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-[#D97706]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="ml-4 rounded-lg bg-gradient-to-r from-[#D97706] to-[#F59E0B] px-5 py-2.5 text-sm font-semibold text-[#0C0A09] transition-all hover:from-[#F59E0B] hover:to-[#D97706] shadow-lg shadow-amber-900/20"
          >
            Book a Lesson
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-[#FAFAF9] transition-colors hover:bg-[#292524] md:hidden"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {isMobileOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-[#292524] bg-[#0C0A09]/98 backdrop-blur-lg md:hidden"
          >
            <div className="space-y-1 px-4 py-4">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                      isActive
                        ? "bg-[#D97706]/10 text-[#D97706]"
                        : "text-[#A8A29E] hover:bg-[#292524]/50 hover:text-[#FAFAF9]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="block rounded-lg bg-gradient-to-r from-[#D97706] to-[#F59E0B] px-4 py-3 text-center text-base font-semibold text-[#0C0A09]"
                >
                  Book a Lesson
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
