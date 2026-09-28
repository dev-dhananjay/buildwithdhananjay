import React from "react";
import Link from "next/link";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";
import { Badge } from "./ui/Badge";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 border-b border-[#27272A]/60">
      {/* Background Subtle Glow & Grid */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(#27272A 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-72 w-72 md:h-96 md:w-96 rounded-full bg-[#EF4444]/10 blur-[100px]" />

      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <Badge variant="accent" className="mb-6 uppercase tracking-wider text-[11px] font-semibold">
              DIGITAL RESOURCES FOR DEVELOPERS
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
              Build smarter.
              <br />
              <span className="text-[#EF4444]">Learn faster.</span>
            </h1>

            <p className="max-w-xl text-base sm:text-lg text-[#A1A1AA] leading-relaxed mb-8">
              Practical digital resources designed to help students and aspiring
              developers learn concepts faster, build better projects, and grow
              their technical skills.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link href="/products">
                <Button variant="primary" size="lg">
                  Explore Products
                </Button>
              </Link>
              <Link href="#featured">
                <Button variant="secondary" size="lg">
                  View Latest
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: Premium Abstract Digital-Product Workspace */}
          <div className="lg:col-span-5 relative w-full flex items-center justify-center">
            <div className="relative w-full max-w-md rounded-2xl border border-[#27272A] bg-[#111111]/80 backdrop-blur-sm p-6 shadow-2xl shadow-black/60">
              {/* Window Header */}
              <div className="flex items-center justify-between pb-5 border-b border-[#27272A]/70 mb-5">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-[#27272A]" />
                  <div className="h-3 w-3 rounded-full bg-[#27272A]" />
                  <div className="h-3 w-3 rounded-full bg-[#27272A]" />
                </div>
                <div className="text-[11px] font-mono text-[#71717A] tracking-wider uppercase">
                  RESOURCE_WORKSPACE // V1.0
                </div>
              </div>

              {/* Visual Placeholder Cards (Abstract concepts) */}
              <div className="space-y-3.5">
                {/* Python concept */}
                <div className="group rounded-xl border border-[#27272A] bg-[#0A0A0A] p-4 transition-all duration-200 hover:border-[#3F3F46]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-medium text-[#EF4444]">01 // CORE</span>
                    <span className="text-[10px] font-mono uppercase text-[#71717A] px-2 py-0.5 rounded bg-[#18181B] border border-[#27272A]">Preview</span>
                  </div>
                  <div className="text-base font-semibold text-white tracking-tight">Python</div>
                  <div className="text-xs text-[#A1A1AA] mt-1 font-mono">Syntax • Data Structures • OOP Architecture</div>
                </div>

                {/* DSA concept */}
                <div className="group rounded-xl border border-[#EF4444]/30 bg-[#0A0A0A] p-4 transition-all duration-200 shadow-sm shadow-[#EF4444]/5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-medium text-[#EF4444]">02 // ALGORITHMS</span>
                    <span className="text-[10px] font-mono uppercase text-[#EF4444] px-2 py-0.5 rounded bg-[#EF4444]/10 border border-[#EF4444]/20">Featured</span>
                  </div>
                  <div className="text-base font-semibold text-white tracking-tight">DSA</div>
                  <div className="text-xs text-[#A1A1AA] mt-1 font-mono">Trees • Graphs • Dynamic Programming</div>
                </div>

                {/* AI concept */}
                <div className="group rounded-xl border border-[#27272A] bg-[#0A0A0A] p-4 transition-all duration-200 hover:border-[#3F3F46]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-medium text-[#EF4444]">03 // MODERN TECH</span>
                    <span className="text-[10px] font-mono uppercase text-[#71717A] px-2 py-0.5 rounded bg-[#18181B] border border-[#27272A]">Preview</span>
                  </div>
                  <div className="text-base font-semibold text-white tracking-tight">AI</div>
                  <div className="text-xs text-[#A1A1AA] mt-1 font-mono">LLM Tooling • Prompt Systems • Neural Foundations</div>
                </div>
              </div>

              {/* Status footer bar */}
              <div className="mt-5 pt-4 border-t border-[#27272A]/70 flex items-center justify-between text-[11px] font-mono text-[#71717A]">
                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#22C55E]" />
                  <span>Curated for student developers</span>
                </div>
                <span>100% Focused</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
