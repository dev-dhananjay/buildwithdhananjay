import React from "react";
import Link from "next/link";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";

interface Category {
  name: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

const categories: Category[] = [
  {
    name: "Programming",
    description: "Core languages, clean code patterns, and practical implementation guides.",
    href: "/categories/programming",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    name: "DSA",
    description: "Data structures and algorithms explained for interviews and problem solving.",
    href: "/categories/dsa",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="5" r="3" />
        <line x1="12" x2="12" y1="8" y2="12" />
        <circle cx="6" cy="19" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="12" x2="6" y1="12" y2="16" />
        <line x1="12" x2="18" y1="12" y2="16" />
      </svg>
    ),
  },
  {
    name: "AI & Tech",
    description: "Modern artificial intelligence foundations, developer tooling, and modern tech.",
    href: "/categories/ai-tech",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 2v4" />
        <path d="m4.93 4.93 2.83 2.83" />
        <path d="M2 12h4" />
        <path d="m4.93 19.07 2.83-2.83" />
        <path d="M12 22v-4" />
        <path d="m19.07 19.07-2.83-2.83" />
        <path d="M22 12h-4" />
        <path d="m19.07 4.93-2.83 2.83" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    name: "Career",
    description: "Roadmaps, portfolio advice, and technical preparation for tech opportunities.",
    href: "/categories/career",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    name: "Study Resources",
    description: "Cheatsheets, revision notes, and reference guides engineered for quick recall.",
    href: "/categories/study-resources",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
];

export const CategorySection = () => {
  return (
    <section className="py-20 md:py-24 border-b border-[#27272A]/60 bg-[#0A0A0A]">
      <Container size="xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <SectionHeading
            badge="TAXONOMY"
            badgeVariant="accent"
            title="Explore by Category"
            description="Resources built around the skills that matter."
          />
          <Link
            href="/categories"
            className="text-sm font-medium text-[#A1A1AA] hover:text-white flex items-center gap-1.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF4444] rounded-md px-1 py-0.5"
          >
            <span>All Categories</span>
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
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={category.href}
              className="group relative flex flex-col justify-between rounded-xl border border-[#27272A] bg-[#111111] p-6 text-left transition-all duration-200 hover:border-[#3F3F46] hover:bg-[#151515] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF4444]"
            >
              <div>
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#27272A] bg-[#18181B] text-[#A1A1AA] group-hover:text-[#EF4444] group-hover:border-[#EF4444]/30 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-white tracking-tight mb-2 group-hover:text-white">
                  {category.name}
                </h3>
                <p className="text-sm text-[#A1A1AA] leading-relaxed">
                  {category.description}
                </p>
              </div>

              <div className="mt-6 flex items-center text-xs font-medium text-[#EF4444] gap-1 opacity-80 group-hover:opacity-100 transition-opacity">
                <span>Browse category</span>
                <span className="transition-transform duration-150 group-hover:translate-x-1">→</span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};
