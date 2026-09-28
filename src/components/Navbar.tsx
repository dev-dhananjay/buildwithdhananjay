"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#27272A] bg-[#0A0A0A]/90 backdrop-blur-md">
      <Container size="xl">
        <nav
          aria-label="Main Navigation"
          className="flex h-16 items-center justify-between gap-4"
        >
          {/* Brand Logo / Name */}
          <Link
            href="/"
            className="flex items-center text-lg font-bold tracking-tight text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF4444] rounded-md px-1 py-0.5"
            onClick={closeMobileMenu}
          >
            BuildWith<span className="text-[#EF4444]">Dhananjay</span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/products"
              className="text-sm font-medium text-[#A1A1AA] hover:text-[#FFFFFF] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF4444] rounded-md px-2 py-1"
            >
              Products
            </Link>
            <Link
              href="/categories"
              className="text-sm font-medium text-[#A1A1AA] hover:text-[#FFFFFF] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF4444] rounded-md px-2 py-1"
            >
              Categories
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-[#A1A1AA] hover:text-[#FFFFFF] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF4444] rounded-md px-2 py-1"
            >
              About
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              type="button"
              aria-label="Search products"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#27272A] bg-[#111111] text-[#A1A1AA] hover:text-[#FFFFFF] hover:border-[#3F3F46] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF4444] cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </button>

            <Link
              href="/cart"
              aria-label="View shopping cart"
              className="relative inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#27272A] bg-[#111111] text-[#A1A1AA] hover:text-[#FFFFFF] hover:border-[#3F3F46] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF4444]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
            </Link>

            <Link href="/login">
              <Button variant="primary" size="sm">
                Login
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={toggleMobileMenu}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#27272A] bg-[#111111] text-[#A1A1AA] hover:text-[#FFFFFF] hover:border-[#3F3F46] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF4444] cursor-pointer"
            >
              {isMobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div
            id="mobile-navigation"
            className="md:hidden border-t border-[#27272A] py-4 space-y-4 animate-in fade-in duration-150"
          >
            <div className="flex flex-col space-y-2">
              <Link
                href="/products"
                onClick={closeMobileMenu}
                className="rounded-lg px-3 py-2 text-sm font-medium text-[#A1A1AA] hover:bg-[#18181B] hover:text-[#FFFFFF] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF4444]"
              >
                Products
              </Link>
              <Link
                href="/categories"
                onClick={closeMobileMenu}
                className="rounded-lg px-3 py-2 text-sm font-medium text-[#A1A1AA] hover:bg-[#18181B] hover:text-[#FFFFFF] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF4444]"
              >
                Categories
              </Link>
              <Link
                href="/about"
                onClick={closeMobileMenu}
                className="rounded-lg px-3 py-2 text-sm font-medium text-[#A1A1AA] hover:bg-[#18181B] hover:text-[#FFFFFF] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF4444]"
              >
                About
              </Link>
            </div>

            <div className="border-t border-[#27272A] pt-4 flex flex-col gap-2">
              <button
                type="button"
                onClick={closeMobileMenu}
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-[#A1A1AA] hover:bg-[#18181B] hover:text-[#FFFFFF] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF4444] text-left cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
                Search
              </button>

              <Link
                href="/cart"
                onClick={closeMobileMenu}
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-[#A1A1AA] hover:bg-[#18181B] hover:text-[#FFFFFF] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF4444]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="8" cy="21" r="1" />
                  <circle cx="19" cy="21" r="1" />
                  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                </svg>
                Cart
              </Link>

              <div className="pt-2">
                <Link href="/login" onClick={closeMobileMenu} className="block w-full">
                  <Button variant="primary" size="md" className="w-full">
                    Login
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};
