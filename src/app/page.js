import Image from "next/image";
import Body from "../../components/Body";
import Navbar from "../../components/Navbar";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Navbar />
      <Body />
    </main>
  );
}
