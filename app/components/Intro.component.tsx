"use client";
import Image, { ImageLoaderProps } from "next/image";
import me from "../../public/me.jpg";
import Link from "next/link";
import { useTheme } from "next-themes";

// const preferedStack = [
//   "nextjs",
//   "typescript",
//   "react",
//   "tailwindcss",
//   "redux",
//   "prisma",
// ];

// const imageLoader = ({ src, width, quality }: ImageLoaderProps) => {
//   return `/library/${src}.svg`;
// };

//  {preferedStack.map((i, idx) => {
//     const element = preferedStack[idx];
//     return (
//       <div
//         key={i}
//         className="rounded-full flex w-16 h-16 bg-white m-2 self-center justify-self-center p-1"
//       >
//         <Image
//           loader={imageLoader}
//           src={`${element}`}
//           alt={`${element}Logo`}
//           className="p-0.5 object-contain"
//           width={64}
//           height={64}
//           priority={false}
//         />
//       </div>
//     );
//   })}

const Intro = () => {
  const onDownloadClick = () => {
    return window.open(
      "https://drive.google.com/file/d/1c4YzROM0sbDlhzPA35C_i77JyznRayf6/view?usp=share_link"
    );
  };

  const { theme, setTheme } = useTheme();
  const darkModeHandler = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <div className="flex flex-col h-auto md:w-1/3 bg-white text-black dark:bg-black dark:text-white items-center">
      <div className=" flex w-64 h-64 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 justify-center items-center m-4">
        <button
          onClick={() => {
            darkModeHandler();
          }}
        >
          mode
        </button>
        <Image
          src={me}
          alt="me"
          className="w-full h-full object-cover rounded-full p-1.5 contrast-125"
          priority={true}
          placeholder="blur"
        />
      </div>
      <div className="">Alireza Arezoumandan</div>
      <div className="text-sm">
        Frontend engineer with 5+ years of experience
      </div>
      <button
        className="bg-white text-black p-1.5 rounded-md m-2"
        onClick={() => onDownloadClick()}
      >
        download CV.pdf
      </button>
      <div className="m-4">
        5+ years of experience in JavaScript and 3+ years of experience in
        Reactjs, TypeScript, Redux and RESTful APIs. 2+ years of experience
        working with Nextjs, GraphQl and MongoDB. 2+ years of experience working
        in cross functional environment 2+ years of test driven development. 1+
        year of experience working with Nodejs and Expressjs
      </div>
      <div className="w-4/5">
        <div className="text-center">prefered stack:</div>
        <div className="p-1 border-2 border-white rounded-lg grid grid-cols-3 m-2 ">
          <div className="bg-white w-16 h-16 m-2 rounded-full p-0.5 self-center justify-self-center">
            <Image
              src={"library/nextjs.svg"}
              alt="nextjsLogo"
              className=""
              width={64}
              height={64}
            />
          </div>
          <div className=" w-16 h-16 m-2 rounded-lg self-center justify-self-center p-1">
            <Image
              src={"library/typescript.svg"}
              alt="typescriptLogo"
              className="rounded-lg"
              width={64}
              height={64}
            />
          </div>
          <div className="rounded-full flex w-16 h-16 bg-white m-2 self-center justify-self-center p-1">
            <Image
              src={"library/react.svg"}
              alt="reactLogo"
              className="object-contain p-0.5"
              width={64}
              height={64}
            />
          </div>
          <div className="rounded-full flex w-16 h-16 bg-white m-2 self-center justify-self-center p-1">
            <Image
              src={"library/tailwindcss.svg"}
              alt="tailwindcssLogo"
              className="object-contain p-1"
              width={64}
              height={64}
            />
          </div>
          <div className="rounded-full flex w-16 h-16 bg-white m-2 self-center justify-self-center p-1">
            <Image
              src={"library/redux.svg"}
              alt="reduxLogo"
              className="object-contain p-1"
              width={64}
              height={64}
            />
          </div>

          <div className="rounded-full flex w-16 h-16 bg-white m-2 self-center justify-self-center p-1">
            <Image
              src={"library/prisma.svg"}
              alt="prismaLogo"
              className="object-contain p-1"
              width={64}
              height={64}
            />
          </div>
        </div>
      </div>
      <div>
        <div className="font-extrabold">contact:</div>
        <div className="text-sm">alirezaarezoumandan1@gmail.com</div>
        <div className="text-sm">
          <Link
            href="http://www.linkedin.com/in/seyedalireza-arezoumandan"
            target="_blank"
            prefetch={false}
          >
            linkedin
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Intro;
