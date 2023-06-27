"use client";
import Image from "next/image";
import me from "../../public/me.jpg";

function IntroNav() {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-64 h-64 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500  m-4">
        {/* <Image
          src={me}
          alt="me"
          className="w-full h-full object-cover rounded-full p-1.5 contrast-125"
          priority={true}
          width={244}
          height={244}
        /> */}
      </div>
      <div className="">Alireza Arezoumandan</div>
      <div className="text-sm">
        Frontend engineer with 5+ years of experience
      </div>
    </div>
  );
}

export default IntroNav;
