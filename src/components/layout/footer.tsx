"use client";

import Link from "next/link";
import { Truck, Phone, Mail, MapPin, Facebook, Linkedin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion } from "framer-motion";

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
    <footer className="relative bg-[#0a0a0f] text-white overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        {/* Purple gradient orb */}
        <div
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full opacity-30"
          style={{
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)",
          }}
        />
        {/* Cyan gradient orb */}
        <div
          className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Top gradient border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

      {/* Main Footer */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Logo & Tagline */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <div className="relative p-2.5 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 group-hover:shadow-lg group-hover:shadow-purple-500/25 transition-all">
                <Truck className="w-7 h-7 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold font-[family-name:var(--font-outfit)] tracking-tight group-hover:text-purple-400 transition-colors">
                  ATC
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-white/60 -mt-1">
                  Family Transport
                </span>
              </div>
            </Link>
            <p className="text-white/50 mb-6 leading-relaxed">
              Heavy Loads, Family Roots. Your trusted partner in flatbed, step-deck, and RGN transportation.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg border border-purple-500/30 bg-purple-500/5 flex items-center justify-center hover:bg-purple-500/20 hover:border-purple-400 transition-all group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-purple-400 group-hover:text-purple-300" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg border border-purple-500/30 bg-purple-500/5 flex items-center justify-center hover:bg-purple-500/20 hover:border-purple-400 transition-all group"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-purple-400 group-hover:text-purple-300" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-[family-name:var(--font-outfit)] text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-purple-400 transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-purple-500 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/careers"
                  className="text-white/50 hover:text-purple-400 transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-purple-500 transition-all" />
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-[family-name:var(--font-outfit)] text-white">
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+12248011105"
                  className="flex items-start gap-3 text-white/50 hover:text-purple-400 transition-colors group"
                >
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 text-purple-500 group-hover:text-purple-400" />
                  <span>(224) 801-1105</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:dispatch@atc-trans.com"
                  className="flex items-start gap-3 text-white/50 hover:text-purple-400 transition-colors group"
                >
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 text-purple-500 group-hover:text-purple-400" />
                  <span>dispatch@atc-trans.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/50">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-purple-500" />
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
            <h3 className="text-lg font-bold mb-6 font-[family-name:var(--font-outfit)] text-white">
              Stay Updated
            </h3>
            <p className="text-white/50 mb-4">
              Subscribe to our newsletter for industry updates and company news.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 input-dark rounded-lg text-white"
                required
              />
              <Button
                type="submit"
                className="w-full btn-gradient btn-shine text-white font-medium"
              >
                <span className="flex items-center justify-center gap-2">
                  Subscribe
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-purple-500/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
            <p>
              &copy; {new Date().getFullYear()} ATC Family Transport. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <span className="badge-purple px-3 py-1 rounded-full text-xs">DOT# 3492067</span>
              <span className="badge-purple px-3 py-1 rounded-full text-xs">MC# 1149655</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
