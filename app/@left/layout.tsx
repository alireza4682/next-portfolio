"use client";
import Image from "next/image";
import me from "../../public/me.jpg";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver.hook";
import { useRef } from "react";

export default function LeftLayout(props: { children: React.ReactNode }) {
  const myRef = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(myRef, {
    threshold: 0,
    root: document,
    rootMargin: "0px",
  });

  const isVisible = !!entry?.isIntersecting;
  return (
    <>
      {true ? (
        <div className="flex flex-col items-center text-center" ref={myRef}>
          <div className="w-64 h-64 rounded-full bg-gradient-to-r from-sky-500 via-purple-500 to-yellow-500  m-4">
            <Image
              src={me}
              alt="me"
              className="w-full h-full object-cover rounded-full p-1.5 contrast-125"
              priority={true}
              width={244}
              height={244}
            />
          </div>
          <div className="">Alireza Arezoumandan</div>
          <div className="text-sm">
            Frontend engineer with 5+ years of experience
          </div>
        </div>
      ) : (
        <div className="text-white">hi</div>
      )}
      {props.children}
    </>
  );
}
