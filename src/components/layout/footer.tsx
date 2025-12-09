"use client";

import Link from "next/link";
import { Truck, Phone, Mail, MapPin, Facebook, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <footer className="bg-[#1a2332] text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Logo & Tagline */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-[#ff4433]">
                <Truck className="w-7 h-7 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold font-[family-name:var(--font-outfit)] tracking-tight">
                  ATC
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-white/80 -mt-1">
                  Family Transport
                </span>
              </div>
            </Link>
            <p className="text-white/70 mb-6">
              Heavy Loads, Family Roots. Your trusted partner in flatbed, step-deck, and RGN transportation.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#ff4433] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#ff4433] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-[family-name:var(--font-outfit)]">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[#ff4433] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/careers"
                  className="text-white/70 hover:text-[#ff4433] transition-colors"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-[family-name:var(--font-outfit)]">
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+12248011105"
                  className="flex items-start gap-3 text-white/70 hover:text-[#ff4433] transition-colors"
                >
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>(224) 801-1105</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:dispatch@atc-trans.com"
                  className="flex items-start gap-3 text-white/70 hover:text-[#ff4433] transition-colors"
                >
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>dispatch@atc-trans.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/70">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>
                    225 N. Arlington Heights Rd
                    <br />
                    Elk Grove Village, IL 60007
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-[family-name:var(--font-outfit)]">
              Stay Updated
            </h3>
            <p className="text-white/70 mb-4">
              Subscribe to our newsletter for industry updates and company news.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:border-[#ff4433] transition-colors"
                required
              />
              <Button
                type="submit"
                className="w-full bg-[#ff4433] hover:bg-[#e63d2e] text-white font-medium"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>
              &copy; {new Date().getFullYear()} ATC Family Transport. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <span>DOT# XXXXXX</span>
              <span>|</span>
              <span>MC# XXXXXX</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
