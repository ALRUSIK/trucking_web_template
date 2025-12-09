"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Truck, Phone } from "lucide-react";
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
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className={cn(
              "p-2 rounded-lg transition-colors",
              scrolled ? "bg-orange-500" : "bg-white"
            )}>
              <Truck className={cn(
                "w-6 h-6 transition-colors",
                scrolled ? "text-white" : "text-orange-500"
              )} />
            </div>
            <span className={cn(
              "text-xl font-bold transition-colors",
              scrolled ? "text-gray-900" : "text-white"
            )}>
              TruckingCo
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative font-medium transition-colors hover:text-orange-500",
                  scrolled ? "text-gray-700" : "text-white"
                )}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* CTA Buttons - Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="outline"
              className={cn(
                "border-2 transition-all",
                scrolled
                  ? "border-gray-300 text-gray-700 hover:border-orange-500 hover:text-orange-500"
                  : "border-white text-white hover:bg-white hover:text-gray-900"
              )}
              asChild
            >
              <Link href="/careers">
                Driver Application
              </Link>
            </Button>
            <Button
              className="bg-orange-500 hover:bg-orange-600 text-white shadow-lg hover:shadow-xl transition-all"
              asChild
            >
              <Link href="/contact" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Get a Quote
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors",
              scrolled ? "text-gray-900 hover:bg-gray-100" : "text-white hover:bg-white/10"
            )}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className={cn(
                "py-4 space-y-2 rounded-b-2xl",
                scrolled ? "bg-white" : "bg-gray-900/95 backdrop-blur-md"
              )}>
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "block px-4 py-3 font-medium rounded-lg transition-colors",
                        scrolled
                          ? "text-gray-700 hover:bg-gray-100 hover:text-orange-500"
                          : "text-white hover:bg-white/10"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                {/* Mobile CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="px-4 pt-4 space-y-3 border-t border-gray-200/20"
                >
                  <Button
                    variant="outline"
                    className="w-full border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                    asChild
                  >
                    <Link href="/careers" onClick={() => setIsOpen(false)}>
                      Driver Application
                    </Link>
                  </Button>
                  <Button
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                    asChild
                  >
                    <Link href="/contact" onClick={() => setIsOpen(false)} className="flex items-center justify-center gap-2">
                      <Phone className="w-4 h-4" />
                      Get a Quote
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
