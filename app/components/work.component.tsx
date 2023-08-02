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
    <Card className={`w-auto h-fit ${className}`}>
      <CardHeader>
        <CardTitle>{heading}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="">{content}</CardContent>
      <CardFooter className="flex flex-wrap gap-2">
        {logos.map((l, _) => {
          return (
            <div
              className="w-10 h-10 bg-muted rounded-sm p-1 flex justify-center items-center"
              key={l}
            >
              <Image
                src={`/library/${l}.svg`}
                width={30}
                height={30}
                alt={l}
                placeholder="empty"
                priority={false}
                className="object-contain h-full w-auto p-1"
              />
            </div>
          );
        })}
      </CardFooter>
    </Card>
  );
};
export default Work;
