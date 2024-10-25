import Navbar from "./_components/global/Navbar";
import Hero from "./_sections/Hero";
import Journey from "./_sections/Journey";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col relative">
        <Hero />
        <Journey />
      </div>
    </>
  );
}
