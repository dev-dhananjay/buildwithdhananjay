import React from "react";
import Link from "next/link";
import { Container } from "./ui/Container";

export const Footer = () => {
  return (
    <footer className="border-t border-[#27272A] bg-[#0A0A0A] text-[#A1A1AA] mt-auto">
      <Container size="xl" className="py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand & Mission */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <Link
              href="/"
              className="inline-block text-lg font-bold tracking-tight text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF4444] rounded-md"
            >
              BuildWith<span className="text-[#EF4444]">Dhananjay</span>
            </Link>
            <p className="max-w-sm text-sm text-[#A1A1AA] leading-relaxed">
              Digital resources for students and aspiring developers.
            </p>
          </div>

          {/* Navigation Group: Products */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold text-white tracking-wide">
              Products
            </h4>
            <ul className="flex flex-col space-y-2 text-sm">
              <li>
                <Link
                  href="/products"
                  className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF4444] rounded-sm"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/programming"
                  className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF4444] rounded-sm"
                >
                  Programming
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/dsa"
                  className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF4444] rounded-sm"
                >
                  DSA
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/ai-tech"
                  className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF4444] rounded-sm"
                >
                  AI & Tech
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation Group: Company */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold text-white tracking-wide">
              Company
            </h4>
            <ul className="flex flex-col space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF4444] rounded-sm"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF4444] rounded-sm"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF4444] rounded-sm"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation Group: Legal */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold text-white tracking-wide">
              Legal
            </h4>
            <ul className="flex flex-col space-y-2 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF4444] rounded-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF4444] rounded-sm"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href="/refund"
                  className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF4444] rounded-sm"
                >
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-[#27272A] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#71717A]">
          <p>© 2026 BuildWithDhananjay. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};
