import Navbar from "./_components/global/Navbar";
import Hero from "./_sections/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col relative">
        <Hero />
      </div>
    </>
  );
}
