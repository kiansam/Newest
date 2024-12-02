import Image from "next/image";
import Body from "../../components/Body";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Script from "next/script";

export default function Home() {
  <script
    async
    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1335079440288698"
    crossorigin="anonymous"
  ></script>;
  return (
    <div className="flex flex-col h-screen justify-between">
      <Navbar />
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1335079440288698"
        crossorigin="anonymous"
      />
      <Script id="adsbygoogle-init">
        {`(adsbygoogle = window.adsbygoogle || []).push({})`}
      </Script>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-1335079440288698"
        data-ad-slot="9717105356"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <Body />
      <Footer />
    </div>
  );
}
