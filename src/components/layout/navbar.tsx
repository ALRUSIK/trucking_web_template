"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function MobileMenu({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <>
      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm lg:hidden"
            style={{ zIndex: 9998 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 right-0 bottom-0 w-[300px] bg-[#0a0a0f] border-l border-purple-500/20 lg:hidden shadow-2xl"
            style={{ zIndex: 9999 }}
          >
            {/* Gradient accent line */}
            <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-purple-500 via-violet-500 to-cyan-500" />

            <div className="flex flex-col h-full p-6">
              {/* Close button */}
              <button
                onClick={() => setIsOpen(false)}
                className="self-end p-2 text-white/80 hover:text-purple-400 hover:bg-purple-500/10 rounded-lg transition-all"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation Links */}
              <div className="flex flex-col gap-2 mt-8">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 text-white/90 font-medium text-lg hover:text-purple-400 hover:bg-purple-500/10 rounded-lg transition-all"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Mobile CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-auto space-y-3"
              >
                <Button
                  className="w-full border border-purple-500/50 text-purple-400 bg-transparent hover:bg-purple-500/10 hover:border-purple-400 shadow-none transition-all"
                  asChild
                >
                  <Link href="/careers" onClick={() => setIsOpen(false)}>
                    Drive With Us
                  </Link>
                </Button>
                <Button
                  className="w-full btn-gradient text-white font-semibold glow-orange"
                  asChild
                >
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    Get a Quote
                  </Link>
                </Button>

                {/* Contact info */}
                <div className="pt-6 border-t border-purple-500/20">
                  <a
                    href="tel:+12248011105"
                    className="flex items-center gap-3 text-white/70 hover:text-purple-400 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span>(224) 801-1105</span>
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>,
    document.body
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled || isOpen
            ? "glass py-2 shadow-lg shadow-purple-500/5"
            : "bg-transparent py-4"
        )}
      >
        {/* Top gradient line when scrolled */}
        {scrolled && (
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
        )}

        <nav className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <Image
                  src="/images/cropped-Untitled-2-min-192x192.jpg"
                  alt="ATC Family Transport Logo"
                  width={48}
                  height={48}
                  className="rounded-xl transition-transform group-hover:scale-105"
                />
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-xl bg-purple-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold font-[family-name:var(--font-outfit)] tracking-tight text-white group-hover:text-purple-400 transition-colors">
                  ATC
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-white/60 -mt-1">
                  Family Transport
                </span>
              </div>
            </Link>

            {/* Desktop Navigation - Center */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative font-medium text-sm tracking-wide text-white/80 transition-colors hover:text-white group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* CTA Buttons - Desktop */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                className="border border-purple-500/50 text-purple-400 bg-transparent hover:bg-purple-500/10 hover:border-purple-400 font-medium transition-all duration-300 hover:scale-105 shadow-none"
                asChild
              >
                <Link href="/careers" className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Drive With Us
                </Link>
              </Button>
              <Button
                className="btn-gradient btn-shine text-white font-semibold shadow-lg hover:shadow-orange-500/25 hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link href="/contact">
                  Get a Quote
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-white/80 hover:text-purple-400 hover:bg-purple-500/10 transition-all relative z-50"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu - Rendered via Portal */}
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
