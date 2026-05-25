import Hero from "../components/Hero";
import TheorySection from "../components/TheorySection";
import FormationProcess from "../components/FormationProcess";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-stone-950">
      <Hero />
      <TheorySection />
      <FormationProcess />
    </main>
  );
}
