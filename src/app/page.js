import Image from "next/image";
import Body from "../../components/Body";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Navbar />
      <Body />
      <Footer className="" />
    </div>
  );
}
