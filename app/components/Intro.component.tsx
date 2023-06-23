import Image from "next/image";
import me from "../../public/me.jpg";
import Link from "next/link";
import CvDownload from "./cvDownload.component";
import IntroNav from "./introNav.component";

const Intro = () => {
  return (
    <div className="flex flex-col h-auto w-full md:w-1/3 min-w-[450px]  items-center dark:secondary m-10">
      <IntroNav />
      <div className="m-4">
        5+ years of experience in JavaScript and 3+ years of experience in
        Reactjs, TypeScript, Redux and RESTful APIs. 2+ years of experience
        working with Nextjs, GraphQl and MongoDB. 2+ years of experience working
        in cross functional environment 2+ years of test driven development. 1+
        year of experience working with Nodejs and Expressjs
      </div>
      <CvDownload />
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
