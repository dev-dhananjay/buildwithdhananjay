import { Container } from "@/components/ui/Container";

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center py-20">
      <Container size="sm" className="text-center space-y-3">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#FFFFFF]">
          BuildWith<span className="text-[#EF4444]">Dhananjay</span>
        </h1>
        <p className="text-base text-[#A1A1AA]">
          Your digital learning resources are coming soon.
        </p>
      </Container>
    </div>
  );
}

