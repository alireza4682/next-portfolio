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

type Twork = {
  heading: string;
  description: string;
  content: React.ReactNode;
  logos: string[];
  className?: string;
};

const Work = (props: Twork) => {
  const { heading, description, content, logos, className } = props;

  return (
    <Card className={`w-auto ${className}`}>
      <CardHeader>
        <CardTitle>{heading}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="">{content}</CardContent>
      <CardFooter className="flex flex-wrap gap-2 mt-2">
        {logos.map((l, _) => {
          return (
            <div className="w-10 h-10" key={l}>
              <Image src={`/library/${l}.svg`} width={32} height={32} alt={l} />
            </div>
          );
        })}
      </CardFooter>
    </Card>
  );
};
export default Work;
