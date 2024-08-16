import Image from "next/image";
import Body from "../../components/Body";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";


export default function Home() {
  return (
    <section>
      <Navbar />
      <Body />
      <Footer />
    </section>
  );
}
