import React from "react";
import Link from "next/link";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";

export const FinalCTA = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-[#0A0A0A]">
      {/* Background Subtle Red Glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 -z-10 h-96 w-[500px] md:w-[700px] rounded-full bg-[#EF4444]/15 blur-[120px]" />

      <Container size="md">
        <div className="relative rounded-2xl border border-[#27272A] bg-[#111111]/80 backdrop-blur-sm p-10 md:p-14 text-center shadow-xl shadow-black/40">
          <div className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#EF4444] bg-[#EF4444]/10 border border-[#EF4444]/25 mb-6 select-none">
            START BUILDING
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            Ready to learn something new?
          </h2>

          <p className="max-w-xl mx-auto text-base sm:text-lg text-[#A1A1AA] mb-8 leading-relaxed">
            Explore practical resources designed for your developer journey.
          </p>

          <div className="flex justify-center">
            <Link href="/products">
              <Button variant="primary" size="lg" className="px-8">
                Explore Products
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};
