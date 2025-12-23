"use client";

import Link from "next/link";
import { NAVIGATION } from "@/lib/constants/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-16 md:py-20">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          {/* Brand Column */}
          <div className="md:col-span-1">
            <Link href="/" className="text-2xl font-semibold text-white hover:text-gray-300 transition-colors inline-block mb-4">
              JWEBLY
            </Link>
            <p className="text-sm text-gray-400">
              AI systems that become part of your team.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-2">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-white mb-4">Product</h3>
                <ul className="space-y-3">
                  {NAVIGATION.slice(0, 2).map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white mb-4">Company</h3>
                <ul className="space-y-3">
                  {NAVIGATION.slice(2, 4).map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white mb-4">Resources</h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/resources"
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      Resources
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Column */}
          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold text-white mb-4">Book a Demo</h3>
            <Link
              href="/get-started"
              className="inline-block text-sm text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-md transition-colors"
            >
              Book a Demo
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-900">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {currentYear} Jwebly. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


