import React from "react";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { Badge } from "./ui/Badge";

interface ResourcePlaceholder {
  title: string;
  category: string;
  badgeCode: string;
  topics: string[];
}

const placeholderResources: ResourcePlaceholder[] = [
  {
    title: "Python",
    category: "Programming",
    badgeCode: "PY-01",
    topics: ["Core Syntax", "Data Structures", "Async I/O", "Object-Oriented Design"],
  },
  {
    title: "DSA",
    category: "Algorithms",
    badgeCode: "DSA-02",
    topics: ["Arrays & Hashmaps", "Binary Trees", "Graphs & BFS/DFS", "Dynamic Programming"],
  },
  {
    title: "AI",
    category: "Machine Learning",
    badgeCode: "AI-03",
    topics: ["Prompt Engineering", "RAG Pipelines", "Model APIs", "Vector Databases"],
  },
  {
    title: "JavaScript",
    category: "Web & Core",
    badgeCode: "JS-04",
    topics: ["Event Loop", "Closures & Scope", "Promises / Async", "DOM Architecture"],
  },
];

export const FeaturedResources = () => {
  return (
    <section id="featured" className="py-20 md:py-24 border-b border-[#27272A]/60 bg-[#0A0A0A]">
      <Container size="xl">
        <div className="mb-12">
          <SectionHeading
            badge="CATALOG"
            badgeVariant="accent"
            title="Featured Resources"
            description="Practical resources built for focused learning."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {placeholderResources.map((resource, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-xl border border-[#27272A] bg-[#111111] p-6 text-left transition-colors duration-150 relative overflow-hidden"
            >
              {/* Subtle top indicator bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#27272A] to-transparent" />

              <div>
                {/* Header with category and Coming Soon status */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono uppercase text-[#A1A1AA]">
                    {resource.category}
                  </span>
                  <Badge variant="default" className="text-[10px] tracking-wider uppercase border-[#27272A] bg-[#18181B] text-[#A1A1AA]">
                    Coming Soon
                  </Badge>
                </div>

                {/* Abstract Preview Thumbnail */}
                <div className="mb-5 rounded-lg border border-[#27272A] bg-[#0A0A0A] p-4 flex flex-col items-center justify-center min-h-[110px] text-center">
                  <span className="text-xs font-mono text-[#EF4444] mb-1">
                    {resource.badgeCode}
                  </span>
                  <div className="text-xl font-bold tracking-tight text-white">
                    {resource.title}
                  </div>
                  <span className="text-[11px] text-[#71717A] mt-1 font-mono">
                    Digital Notebook
                  </span>
                </div>

                {/* Topics / Syllabus Preview */}
                <div className="space-y-1.5 mb-6">
                  {resource.topics.map((topic, tIdx) => (
                    <div
                      key={tIdx}
                      className="flex items-center gap-2 text-xs text-[#A1A1AA]"
                    >
                      <span className="h-1 w-1 rounded-full bg-[#EF4444]" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Disabled / Non-purchasing Action */}
              <div className="pt-4 border-t border-[#27272A]/70 flex items-center justify-between">
                <span className="text-xs text-[#71717A] font-mono">
                  In preparation
                </span>
                <button
                  type="button"
                  disabled
                  aria-disabled="true"
                  className="rounded-lg border border-[#27272A] bg-[#18181B] px-3 py-1.5 text-xs font-medium text-[#71717A] cursor-not-allowed opacity-60 select-none"
                >
                  Coming Soon
                </button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
