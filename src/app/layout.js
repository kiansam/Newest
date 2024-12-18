import { Inter } from "next/font/google";
import GoogleAdsense from "../../components/GoogleAdsense";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kian Samadani",
  description: "Created by KianS.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1335079440288698"
          crossorigin="anonymous"
        ></script>
      </head>
      <body className={inter.className}>
        {children}
        <GoogleAdsense pId="1335079440288698" />
      </body>
    </html>
  );
}
