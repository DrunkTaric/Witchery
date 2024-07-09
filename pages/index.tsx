import About from "@/components/about";
import Brands from "@/components/brands";
import Hero from "@/components/hero";
import Plans from "@/components/plans";
import Reviews from "@/components/reviews";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={inter.className}>
      <Hero />
      <Brands />
      <About />
      <Plans />
      <Reviews />
    </main>
  );
}
