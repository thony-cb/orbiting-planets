import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Planets from "@/components/Planets";

export default function Home() {
  return (
    <main
      style={{ backgroundImage: "url(/Stars.png)" }}
      className="relative flex flex-col justify-between w-full min-h-screen bg-black "
    >
      <Navbar />
      <Hero />
      <Planets />
    </main>
  );
}
