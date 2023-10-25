import Image from "next/image";
import Link from "next/link";
import CvDownload from "../../components/cvDownload.component";
import me from "@/public/me.jpg";
import { Separator } from "@/components/ui/seperator";
import { Mail, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function LeftPage() {
  return (
    <div className=" p-2 flex flex-col items-center sticky top-0 -mt-20">
      <div className="flex flex-row items-center gap-2 text-sm my-1 ">
        <Image
          src={me}
          width={48}
          height={48}
          alt="small picture"
          className="rounded-full object-cover aspect-square"
        />
        <div>Alireza Arezoumandan</div>
        <div>6 years experience</div>
      </div>
      <Separator className="mb-10" />
      <div className="m-2 prose prose-sm max-w-md dark:prose-invert text-foreground border-border border rounded-sm p-4 shadow-sm font-mono">
        <h6>
          6 years of experience in <kbd>JavaScript</kbd> and 3+ years of
          experience in Reactjs, TypeScript, Redux and RESTful APIs. 2+ years of
          experience working with Nextjs, GraphQl and MongoDB. 2+ years of
          experience working in cross functional environment 2+ years of test
          driven development. 1+ year of experience working with Nodejs and
          Expressjs.
        </h6>
      </div>
      <CvDownload />
      <div className="mt-6">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                className="text-sm flex flex-row items-center gap-4"
                variant={"link"}
              >
                <span>
                  <Mail />
                </span>
                alirezaarezoumandan1@gmail.com
              </Button>
            </TooltipTrigger>
            <TooltipContent>copy email</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <div className="text-sm flex flex-row items-center mx-4">
          <Linkedin />
          <Button className="gap-4" variant={"link"}>
            <Link
              href="http://www.linkedin.com/in/seyedalireza-arezoumandan"
              target="_blank"
              prefetch={false}
            >
              Linkedin
            </Link>
          </Button>
        </div>
        <div className="text-sm flex flex-row items-center mx-4">
          <Github />
          <Button className="gap-4" variant={"link"}>
            <Link
              href="http://www.github.com/alireza4682"
              target="_blank"
              prefetch={false}
            >
              Github
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
