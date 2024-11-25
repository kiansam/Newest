import Image from "next/image";
import Body from "../../../components/About";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export default function About() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Navbar />
      <Body />
      <Footer className="" />
    </div>
  );
}
