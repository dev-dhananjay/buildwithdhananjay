import { Hero } from "@/components/Hero";
import { ValueProps } from "@/components/ValueProps";
import { CategorySection } from "@/components/CategorySection";
import { FeaturedResources } from "@/components/FeaturedResources";
import { WhySection } from "@/components/WhySection";
import { HowItWorks } from "@/components/HowItWorks";
import { FinalCTA } from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      {/* SECTION 1: HERO */}
      <Hero />

      {/* SECTION 2: VALUE PROPOSITION */}
      <ValueProps />

      {/* SECTION 3: CATEGORIES */}
      <CategorySection />

      {/* SECTION 4: FEATURED RESOURCES */}
      <FeaturedResources />

      {/* SECTION 5: WHY BUILDWITHDHANANJAY */}
      <WhySection />

      {/* SECTION 6: HOW IT WORKS */}
      <HowItWorks />

      {/* SECTION 7: FINAL CTA */}
      <FinalCTA />
    </>
  );
}


