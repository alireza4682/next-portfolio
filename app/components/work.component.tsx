import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

import { Separator } from "./ui/seperator";

import Freelance2 from "../content/freelance2";

type Twork = {
  heading: string;
  content: string[];
  logos: string[];
};

const Work = (props: Twork) => {
  const { heading, content, logos } = props;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="">{heading}</CardTitle>
        <CardDescription>frontend dev</CardDescription>
      </CardHeader>
      <CardContent className="">
        <Freelance2 />
        {content.map((c, idx) => (
          <div key={idx}>{c}</div>
        ))}
      </CardContent>
      <CardFooter className="flex gap-2 mt-2">
        {logos.map((l, _) => {
          return (
            <div className="w-16 h-16" key={l}>
              <Image src={`/library/${l}.svg`} width={64} height={64} alt={l} />
            </div>
          );
        })}
      </CardFooter>
    </Card>
  );
};
export default Work;
