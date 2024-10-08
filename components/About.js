import React from "react";
import Image from "next/image";
import Me from "./Me.png";

const Body = () => {
  return (
    <div className="top-0">
      <div className="w-full h-640 justify-center text-center align-middle flex pt-32">
        {/* <h1 className="justify-center flex text-3xl font-sans font-bold align-middle">
          Kian Samadani
        </h1> */}
        <div className="rounded-full h-96 w-96">
          <Image src={Me} alt="Picture of the author" className="rounded-full bg-contain"/>
        </div>
      </div>
    </div>
  );
};

export default Body;
