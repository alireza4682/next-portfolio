"use client";
import Image from "next/image";
import useScrollPosition from "../hooks/useScrollPosition.hook";
import me from "../../public/me.jpg";

function IntroNav() {
  const yPos = useScrollPosition();
  return (
    <div>
      {yPos < 200 ? (
        <div className=" flex w-64 h-64 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 justify-center items-center m-4">
          {/* <Image
          src={me}
          alt="me"
          className="w-full h-full object-cover rounded-full p-1.5 contrast-125"
          priority={true}
          width={244}
          height={244}
        /> */}
        </div>
      ) : (
        <div>
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
        </div>
      )}
      <div className="">Alireza Arezoumandan</div>
      <div className="text-sm">
        Frontend engineer with 5+ years of experience
      </div>
    </div>
  );
}

export default IntroNav;
