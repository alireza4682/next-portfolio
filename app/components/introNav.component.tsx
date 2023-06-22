import Image from "next/image";
import useIsInViewport from "../hooks/useIsInVeiwport";
import { NavigationMenu, NavigationMenuItem } from "./ui/navbar";

import me from "../../public/me.jpg";
import { useRef } from "react";

function IntroNav() {
  return (
    <div>
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
      <div className="">Alireza Arezoumandan</div>
      <div className="text-sm">
        Frontend engineer with 5+ years of experience
      </div>
    </div>
  );
}

export default IntroNav;
