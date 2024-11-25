import Image from "next/image";
import Body from "../../../components/About";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export default function About() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1335079440288698"
        crossorigin="anonymous"
      ></script>
      <Navbar />
      <Body />
      <Footer className="" />
    </div>
  );
}
