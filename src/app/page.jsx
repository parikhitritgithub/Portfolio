import Hero from "../components/Hero";
import Navbar from "@/components/Navbar";



export default function Home() {
  return (
    <main className="relative bg-[#070a11] min-h-screen min-w-screen">
      <div className="relative gap-10 sm:p-12 text-white">
        <Navbar />
        <Hero />
      </div>

    </main>
  );
}
