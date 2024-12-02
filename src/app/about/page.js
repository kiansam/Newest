import Image from "next/image";
import Body from "../../../components/About";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Script from "next/script";

export default function About() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Navbar />
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1335079440288698"
        crossorigin="anonymous"
      ></Script>

      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-1335079440288698"
        data-ad-slot="7226673389"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <Script>{`(adsbygoogle = window.adsbygoogle || []).push({})`}</Script>
      <Body />
      <Footer className="" />
    </div>
  );
}
