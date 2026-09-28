import React from "react";
import { Container } from "./ui/Container";
import { Badge } from "./ui/Badge";

export const WhySection = () => {
  return (
    <section className="py-20 md:py-28 border-b border-[#27272A]/60 bg-[#0A0A0A]">
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Philosophy & Editorial Statement */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <Badge variant="accent" className="mb-6 uppercase tracking-wider text-[11px] font-semibold">
              OUR PHILOSOPHY
            </Badge>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-6">
              Built for learners who want clarity, not clutter.
            </h2>

            <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed mb-6">
              Most learning resources give you more information. The goal here
              is different: create focused, practical resources that help you
              understand the concept and actually use it.
            </p>

            <div className="p-4 rounded-xl border border-[#27272A] bg-[#111111] text-xs sm:text-sm text-[#A1A1AA] font-mono leading-relaxed">
              &quot;Cut through the 40-hour tutorial paralysis. Get straight to
              the architectures, mental models, and real syntax patterns.&quot;
            </div>
          </div>

          {/* Right Column: 3 Core Principles */}
          <div className="lg:col-span-6 space-y-5">
            {/* Principle 1: Clarity */}
            <div className="rounded-xl border border-[#27272A] bg-[#111111] p-6 text-left transition-colors duration-150 hover:border-[#3F3F46]">
              <div className="flex items-center gap-3 mb-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#EF4444]/10 text-xs font-mono font-bold text-[#EF4444] border border-[#EF4444]/20">
                  01
                </span>
                <h3 className="text-lg font-semibold text-white tracking-tight">
                  Clarity
                </h3>
              </div>
              <p className="text-sm text-[#A1A1AA] leading-relaxed ml-10">
                Simple explanations.
              </p>
            </div>

            {/* Principle 2: Practicality */}
            <div className="rounded-xl border border-[#27272A] bg-[#111111] p-6 text-left transition-colors duration-150 hover:border-[#3F3F46]">
              <div className="flex items-center gap-3 mb-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#EF4444]/10 text-xs font-mono font-bold text-[#EF4444] border border-[#EF4444]/20">
                  02
                </span>
                <h3 className="text-lg font-semibold text-white tracking-tight">
                  Practicality
                </h3>
              </div>
              <p className="text-sm text-[#A1A1AA] leading-relaxed ml-10">
                Focused on real learning and application.
              </p>
            </div>

            {/* Principle 3: Progress */}
            <div className="rounded-xl border border-[#27272A] bg-[#111111] p-6 text-left transition-colors duration-150 hover:border-[#3F3F46]">
              <div className="flex items-center gap-3 mb-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#EF4444]/10 text-xs font-mono font-bold text-[#EF4444] border border-[#EF4444]/20">
                  03
                </span>
                <h3 className="text-lg font-semibold text-white tracking-tight">
                  Progress
                </h3>
              </div>
              <p className="text-sm text-[#A1A1AA] leading-relaxed ml-10">
                Resources designed to help you keep moving.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
