import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";

export default function Home() {
  return (
    <main className="container mx-auto px-5 lg:px-14">
      <Navbar />
      <Hero />
      <Brands />
    </main>
  );
}
