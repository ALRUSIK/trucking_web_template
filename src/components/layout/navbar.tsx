"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

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

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled || isOpen
          ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      )}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/images/cropped-Untitled-2-min-192x192.jpg"
              alt="ATC Family Transport Logo"
              width={48}
              height={48}
              className="rounded-xl"
            />
            <div className="flex flex-col">
              <span className={cn(
                "text-xl font-bold font-[family-name:var(--font-outfit)] tracking-tight transition-colors",
                scrolled || isOpen ? "text-[#1a2332]" : "text-white"
              )}>
                ATC
              </span>
              <span className={cn(
                "text-[10px] uppercase tracking-[0.2em] font-medium transition-colors -mt-1",
                scrolled || isOpen ? "text-[#1a2332]/70" : "text-white/80"
              )}>
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
                className={cn(
                  "relative font-medium text-sm tracking-wide transition-colors hover:text-[#ff4433] group",
                  scrolled ? "text-[#1a2332]" : "text-white"
                )}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff4433] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* CTA Buttons - Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              
              className={cn(
                "border-2 font-medium transition-all duration-300 hover:scale-105 bg-transparent shadow-none",
                scrolled
                  ? "border-[#ff4433] text-[#ff4433] hover:bg-[#ff4433] hover:text-white"
                  : "border-white text-white hover:bg-white hover:text-[#1a2332]"
              )}
              asChild
            >
              <Link href="/careers">
                Drive With Us
              </Link>
            </Button>
            <Button
              className="bg-[#ff4433] hover:bg-[#e63d2e] text-white font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              asChild
            >
              <Link href="/contact" className="flex items-center gap-2">
                Get a Quote
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors",
              scrolled || isOpen ? "text-[#1a2332] hover:bg-gray-100" : "text-white hover:bg-white/10"
            )}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 lg:hidden z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-y-0 right-0 w-[300px] bg-[#1a2332] lg:hidden shadow-2xl z-50"
          >
            <div className="flex flex-col h-full p-6">
              {/* Close button */}
              <button
                onClick={() => setIsOpen(false)}
                className="self-end p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
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
                      className="block px-4 py-3 text-white font-medium text-lg hover:bg-white/10 rounded-lg transition-colors"
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
                  className="w-full border-2 border-[#ff4433] text-[#ff4433] bg-transparent hover:bg-[#ff4433] hover:text-white shadow-none"
                  asChild
                >
                  <Link href="/careers" onClick={() => setIsOpen(false)}>
                    Drive With Us
                  </Link>
                </Button>
                <Button
                  className="w-full bg-[#ff4433] hover:bg-[#e63d2e] text-white"
                  asChild
                >
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    Get a Quote
                  </Link>
                </Button>

                {/* Contact info */}
                <div className="pt-6 border-t border-white/10">
                  <a
                    href="tel:+12248011105"
                    className="flex items-center gap-3 text-white/80 hover:text-[#ff4433] transition-colors"
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
    </motion.header>
  );
}
