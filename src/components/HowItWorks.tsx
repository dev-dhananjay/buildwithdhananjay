import React from "react";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";

interface Step {
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Explore",
    description: "Find a resource for what you're learning.",
  },
  {
    number: "02",
    title: "Purchase",
    description: "Get the resource through a simple checkout.",
  },
  {
    number: "03",
    title: "Learn",
    description: "Access your resource and keep learning.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-20 md:py-24 border-b border-[#27272A]/60 bg-[#0A0A0A]">
      <Container size="xl">
        <div className="mb-14">
          <SectionHeading
            badge="WORKFLOW"
            badgeVariant="accent"
            title="How It Works"
            description="A clean, direct path from discovery to skill mastery."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col rounded-xl border border-[#27272A] bg-[#111111] p-8 text-left transition-colors duration-150 hover:border-[#3F3F46]"
            >
              {/* Step indicator */}
              <div className="mb-6 flex items-center justify-between">
                <span className="text-3xl sm:text-4xl font-extrabold font-mono text-[#EF4444]">
                  {step.number}
                </span>
                <span className="text-[11px] font-mono text-[#71717A] uppercase tracking-wider">
                  Step {index + 1}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-white tracking-tight mb-3">
                {step.title}
              </h3>

              <p className="text-sm text-[#A1A1AA] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
