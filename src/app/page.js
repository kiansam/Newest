import Image from "next/image";
import Body from "../../components/Body";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <section className="m-0 p-0">
      <Navbar />
      <Body />
      <Footer /> 
    </section>
  );
}
