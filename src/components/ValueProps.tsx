import React from "react";
import { Container } from "./ui/Container";

interface ValuePoint {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const valuePoints: ValuePoint[] = [
  {
    title: "Instant Access",
    description: "Access your purchased digital resources whenever you need them.",
    icon: (
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
        className="text-[#EF4444]"
        aria-hidden="true"
      >
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    title: "Practical Content",
    description: "Focused resources designed for actual learning and revision.",
    icon: (
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
        className="text-[#EF4444]"
        aria-hidden="true"
      >
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
        <path d="M6 6h10" />
        <path d="M6 10h10" />
      </svg>
    ),
  },
  {
    title: "Student Friendly",
    description: "Simple explanations without unnecessary complexity.",
    icon: (
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
        className="text-[#EF4444]"
        aria-hidden="true"
      >
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    title: "Lifetime Access",
    description: "Purchased resources remain available in your account.",
    icon: (
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
        className="text-[#EF4444]"
        aria-hidden="true"
      >
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
];

export const ValueProps = () => {
  return (
    <section className="py-16 md:py-20 border-b border-[#27272A]/60 bg-[#0A0A0A]">
      <Container size="xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {valuePoints.map((item, index) => (
            <div
              key={index}
              className="flex flex-col rounded-xl border border-[#27272A] bg-[#111111] p-6 text-left transition-colors duration-150 hover:border-[#3F3F46]"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#27272A] bg-[#18181B]">
                {item.icon}
              </div>
              <h3 className="text-base font-semibold text-white tracking-tight mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-[#A1A1AA] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
