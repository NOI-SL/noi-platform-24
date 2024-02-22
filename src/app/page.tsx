import Herosec from "@/components/herosec";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-full  flex flex-col  w-full">
      <Navbar />
      <Herosec />
    </main>
  );
}
