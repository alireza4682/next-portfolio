import Image from "next/image";
import me from "../../public/me.jpg";

export default function LeftLayout({
  leftpage,
}: {
  leftpage: React.ReactNode;
}) {
  return (
    <div className="p-2 flex flex-col items-center mt-10">
      <div className="flex flex-col items-center text-center w-full bg-background z-30">
        <div className="w-64 h-64 rounded-full bg-gradient-to-r from-sky-500 via-purple-500 to-pink-800 m-4">
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
        <p className="text-sm">Frontend engineer with 6 years of experience</p>
      </div>
      {leftpage}
    </div>
  );
}
